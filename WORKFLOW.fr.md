# Workflow éditorial — règles de travail

**Périmètre :** tout ajout ou changement substantiel au manifeste, y compris ses **finalités, principes et définitions**, doit être examiné sous la forme d'une proposition.

Ce document formalise le workflow discuté avec l'initiateur le 16 novembre 2026. Une seule personne maintient actuellement le projet ; sa gouvernance et la procédure d'approbation pourront évoluer.

## Rôle des documents

- **Proposition :** argumentaire complet, recherches, références, critiques, évaluation, texte proposé pour le manifeste et historique réunis **dans un même document**.
- **Manifeste :** synthèse concise des versions de propositions **approuvées**, avec liens vers leurs dossiers. Il reste lisible sans reproduire toutes les recherches.
- **Issues / pull requests GitHub :** discussions et modifications proposées ; l'historique Git conserve les versions antérieures.
- **Notes historiques :** supprimées de l'arborescence active ; certaines versions antérieures peuvent rester citées par des commits Git immuables, sans adoption automatique.

## Trois statuts

| Statut | Signification | Effet sur le manifeste |
| --- | --- | --- |
| `in_progress` | Rédaction, recherche ou révision d'une version candidate | Aucun |
| `awaiting_approval` | Version candidate soumise à une décision éditoriale | Aucun |
| `approved` | **Version précise** acceptée par une décision consignée | Publication ou actualisation du texte proposé dans le manifeste |

### Première approbation

`in_progress` → `awaiting_approval` → `approved`.

Chaque proposition indique son identifiant, sa version de travail, son statut, sa décision d'approbation et sa section éventuelle dans le manifeste. Le passage à `approved` exige une décision éditoriale explicite, et ne résulte pas automatiquement de la création ou de la fusion d'un brouillon.

### Révision d'une proposition approuvée

**La dernière version approuvée et son entrée dans le manifeste restent en vigueur** pendant qu'une version candidate est `in_progress` ou `awaiting_approval`. Les révisions se préparent dans une branche/PR pour préserver la version approuvée sur `main`. Une fois approuvée, la révision remplace l'entrée précédente dans le manifeste et met à jour ensemble la version et l'historique de la proposition. **« Révision approuvée » est un événement, et non un statut supplémentaire.** Les modifications refusées ne remplacent pas le texte approuvé.

Une proposition peut aussi être retirée, remplacée ou rejetée ; documenter la décision et son effet sur le manifeste. Il s'agit d'issues possibles, **pas de statuts supplémentaires du cycle courant**.

### Qui approuve ?

**Actuellement, l'initiateur du projet est le seul responsable de l'approbation éditoriale**, faute d'autres décisionnaires actifs. Il ne faut pas présenter ses décisions comme des ratifications collectives. Consigner la date, l'autorité ayant approuvé, les motifs, les alternatives, les objections et le lien vers la PR. L'approbation signifie **intégration au manifeste de travail actuel**, et non vérité démontrée ou accord unanime. La procédure pourra elle-même être révisée par une proposition.

## Ordre des sections obligatoires

1. **Problem — Problème**
2. **Objectives — Objectifs**
3. **Proposal — Proposition**
4. **Alternatives**
5. **Criticism and limitations — Critiques et limites**
6. **Evaluation — Évaluation**
7. **Proposed Manifesto Entry — Texte proposé pour le manifeste** — texte directement publiable si approuvé, placé juste après l'évaluation
8. **Research — Recherche** — développement des recherches, éléments étayés et questions ouvertes
9. **References — Références** — sources complètes et limites, après vérification
10. **Revision history — Historique des révisions**

La section **Research** se situe après **Evaluation** et avant **References**, le **texte proposé pour le manifeste immédiatement après Evaluation**. Ces dix sections figurent dans toute proposition, y compris les définitions fondamentales. Ce texte présente directement ce qui serait publié, **sans résumer le raisonnement**, et n'est intégré qu'après une approbation explicite. Citer les sources là où les affirmations sont formulées, puis réunir les références complètes. Signaler les simples pistes de lecture non vérifiées.

Voir le [modèle](PROPOSAL_TEMPLATE.fr.md) et le [catalogue des propositions](proposals/README.fr.md).

## Versions, publication et langues

- Chaque proposition possède un identifiant stable, par exemple `AP-0001`. Une version de travail `0.1` n'est pas une version approuvée.
- Une version approuvée doit être documentée par son numéro **et** un lien vers le commit ou la PR permettant de la retrouver.
- L'anglais fait référence pour la rédaction ; le français est maintenu en parallèle. D'autres langues utilisent le même dossier numéroté et un nom de fichier correspondant à leur code BCP 47.
- Après une approbation, actualiser `manifesto/en.md` et les traductions correspondantes ou signaler explicitement qu'une traduction doit être révisée. Ne pas inventer de traduction ni laisser des divergences silencieuses.
- `main` est la branche de travail par défaut. Créer chaque nouvelle proposition directement sur `main` au statut `in_progress`, sans créer de branche dédiée.
- Les **révisions de versions déjà approuvées** restent sur des branches jusqu'à leur approbation.
- Modifier le workflow ou l'autorité d'approbation exige aussi une proposition.

## Vérifications avant approbation

Le problème et l'objet de la proposition sont-ils clairs ? Les alternatives et objections sont-elles correctement exposées ? Les jugements normatifs et les constats empiriques sont-ils distingués ? Les sources et limites sont-elles indiquées ? Les personnes concernées, risques et possibilités effectives de contestation sont-ils examinés lorsque c'est pertinent ? Le texte proposé pour le manifeste est-il autonome, directement publiable et cohérent avec les arguments du document ? Décision et traductions sont-elles traçables ?
