# Lab's Food — Site principal

Site mère de Lab's Food : ateliers, batch cooking et produits artisanaux (Kossam).
Le site batch cooking dédié reste séparé sur `labsfood.batchcooking.fr` (lien sortant).

## Stack

- Next.js 15 (App Router) · React 19
- Tailwind CSS · Framer Motion · Radix UI · lucide-react
- Polices : Fraunces (display) + Montserrat (sans) + DM Mono (mono)
- Palette : navy `#00234B` · terra `#D96941` · teal `#193C40`

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3006
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

Trois variantes prêtes à comparer — décommenter celui à tester dans `app/page.tsx` :
- **HeroA** — Cinématique vidéo plein écran (par défaut)
- **HeroB** — Split asymétrique + encarts colorés
- **HeroC** — Triptyque magazine (3 piliers)

## TODO admin (phase 2)

Les fonctionnalités admin (CMS, gestion des soumissions, stats) sont volontairement
mises de côté pour cette première version. À brancher plus tard.

Les endpoints des deux formulaires (`ChefForm`, `ContactForm`) sont simulés et
attendent une intégration côté serveur (API route, Resend, etc.).
