# Aperçu local / Local preview

## Français

Avec Node.js et PowerShell 7 (`pwsh`) installés, exécuter cette commande à la racine du dépôt.

```sh
node site/server.cjs
```

Ouvrir [l’accueil français](http://127.0.0.1:64678/) ou [l’accueil anglais](http://127.0.0.1:64678/README.html). Le serveur écoute uniquement sur la boucle locale. Si le port est occupé, en passer un autre, par exemple `node site/server.cjs 64679`. Si `pwsh` est installé hors du chemin de recherche, indiquer le chemin de l’exécutable dans `ANARCHOPOEIA_PWSH`.

Les pages utilisent les fichiers Markdown du dépôt. Le navigateur se recharge automatiquement après une modification du Markdown ou de `site/layout.html`. Après une modification de `site/server.cjs`, arrêter le serveur avec Ctrl+C et relancer la commande.

## English

With Node.js and PowerShell 7 (`pwsh`) installed, run the command above from the repository root.

Open the [French homepage](http://127.0.0.1:64678/) or the [English homepage](http://127.0.0.1:64678/README.html). The server listens on loopback only. If the port is in use, pass another one, for example `node site/server.cjs 64679`. If `pwsh` is installed outside your search path, set `ANARCHOPOEIA_PWSH` to the executable path.

Pages use the repository’s Markdown files. The browser reloads automatically when Markdown or `site/layout.html` changes. After editing `site/server.cjs`, stop the server with Ctrl+C and start it again.
