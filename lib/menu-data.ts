/**
 * Menu du mois — Lab's Food.
 *
 * Le menu change chaque mois. Pour le mettre à jour :
 *   1. changer `month` et `year` ;
 *   2. remplacer les plats de chaque famille (6 plats pour les 3 familles
 *      salées, 4 pour les douceurs) ;
 *   3. si besoin, remplacer l'image de la famille dans /public/assets.
 *
 * `origin` est optionnel : il remplace les drapeaux du visuel Instagram par un
 * libellé lisible, indexable et accessible.
 *
 * Aucun plat n'est imposé : le menu sert d'inspiration, la cliente compose
 * ensuite le sien avec la cheffe (voir ETAPES dans lib/batch-cooking.ts).
 */

export type Plat = {
  name: string
  /** Pays ou région d'inspiration, affiché en petite capitale à côté du plat. */
  origin?: string
  /** Précision de garniture, affichée en plus discret sous le nom. */
  detail?: string
}

export type FamilleMenu = {
  slug: string
  /** Nom de la famille, tel que la cliente le nomme. */
  name: string
  /** Ce que la famille regroupe, en une ligne. */
  summary: string
  image: string
  plats: Plat[]
}

export const MENU = {
  month: 'Septembre',
  year: 2026,
  /** Phrase d'accroche du mois, réécrite à chaque nouveau menu. */
  intro:
    "Chaque mois, une nouvelle carte de saison. Vous y piochez ce qui vous fait envie, vous en écartez ce qui ne vous parle pas, et vous pouvez toujours proposer vos propres plats.",
  familles: [
    {
      slug: 'grand-bleu',
      name: 'Le Grand Bleu',
      summary: 'Poissons et fruits de mer',
      image: '/assets/poissonn.jpeg',
      plats: [
        { name: 'Curry de cabillaud coco-citronnelle', origin: 'Thaïlande' },
        { name: 'Saumon laqué miso-érable' },
        { name: 'Papillote de poisson blanc', detail: 'courgettes et citron' },
        { name: 'Crevettes ail, persil et piment doux' },
        { name: 'Boulettes de saumon sauce citronnée' },
        { name: 'Colin à la crème d’aneth', detail: 'jeunes épinards' },
      ],
    },
    {
      slug: 'braise-terroir',
      name: 'Braise et Terroir',
      summary: 'Viandes et volailles',
      image: '/assets/gallerie/img5.jpeg',
      plats: [
        { name: 'Poisson comme à la Rue de la joie', origin: 'Cameroun' },
        { name: 'Bœuf sauté au basilic thaï' },
        { name: 'Porc caramel et gingembre' },
        { name: 'Émincé de poulet crémeux aux champignons' },
        { name: 'Boulettes de dinde sauce tomate-basilic' },
        { name: 'Cuisses de poulet rôties citron et thym' },
      ],
    },
    {
      slug: 'potager-secret',
      name: 'Le Potager Secret',
      summary: 'Sans viande ni poisson',
      image: '/assets/gallerie/plenty.jpeg',
      plats: [
        { name: 'Dahl de lentilles corail au lait de coco', origin: 'Inde' },
        { name: 'Curry de pois chiches et épinards' },
        { name: 'Chili sin carne', detail: 'haricots rouges et maïs' },
        { name: 'Poêlée de gnocchis', detail: 'tomates confites et mozzarella' },
        { name: 'Gratin de courgettes, ricotta et menthe' },
        { name: 'Taboulé de chou-fleur aux herbes fraîches' },
      ],
    },
  ] satisfies FamilleMenu[],
  /** Les desserts — proposés en option, ou offerts avec la formule Escale. */
  douceurs: {
    slug: 'douceur',
    name: 'Douceur',
    summary: 'Les desserts, en option ou offerts avec la formule Escale',
    image: '/assets/gauffre.jpeg',
    plats: [
      { name: 'Brigadeiros', origin: 'Brésil' },
      { name: 'Mousse chocolat-coco' },
      { name: 'Panna cotta vanille et fruits rouges' },
      { name: 'Crumble pommes-cannelle' },
    ],
  } satisfies FamilleMenu,
}

/** Toutes les familles, douceurs comprises — pour la page menu complète. */
export const TOUTES_FAMILLES: FamilleMenu[] = [...MENU.familles, MENU.douceurs]

/** Nombre total de plats au menu du mois. */
export const NB_PLATS = TOUTES_FAMILLES.reduce(
  (total, f) => total + f.plats.length,
  0,
)
