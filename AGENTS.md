# AGENTS.md — Les guides Labs Food

## Ce que c'est

Blog éditorial statique de Lab's Food, servi sur `https://blog.labsfood.fr/guides/`.
Astro 7 (Markdown via Sätteri) + Caddy, image Docker déployée sur Railway
(`railway.toml`). L'ancien site mère Next.js est archivé dans `Archive_/` : ni construit,
ni déployé, ne pas le modifier.

Le blog est **édité par Labs Food et le dit partout** (pied de page, « Qui sommes-nous »,
fin de chaque article). Ne jamais le présenter comme un site indépendant : pratique
commerciale trompeuse (Code de la consommation L121-4).

## Écrire un guide

- Un fichier par article dans `src/content/guides/<slug>.md`. Le slug donne l'URL.
- Règles de fond et légales : `docs/guide-redaction.md`. File de sujets : `docs/calendrier.md`.
- Frontmatter validé au build (`src/content.config.ts`) : `seoTitle` ≤ 60 car.,
  `description` 120-160 car. **en texte brut** (le build échoue sur `#`, `**`, listes),
  `category` (`src/data/categories.ts`), `tags` (articles liés), `author`
  (`src/data/authors.ts`, jamais d'auteur inventé), `sources` (≥ 1), `faq`, `draft`.
- Typographie française automatique (`src/lib/typo.mjs`) : espaces insécables avant
  `% € : ; ? !`. Écrire des espaces normales, le build s'en charge.
- Temps de lecture (`src/lib/reading-time.ts`), sommaire (titres H2), bio de l'auteur et
  « À lire ensuite » (`relatedGuides` dans `src/lib/guides.ts`) sont calculés.

## Direction artistique

**Le blog complète l'image de marque, il ne la remplace pas.** Ordre de priorité :

1. La charte de marque de `batchcooking-web` (`/brand`) et ses règles d'écran
   (`batchcooking-web/docs/ui-ux-guidelines.md`) : palette (navy `#2C3E50`, ambre
   `#F39C12` / `#9A5B00` pour le texte, menthe `#D1F2EB`, crème `#FBFCFD`), Fraunces
   pour les titres, Montserrat pour le texte, rayons concentriques, un seul CTA principal
   par vue, bouton ambre à texte marine, anti-slop (pas d'ornement décoratif, pas de
   badge qui ne dit pas un statut, pas de mono hors chiffres d'identification).
2. Le guide esthétique ci-dessous, pour tout ce que la charte ne tranche pas : il sert à
   rendre le blog distinctif **à l'intérieur** de la marque, jamais à changer de police,
   de palette ou de ton.

Ce que ça donne ici : profondeur par dégradés de la palette et la forme de marque
(`src/assets/motif.svg`, une fois par vue) plutôt que des aplats ; une seule entrée
orchestrée en CSS sur le bandeau d'ouverture (280 ms, décalée de 40 ms, coupée en
`prefers-reduced-motion`) ; barre de lecture liée au défilement sans JS ; tokens en
variables CSS dans `src/styles/global.css`. Chaque bloc de mouvement est commenté
(principe + durée).

Guide esthétique de référence (cookbook Anthropic « Prompting for frontend aesthetics »),
à lire avec la priorité ci-dessus :

```
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>
```

Arbitrages déjà faits avec la marque : polices = Fraunces + Montserrat (celles de la
marque, pas de nouvelle famille) ; thème clair (celui du site) ; « geometric patterns »
remplacé par la forme de marque, car la charte interdit les grilles de points et
ornements ; motion limité au bandeau d'ouverture.

## Commandes

```bash
npm install
npm run build     # dist/ ; échoue si un frontmatter est invalide
npm run preview   # http://localhost:4321/guides/
```

`npm run dev` affiche aussi les brouillons (`draft: true`).

## Déploiement

- Railway, service `labsfood-web` du projet `LF-Frontend` : `develop` → environnement
  develop, `main` → production. Image : build Astro puis Caddy sur le port 8080.
- Domaine cible : `blog.labsfood.fr` (CNAME Cloudflare vers Railway), `/` redirige vers
  `/guides/`.
- Publier un article = fusionner sa PR. Jamais de fusion sans l'accord explicite de MajorD.
