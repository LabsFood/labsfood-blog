# Guide de rédaction des guides Labs Food

Lu par la tâche planifiée avant chaque article. Les règles légales ne se négocient pas.

## Règles légales (non négociables)
- Le lien avec Labs Food est toujours dit : section finale « En pratique avec Labs Food » et mention « Article édité par Labs Food » sous les sources. Jamais de ton de « site indépendant » (Code de la consommation L121-4).
- Comparatifs : critères objectifs, vérifiables et datés, sources publiques citées pour chaque concurrent (prix, villes, avance immédiate). Pas de dénigrement (L122-1).
- Jamais de faux avis, faux témoignage, faux chiffre client ou citation inventée.
- Fiscal et URSSAF : chaque chiffre vient d'une source officielle (service-public.gouv.fr, impots.gouv.fr, economie.gouv.fr, urssaf.fr, bofip.impots.gouv.fr) vérifiée le jour de la rédaction. En cas de doute, ne pas donner le chiffre.
- Santé : nutrition et confort uniquement, aucune allégation de traitement (seniors, post-partum, GLP-1).

## Aperçu Google
- `seoTitle` ≤ 60 caractères, contient la requête cible.
- `description` 120 à 160 caractères, texte brut, phrase complète, chiffre clé. Le build bloque le Markdown.

## Forme
- Frontmatter : `category` (voir `src/data/categories.ts`), 2 à 4 `tags` partagés avec les guides proches (ils alimentent « À lire ensuite »), `author: equipe` tant qu'aucune vraie personne n'est déclarée dans `src/data/authors.ts`.
- Espaces normales avant `% € : ; ? !` : le build les rend insécables.
- 1 200 à 1 800 mots. Réponse directe dans les 2 premières phrases (c'est ce que reprennent Google et les IA).
- Titres H2 sous forme de questions ou d'affirmations claires, tableaux pour les chiffres, 3 à 5 questions en `faq`.
- Vouvoiement, phrases courtes, pas de jargon, pas de tirets cadratins, pas de superlatifs creux.
- Liens internes : 1 à 3 vers d'autres guides publiés, 1 vers labsfood.fr avec `?utm_source=blog&utm_medium=guides`.
- Prix Labs Food : reprendre ceux de labsfood.fr (page tarifs, FAQ), jamais les inventer.
- `updatedAt` = date de rédaction ; mettre à jour l'article plutôt qu'en écrire un doublon.
