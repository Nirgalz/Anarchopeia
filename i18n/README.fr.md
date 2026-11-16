# Traduction et internationalisation

**Langue éditoriale de référence :** anglais (`en`). Le français (`fr`) est la première traduction. La langue ne détermine pas la légitimité des idées.

## Conventions de fichiers

- Accueil : `README.md` et `README.<code-BCP-47>.md` (par exemple `README.fr.md`).
- Gouvernance à la racine : `CONTRIBUTING.md`, `GOVERNANCE.md` et leurs variantes `.<code>.md`.
- Contenu : `content/en/<chemin>.md`, `content/fr/<chemin>.md` et `content/<code>/<chemin>.md`.
- Conserver **les mêmes noms anglais de fichiers et de dossiers** pour chaque langue ; traduire les titres et le texte, pas les chemins.
- Utiliser les codes BCP 47 courts, par exemple `es`, `de` ou `pt-BR`.
- Le dossier `txt/` contient des matériaux historiques à examiner ultérieurement, et ne fait pas encore l'objet d'une traduction.

## Ajouter une langue

1. Créer `content/<code>/` en reprenant les chemins des pages anglaises traduites. Les traductions partielles sont bienvenues ; éviter les pages fictives qui semblent achevées.
2. Ajouter `README.<code>.md` et lier cette page depuis les accueils anglais et traduits.
3. Commencer chaque fichier traduit par un commentaire identifiant sa source anglaise : `<!-- Translation of content/en/... -->`.
4. Préserver le sens ; signaler les notions ambiguës ou contestées au lieu de modifier discrètement des affirmations politiques.
5. Lorsqu'un texte anglais change, identifier les traductions à revoir. La présence d'un fichier ne suffit pas à garantir sa synchronisation.
6. Proposer traductions et mises à jour par pull request, avec un lien vers les discussions en cas de divergence d'interprétation.

Une contribution peut naître dans toute langue. Préserver ses formulations originales et élaborer au besoin une version éditoriale anglaise en collaboration.

L'anglais est la référence pour **la synchronisation**, pas une condition de participation.
