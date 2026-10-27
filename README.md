# Lab's Food — Site principal

Site mère de Lab's Food : ateliers, batch cooking et produits artisanaux (Kossam).
Le site batch cooking dédié (`batchcooking-web`) est un repo séparé. **Le lien
sortant vers ce service n'est pas encore finalisé** : `BATCH_COOKING_URL`
(`lib/utils.ts`) pointe aujourd'hui vers un Google Form provisoire, pas vers un
sous-domaine `labsfood.*` réel — à corriger une fois la stratégie de sous-domaines
tranchée (voir le plan de migration global).

## Stack

- Next.js 15 (App Router) · React 19
- Tailwind CSS · Framer Motion · Radix UI · lucide-react
- Polices : Fraunces (display) + Montserrat (sans) + DM Mono (mono)
- Palette : navy `#00234B` · terra `#D96941` · teal `#193C40`

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3007 (voir "dev" dans package.json)
```

## Structure

```
app/
  page.tsx                       Accueil (3 variantes de hero dispo)
  services/                      Liste services
    atelier-culinaire/page.tsx   Détail atelier (avec lien vers /devenir-chef)
    batch-cooking/page.tsx       Présentation + redirection externe
  devenir-chef/page.tsx          Formulaire d'inscription des chefs
  produits/                      Catalogue
    kossam/page.tsx              Fiche produit Kossam complète
  contact/page.tsx               Formulaire + WhatsApp + réseaux

components/
  layout/    Header, Footer, AnnouncementBar
  sections/  HeroA, HeroB, HeroC, ServicesSection, ProductsSection,
             FounderSection, ReviewsSection, CtaSection, KossamReviewsCarousel
  forms/     ChefForm, ContactForm
  ui/        Button, SectionHeader, PageHero

lib/
  utils.ts    cn(), WhatsApp helpers, BATCH_COOKING_URL
  content.ts  Données statiques (services, produits, avis, founder)
```

## Hero de la home

`app/page.tsx` utilise actuellement **HeroD** (plusieurs variantes historiques
existent sous `components/sections/` — vérifier l'import en tête de fichier avant
de se fier à un README, celui-ci dérive vite sur ce point précis).

## État du projet

Les endpoints des deux formulaires (`ChefForm` → `app/api/chef`, `ContactForm` →
`app/api/contact`) sont **réels**, pas simulés : ils envoient un email via Brevo SMTP
(Nodemailer), mais **n'écrivent rien dans le backend `LF-BackEnd`** — aucune de ces
soumissions n'est aujourd'hui persistée en base ni visible depuis l'admin dashboard.
Les fonctionnalités admin (CMS, gestion des soumissions, stats) restent à brancher.
Voir [AGENTS.md](./AGENTS.md) pour le détail (variables d'environnement, cible de
déploiement).
