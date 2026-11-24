# Les guides Labs Food

Blog éditorial statique (Astro) servi sur `https://blog.labsfood.fr/guides/`, édité par
Labs Food. L'ancien site mère Next.js est archivé dans [`Archive_/`](Archive_/ARCHIVE.md).

Tout est décrit dans [AGENTS.md](AGENTS.md) : écrire un guide, direction artistique,
commandes et déploiement.

## Flux de publication

Un guide tous les 4 jours : une tâche planifiée lit `docs/calendrier.md` et
`docs/guide-redaction.md`, rédige le sujet suivant, vérifie le build et ouvre une PR.
Fusionner la PR publie l'article.

## Démarrer

```bash
npm install
npm run build && npm run preview   # http://localhost:4321/guides/
```
