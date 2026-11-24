# Guide de rédaction des guides Labs Food

Lu par la tâche planifiée avant chaque article. Les règles légales ne se négocient pas.

## Règles légales (non négociables)
- Le lien avec Labs Food est toujours dit : section finale « En pratique avec Labs Food » et mention « Article édité par Labs Food » sous les sources. Jamais de ton de « site indépendant » (Code de la consommation L121-4).
- Comparatifs : critères objectifs, vérifiables et datés, sources publiques citées pour chaque concurrent (prix, villes, avance immédiate). Pas de dénigrement (L122-1).
- Jamais de faux avis, faux témoignage, faux chiffre client ou citation inventée.
- Fiscal et URSSAF : chaque chiffre vient d'une source officielle (service-public.gouv.fr, impots.gouv.fr, economie.gouv.fr, urssaf.fr, bofip.impots.gouv.fr) vérifiée le jour de la rédaction. En cas de doute, ne pas donner le chiffre.
- Santé : nutrition et confort uniquement, aucune allégation de traitement (seniors, post-partum, GLP-1).

## Avant d'écrire : la page 1 et notre point de vue

L'article doit répondre à ce que Google sert déjà pour la requête cible, et apporter ce que
personne d'autre ne peut écrire. Les deux étapes sont obligatoires.

### 1. Analyser la page 1 (plan et manques, jamais le texte)
- Chercher la requête cible du calendrier (en français) et lire les 5 à 8 premiers résultats
  qui y répondent vraiment (ni annonces, ni annuaires vides). L'outil de recherche ne donne
  pas le classement exact de google.fr : c'est une approximation de la page 1, à dire comme
  telle.
- Noter : l'intention (s'informer, comparer, acheter), le format dominant (guide, liste,
  tableau, simulateur), les sous-sujets traités par la majorité (à couvrir), les questions
  qui reviennent (candidates pour la `faq`), et surtout **ce qui manque** : exemple chiffré,
  cas concret, date de mise à jour, source officielle, réponse directe. Ce manque est l'angle
  de l'article.
- Interdit : reprendre une phrase, un tableau ou un plan à l'identique, réécrire un article
  paragraphe par paragraphe (contrefaçon, et aucune valeur pour Google ni pour les IA). Les
  pages lues ne sont jamais des sources de chiffres : les chiffres viennent des sources
  officielles (voir règles légales) ou de Labs Food.
- Résumer l'analyse en 5 lignes dans la description de la PR (résultats lus, intention,
  angle retenu), pas dans l'article.

### 2. Apporter le point de vue Labs Food (entretiens)
- Lire les transcriptions du thème dans `docs/entretiens/` (MajorD, cuisiniers). Elles
  donnent l'angle, les exemples concrets, le vocabulaire et les chiffres maison.
- Citer une personne par son nom seulement si sa transcription porte `citable: oui`. Sinon,
  reprendre l'idée sans citation. Jamais de citation reformulée présentée comme exacte.
- Un chiffre interne (prix moyen d'une séance, nombre de portions, délais) n'est utilisé que
  s'il figure dans une transcription ou sur labsfood.fr, avec sa date. Rien de ce qui est
  marqué `confidentiel` dans une transcription ne va dans un article.
- Sans entretien sur le thème, écrire quand même et le signaler dans le message de PR.

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
