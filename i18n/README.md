# Translation and internationalization

**Canonical editorial language:** English (`en`). French (`fr`) is the first translation. Language does not determine the legitimacy of ideas.

## File conventions

- Root navigation: `README.md` and `README.<BCP-47-tag>.md` (for example `README.fr.md`).
- Root governance: `CONTRIBUTING.md`, `GOVERNANCE.md`, plus `.<tag>.md` variants.
- Content: `content/en/<path>.md`, `content/fr/<path>.md`, and `content/<tag>/<path>.md`.
- Keep the **same English slugs and directory paths** in all languages; translate visible headings and body text, not filenames.
- Use short BCP 47 tags such as `es`, `de`, or `pt-BR`.
- The existing `txt/` is historical material reserved for later consideration, not currently a translation target.

## Adding another language

1. Create `content/<tag>/` mirroring the paths of English pages that you translate. Partial translations are welcome; do not publish placeholders that appear complete.
2. Add `README.<tag>.md` and link it from English and translated landing pages.
3. Begin each translated content file with a comment identifying its English source: `<!-- Translation of content/en/... -->`.
4. Preserve meaning; flag ambiguous or contested terminology instead of silently changing political claims.
5. When English content changes, identify translated counterparts requiring review. File presence alone does not prove that it is synchronized.
6. Propose translations and updates in pull requests, linking discussions about disagreements in interpretation.

Contributions may originate in any language. Preserve original formulations and collaborate on the English editorial text if needed.

English is the point of reference for **synchronization**, not a requirement for participation.
