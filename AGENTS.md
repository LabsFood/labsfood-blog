# AGENTS.md

## Ce que c'est

Site mère de Lab's Food (Next.js App Router) : accueil, `/services` (atelier
culinaire, assistance culinaire, redirection vers batch cooking), `/produits/kossam`,
`/devenir-chef` (formulaire chef), `/contact`. Voir le README pour le detail des
routes et de la structure des composants.

## Etat actuel (important)

- Les formulaires `ChefForm` (`app/api/chef`) et `ContactForm` (`app/api/contact`)
  sont **fonctionnels** : ils envoient un email via Brevo SMTP (Nodemailer), avec
  validation serveur et retry. Mais **rien n'est persiste dans `LF-BackEnd`** — ce
  sont des emails, pas des leads/quotes en base.
- Pas d'authentification dans ce repo (site vitrine).
- `lib/content.ts` et `lib/services-data.ts` contiennent chacun une liste de
  services — deux sources partiellement redondantes, a fusionner en Phase 4/5
  plutot que dupliquees plus longtemps.
- `react-hook-form`, `@hookform/resolvers`, `zod` sont dans les dependances mais
  ne sont utilises nulle part dans le code actuel (formulaires en state React
  simple) — a utiliser reellement ou a retirer.
- `BATCH_COOKING_URL` (`lib/utils.ts`) pointe vers un Google Form provisoire, pas
  vers le vrai domaine de `batchcooking-web` — a corriger avec la strategie de
  sous-domaines (Phase 7 du plan de migration).

## Stack

| Layer | Choix |
|-------|-------|
| Runtime | Node.js 20 (voir `.nvmrc`) |
| Framework | Next.js 15.1.11 (App Router) + React 19 |
| Style | Tailwind CSS, Radix UI assemble a la main (pas shadcn CLI) |
| Email | Nodemailer + Brevo SMTP |

## Demarrage local

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Ouvre http://localhost:3007 (port fixe, voir `package.json` — le README historique
mentionnait 3006, corrige).

## Variables d'environnement

Voir `.env.local.example`.

- `LF_API_URL` : adresse de `LF-BackEnd`. Le formulaire de contact lui transmet les
  messages (`app/api/contact/route.ts` -> `POST /contact-messages`) ; ils arrivent
  dans la console admin. Lue cote serveur au demarrage, pas a la compilation.
- Identifiants SMTP Brevo (`BREVO_SMTP_USER`, `BREVO_SMTP_PASS`, `BREVO_FROM_EMAIL`,
  `CONTACT_TO_EMAIL`) : encore utilises par le formulaire de candidature chef
  (`app/api/chef/route.ts`), plus par le formulaire de contact.

## Qualite / hooks

```bash
npm run lint     # next lint (eslint)
npm run build    # next build
```

Hook pre-commit (Husky + lint-staged) : `eslint --fix` sur les fichiers stages,
installe automatiquement via `npm install` (`scripts.prepare`).

## Deploiement

Actuellement sur Vercel (deploiement implicite, pas de config-as-code). Cible a
terme : Railway (conteneur Docker, `output: 'standalone'` a ajouter dans
`next.config.mjs`) — voir le plan de migration global. Attention aux images non
optimisees dans `public/` (plusieurs fichiers > 1.5 Mo) avant de changer d'hebergeur.
