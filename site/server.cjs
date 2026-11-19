const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');
const run = promisify(execFile);
const root = path.resolve(__dirname, '..');
const port = Number(process.argv[2] ?? 64678);
const powershell = process.env.ANARCHOPOEIA_PWSH || 'pwsh';

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('Usage: node site/server.cjs [port between 1 and 65535]');
}

function markdownFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const filename = path.join(directory, entry.name);
    if (entry.name.startsWith('.')) return [];
    if (entry.isDirectory()) return markdownFiles(filename);
    return entry.isFile() && entry.name.endsWith('.md') ? [filename] : [];
  });
}

const server = http.createServer(async (request, response) => {
  response.setHeader('Cache-Control', 'no-store');
  try {
    const route = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (route === '/__preview_version') {
      response.setHeader('Content-Type', 'text/plain; charset=utf-8');
      const hash = crypto.createHash('sha256');
      for (const file of [...markdownFiles(root), path.join(__dirname, 'layout.html'), path.join(__dirname, 'render.ps1')].sort()) {
        hash.update(file).update(fs.readFileSync(file));
      }
      response.end(hash.digest('hex'));
      return;
    }
    const page = route === '/' ? '/README.fr.html' : route;
    const file = path.resolve(root, '.' + page.replace(/\.html$/, '.md'));
    const relative = path.relative(root, file);
    if (!page.endsWith('.html') || path.isAbsolute(relative) || relative.split(path.sep).some(part => part.startsWith('.')) || !fs.existsSync(file)) {
      response.writeHead(404).end();
      return;
    }
    const { stdout } = await run(powershell, ['-NoProfile', '-File', path.join(__dirname, 'render.ps1'), file], { windowsHide: true });
    const french = /(?:\.fr|[\\/]fr)\.md$/.test(file);
    const other = french ? page.replace(/\.fr\.html$/, '.html').replace(/\/fr\.html$/, '/en.html')
      : page.endsWith('/en.html') ? page.replace(/\/en\.html$/, '/fr.html') : page.replace(/\.html$/, '.fr.html');
    const translated = fs.existsSync(path.resolve(root, '.' + other.replace(/\.html$/, '.md')));
    const content = page === '/README.html'
      ? stdout.replace(/<p><strong>Languages:<\/strong>[^\r\n]*<\/p>\r?\n?/, '')
      : stdout;
    const body = content.replace(/href="(?![a-z]+:|\/|#)([^"#?]+)\.md([#?][^"]*)?"/gi, 'href="$1.html$2"');
    const layout = fs.readFileSync(path.join(__dirname, 'layout.html'), 'utf8');
    const fields = {
      lang: french ? 'fr' : 'en',
      home: french ? '/README.fr.html' : '/README.html',
      manifesto: french ? '/manifesto/fr.html' : '/manifesto/en.html',
      proposals: french ? '/proposals/README.fr.html' : '/proposals/README.html',
      homeLabel: french ? 'Accueil' : 'Home',
      manifestoLabel: french ? 'Manifeste' : 'Manifesto',
      languageUrl: translated ? encodeURI(other).replace(/"/g, '%22') : french ? '/README.html' : '/README.fr.html',
      languageLabel: french ? 'English' : 'Français',
      body,
    };
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(layout.replace(/\{\{(\w+)\}\}/g, (_, field) => fields[field]));
  } catch (error) {
    console.error(error.message);
    response.writeHead(500).end();
  }
});
server.listen(port, '127.0.0.1', () => {
  console.log(`Anarchopœia: http://127.0.0.1:${port}`);
});
