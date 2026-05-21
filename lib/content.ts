// Données statiques du site Lab's Food.
// Centralise textes, prix, avis pour réutilisation par les pages.

export const SITE = {
  name: "Lab's Food",
  tagline: "L'art de cuisiner, partagé",
  description:
    "Lab's Food, c'est une maison culinaire fondée par Ivy : ateliers de cuisine à domicile, batch cooking sur-mesure, et produits artisanaux comme le Kossam.",
  email: 'contact@labsfood.fr',
}

export const SERVICES = [
  {
    slug: 'atelier-culinaire',
    name: 'Atelier culinaire',
    short: 'Apprenez les cuisines du monde, chez vous, en petit comité.',
    description:
      "Un atelier privé animé par une cheffe passionnée. Vous choisissez la cuisine, vous apprenez pas à pas, vous repartez avec la fiche recette et un cadeau surprise.",
    bullets: [
      'Atelier privé jusqu\'à 4 personnes : 80€',
      '+20€ par personne supplémentaire (10 max)',
      'Fiche recette + cadeau surprise inclus',
      'Option gestion des courses (+20€)',
    ],
    accent: 'terra',
  },
  {
    slug: 'batch-cooking',
    name: 'Batch cooking',
    short: 'Une cheffe vient préparer toute votre semaine à votre domicile.',
    description:
      "En 2 heures minimum, une cheffe professionnelle cuisine une semaine entière de repas variés et équilibrés directement chez vous.",
    bullets: [
      'Préparation sur-mesure',
      'Ingrédients frais & locaux',
      'Repas équilibrés pour toute la semaine',
      'Disponible sur la Côte d\'Azur',
    ],
    accent: 'navy',
    external: true,
  },
  {
    slug: 'assistance-culinaire',
    name: 'Assistance culinaire',
    short: 'Un coup de main professionnel en cuisine pour vos événements et vos équipes.',
    description:
      "Un grand dîner, une fête de famille, un traiteur ou un restaurant qui a besoin de renfort ? Lab's Food intervient en cuisine — aide à la préparation, dressage, coordination. Le rôle est défini selon vos besoins.",
    bullets: [
      'Particuliers : grands dîners & fêtes de famille',
      'Professionnels : traiteurs, chefs, restaurants',
      'Rôle défini selon le volume et le besoin',
      'Devis personnalisé après discussion',
    ],
    accent: 'teal',
  },
] as const

export const PRODUCTS = [
  {
    slug: 'kossam',
    name: 'Kossam',
    tagline: 'Boisson lactée fermentée — savoir-faire camerounais',
    status: 'available' as const,
    formats: [
      { size: '0.5L', price: '7€' },
      { size: '1.5L', price: '19.99€' },
    ],
    short:
      "L'alternative onctueuse, légèrement acidulée, inspirée d'un précieux savoir-faire camerounais.",
    description:
      "Découvrez le Kossam, l'alternative onctueuse qui va réinventer vos moments gourmands. Inspirée d'un précieux savoir-faire traditionnel camerounais, cette boisson lactée fermentée séduit instantanément par sa texture incroyablement veloutée et son équilibre parfait — où la douceur réconfortante du lait rencontre une note délicatement acidulée. Le Kossam est avant tout une expérience sensorielle et un véritable allié pour votre bien-être, vous apportant fraîcheur, douceur et vitalité tout au long de la journée.",
    usages: [
      'Très frais au verre, pour un moment de pur plaisir',
      'Versé sur un granola croustillant au petit-déjeuner',
      'Mixé dans vos smoothies pour une consistance incomparable',
      'Base de sauces d\'accompagnement légères et raffinées',
    ],
    delivery: "Côte d'Azur uniquement",
  },
] as const

export const COMING_SOON = [
  { name: 'Kossam Bissap', category: 'Boisson' },
  { name: 'Luxury Kossam', category: 'Boisson' },
  { name: 'Ail noir', category: 'Épice' },
  { name: 'Marinade verte 100% BIO', category: 'Condiment' },
  { name: 'Cakes', category: 'Pâtisserie' },
  { name: 'Cocktails', category: 'Boisson' },
] as const

export const REVIEWS = [
  { author: 'Arrel', text: "🙌🏾🙌🏾🙌🏾 C'est trop bon mama" },
  {
    author: 'Pria',
    text: "Franchement excellent. 10/10. J'ai beaucoup beaucoup aimé. J'ai hâte que mon fils soit en âge d'en manger.",
  },
  {
    author: 'Boriska',
    text: "Ma bouteille de Kossam décorée avec des fleurs reste l'une de mes plus grande joie.",
  },
  { author: 'Dony', text: "On s'est régalé avec le Kossam 🙂‍↕️ C'est trop bon massa" },
  { author: 'Zemira', text: "Le beau des beaux a validé. Merci Lab's Food 🥰" },
  {
    author: 'Carole',
    text: "Mama j'ai goûté le Kossam… Aïe aïe aïe 😭 Les mots me manquent.",
  },
  {
    author: 'Guy',
    text: "Ma cousine a kiffé ton lait 🥛 — Je vais peut-être encore acheter ça la semaine prochaine.",
  },
  {
    author: 'Christian',
    text: "Elle est très compliquée en nourriture & boisson, et elle a direct aimé le Kossam.",
  },
  {
    author: 'Ingrid',
    text: "J'ai seulement fermé les yeux pour ne pas finir le Kossam avant d'arriver à la maison.",
  },
  { author: 'Brodon', text: 'Excellent 👌🏽' },
] as const

export const FOUNDER = {
  name: 'Ivy',
  title: 'Fondatrice & cheffe',
  bio: "Ingénieure de formation et étudiante, mais avant tout une véritable passionnée de gastronomie et d'évasion. Après avoir exploré les cultures et les saveurs de 21 pays, j'ai eu une conviction : le plus beau des voyages se passe souvent autour d'une assiette.",
  mission:
    "Vous faire voyager culinairement parlant, sans aucune tracasserie de visa. Lab's Food crée le lien entre passionnés de cuisine qui veulent transmettre, et gourmands qui veulent découvrir.",
  countries: 21,
  certifications: ['HACCP'],
  languages: ['Français', 'Portugais', 'Anglais'],
}

/**
 * Chefs disponibles pour l'assistance culinaire.
 * Extensible : ajouter un objet par chef partenaire validé.
 */
export const CHEFS = [
  {
    id: 'ivy',
    n: '01',
    name: 'Ivy',
    title: "Fondatrice & Cheffe · Lab's Food",
    photo: '/IvyOfficielle.png',
    region: "Côte d'Azur",
    zone: "Nice · Cannes · Antibes · Monaco",
    bio: "Ingénieure de formation, passionnée de gastronomie et de voyages. Après avoir exploré 21 pays et leurs cuisines, Ivy a fondé Lab's Food pour partager une vision : cuisiner, c'est voyager.",
    certifications: ['HACCP'],
    languages: ['FR', 'PT', 'EN'],
    specialties: ['Cuisines du monde', 'Cuisine africaine', 'Dressage & présentation'],
    countries: 21,
    available: true,
    whatsappMessage: "Bonjour Ivy, je souhaite vous contacter pour une assistance culinaire — voici mon événement : ",
  },
] as const
