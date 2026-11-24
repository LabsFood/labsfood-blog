# Services suspendus — archive de la refonte batch cooking

Ce dossier conserve tout ce qui a été retiré du site lors de la refonte de
septembre 2026, quand Lab's Food s'est recentré exclusivement sur le batch
cooking. **Rien n'est perdu** : ces fichiers sont hors du routage Next.js et
hors compilation TypeScript (`tsconfig.json` → `exclude`), donc invisibles du
site, mais prêts à être remis en service.

## Ce qui a été retiré

| Élément | Emplacement d'origine | Fichier archivé |
|---|---|---|
| Page Assistance culinaire | `app/services/assistance-culinaire/page.tsx` | `pages/assistance-culinaire.page.tsx` |
| Page Atelier culinaire | `app/services/atelier-culinaire/page.tsx` | `pages/atelier-culinaire.page.tsx` |
| Page Nous rejoindre | `app/devenir-chef/page.tsx` | `pages/devenir-chef.page.tsx` |
| Index « Nos services » (3 services) | `app/services/page.tsx` | `pages/services-index.page.tsx` |
| Formulaire chef partenaire | `components/forms/ChefForm.tsx` | `components/ChefForm.tsx` |
| Annuaire de chefs filtrable | `components/sections/ChefsFilterable.tsx` | `components/ChefsFilterable.tsx` |
| Grille 3 services | `components/sections/ServicesSection.tsx` | `components/ServicesSection.tsx` |
| Variante de hero (liait l'atelier) | `components/sections/HeroC.tsx` | `components/HeroC.tsx` |
| Route API candidature chef | `app/api/chef/route.ts` | `api/chef.route.ts` |

Les données associées (fiches des 3 services, annuaire des chefs partenaires,
motifs de contact) sont conservées dans `data-supprimees.ts`.

## Ce qui a été modifié ailleurs

- `components/layout/Header.tsx` — entrées « Assistance culinaire », « Atelier
  culinaire » et « Nous rejoindre » retirées de la navigation.
- `components/layout/Footer.tsx` — colonne services réduite au batch cooking.
- `components/forms/ContactForm.tsx` — motifs « assistance-culinaire »,
  « atelier-culinaire » et « devenir-chef » retirés du sélecteur.
- `app/api/contact/route.ts` — libellés des mêmes motifs retirés.
- `lib/services-data.ts` — ne contient plus que le batch cooking.
- `lib/content.ts` — `SERVICES` et `CHEFS` retirés (voir `data-supprimees.ts`).
- `next.config.mjs` — redirections permanentes des anciennes URLs vers
  `/services/batch-cooking` et `/contact`.
- `app/page.tsx` — `ShowcaseSection` (3 services) remplacée par les sections
  dédiées au batch cooking.

## Comment remettre un service en ligne

1. Déplacer le fichier de page archivé vers son emplacement d'origine (voir le
   tableau ci-dessus) et lui redonner le nom `page.tsx`.
2. Restaurer les composants dont il dépend depuis `components/`.
3. Réinjecter les entrées correspondantes de `data-supprimees.ts` dans
   `lib/services-data.ts` et `lib/content.ts`.
4. Rajouter les liens dans `Header.tsx`, `Footer.tsx` et le sélecteur de
   `ContactForm.tsx` (+ le libellé dans `app/api/contact/route.ts`).
5. Retirer la redirection correspondante dans `next.config.mjs`.
6. Vérifier que les visuels référencés existent toujours dans `public/assets/`.

> Les pages archivées ont été écrites avant la refonte : elles utilisent encore
> l'ancienne structure de navigation à trois services. Prévoir une relecture des
> textes avant remise en ligne.
