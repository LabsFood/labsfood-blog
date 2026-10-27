/**
 * Source unique des données du batch cooking — le service désormais central
 * de Lab's Food.
 *
 * Utilisée par :
 *   - components/sections/BatchCookingSection.tsx  (accueil — le service)
 *   - components/sections/AvanceImmediateSection.tsx (accueil — le tarif réel)
 *   - app/services/batch-cooking/page.tsx           (page dédiée + grille)
 *
 * Tarifs fournis par la cliente. Ils sont déjà nets de la réduction de 50 %
 * du crédit d'impôt : ne jamais les recalculer à l'affichage.
 */

/* ── Le déroulé d'une prestation ─────────────────────────────────────────── */

export type Etape = {
  n: string
  title: string
  body: string
}

export const ETAPES: Etape[] = [
  {
    n: '01',
    title: 'On papote',
    body: "Vos envies, vos goûts, le nombre de gourmands à table, vos allergies. On construit VOTRE menu ensemble, rien n'est imposé.",
  },
  {
    n: '02',
    title: 'Vous choisissez votre formule',
    body: "Le nombre de repas que vous voulez pour la semaine. Je m'occupe du reste, courses comprises si vous le souhaitez.",
  },
  {
    n: '03',
    title: 'Le jour J, je cuisine',
    body: "J'arrive chez vous avec ma bonne humeur et je cuisine tout d'un coup, dans votre cuisine, avec votre matériel.",
  },
  {
    n: '04',
    title: 'Vous n’avez plus qu’à réchauffer',
    body: 'Je range vos plats prêts à déguster, je laisse la cuisine nickel. À vous la semaine tranquille.',
  },
]

/* ── Les formules ────────────────────────────────────────────────────────── */

export type Formule = {
  slug: string
  name: string
  /** Résumé court affiché sous le nom */
  summary: string
  repas: number
  price: number
  /** Ligne mise en avant : ce qui distingue la formule */
  highlight?: string
  /** La formule la plus demandée — une seule à la fois */
  featured?: boolean
}

export const FORMULES: Formule[] = [
  {
    slug: 'escale',
    name: 'Escale',
    summary: 'Pour goûter, sans s’engager',
    repas: 1,
    price: 25,
    highlight: 'Dessert offert',
  },
  {
    slug: 'douceur',
    name: 'Douceur',
    summary: 'Le début de semaine couvert',
    repas: 3,
    price: 50,
  },
  {
    slug: 'reconfort',
    name: 'Réconfort',
    summary: 'Du lundi au jeudi, sans y penser',
    repas: 4,
    price: 55,
  },
  {
    slug: 'ndolo',
    name: 'Ndolo',
    summary: 'La semaine entière, notre formule phare',
    repas: 5,
    price: 60,
    featured: true,
  },
]

export type OptionFormule = {
  label: string
  price: number
  detail: string
}

export const OPTIONS: OptionFormule[] = [
  {
    label: 'Personne supplémentaire',
    price: 10,
    detail: 'Au-delà de 3 personnes par repas, par convive en plus.',
  },
  {
    label: 'Courses',
    price: 20,
    detail: 'Je fais les courses avant d’arriver. Vous ne bougez pas.',
  },
  {
    label: 'Dessert',
    price: 10,
    detail: 'Un dessert maison ajouté à votre menu de la semaine.',
  },
]

/** Règle de portion, à rappeler partout où un prix est affiché. */
export const PORTION_NOTE = 'Un repas, c’est pour 3 personnes.'

/** Mention légale à accoler à toute grille tarifaire. */
export const PRIX_NOTE =
  'Tarifs déjà nets de la réduction de 50 % du crédit d’impôt.'

/* ── Le crédit d'impôt et l'avance immédiate ─────────────────────────────── */

export const AVANCE_IMMEDIATE = {
  title: 'Vous ne payez que la moitié, tout de suite.',
  body: "Lab's Food est une activité de Services à la Personne. À ce titre, vos prestations ouvrent droit à un crédit d'impôt de 50 %. Grâce à l'avance immédiate de l'URSSAF, cette réduction est déduite au moment du paiement : vous réglez directement le tarif réduit, sans rien avancer et sans attendre un remboursement l'année suivante.",
  points: [
    {
      title: 'Aucune avance de trésorerie',
      body: "Les 50 % ne sont jamais débités. Le prix affiché sur cette page est celui que vous payez.",
    },
    {
      title: 'Aucun délai',
      body: "Pas de déclaration à remplir, pas d'attente jusqu'au printemps suivant. La déduction est immédiate.",
    },
    {
      title: 'Aucune démarche de votre côté',
      body: "L'inscription à l'avance immédiate se fait une fois, avec vous, avant la première prestation.",
    },
  ],
  /** Exemple chiffré — dérivé de la formule Ndolo, la plus demandée. */
  exemple: {
    formule: 'Ndolo',
    reel: 120,
    paye: 60,
  },
  cesu: "Nous accepterons également les chèques CESU très prochainement.",
}

/* ── Zone d'intervention ─────────────────────────────────────────────────── */

export const ZONE = {
  label: "Côte d'Azur",
  cities: [
    'Nice',
    'Antibes',
    'Cannes',
    'Monaco',
    'Sophia Antipolis',
    'Cagnes-sur-Mer',
    'Juan-les-Pins',
    'Mouans-Sartoux',
    'Grasse',
    'Biot',
  ],
  note: 'et alentours',
}
