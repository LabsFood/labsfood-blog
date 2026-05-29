// Données statiques du site Lab's Food.
// Centralise textes, prix, avis pour réutilisation par les pages.

import { BATCH_COOKING_URL } from "./utils"

export const SITE = {
  name: "Lab's Food",
  tagline: "L'art de cuisiner, partagé",
  description:
    "Lab's Food, fondé par Ivy : ateliers de cuisine à domicile, batch cooking sur-mesure, et produits artisanaux comme le Kossam.",
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
    accent: 'navy-mid',
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
    tagline: 'Boisson lactée faite avec beaucoup d’amour pour vous',
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
  { name: 'Köni', category: 'Marinade' },
  { name: 'Luxury Kossam', category: 'Boisson' },
  { name: 'Ail noir', category: 'Épice' },
  // { name: 'Marinade verte 100% BIO', category: 'Condiment' },
  // { name: 'Cakes', category: 'Pâtisserie' },
  // { name: 'Cocktails', category: 'Boisson' },
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
  name: 'Siyaptze',
  nick: 'Ivy',
  title: 'Fondatrice de Lab\'s Food',
  /**
   * Bio officielle — fournie par la cliente (Updates LabsFood Main, onglet 3)
   * Structurée en paragraphes courts pour le rendu éditorial.
   */
  bioParagraphs: [
    "Ingénieure de formation et toujours étudiante pour me spécialiser dans la gestion de projets et l'excellence opérationnelle, je connais parfaitement ce que signifie vivre à 100 à l'heure. C'est justement parce que je voyais les personnes autour de moi, submergées par ce même rythme effréné, galérer pour bien manger que j'ai reimaginé Lab's Food.",
    "Le véritable déclic s'est produit lors de la grossesse de ma tante. À cette époque, mon agenda était un marathon ininterrompu. Je courais 7 jours sur 7 : la semaine, je jonglais entre l'école et mon entreprise d'alternance, et le week-end, je travaillais dans un restaurant d'où je rentrais souvent vers 23 heures. J'étais épuisée, et ma tante habitait à deux heures de route.",
    "Pourtant, je me battais pour dégager du temps et aller lui préparer ses repas. À chaque fois, la voir s'illuminer, la voir me remercier avec un sourire si profond m'a bouleversée. Elle me disait « MERCI » comme si j'avais fait quelque chose d'exceptionnel. Et j'ai réalisé qu'elle avait raison : soulager la charge mentale d'une personne par la cuisine, c'est exceptionnel.",
    "Ce sourire a été mon moteur. J'ai laissé derrière moi ce rythme épuisant pour créer Lab's Food, un projet que je mène de front avec mes études. Après tout, optimiser le temps et l'organisation, c'est le cœur de mon métier !",
    "J'ai commencé par le batch cooking à domicile. Puis, face à la réalité de l'entrepreneuriat et pour faire tourner l'entreprise, je me suis adaptée. J'ai ajouté l'assistance et les ateliers culinaires à domicile, avant de faire un pari audacieux : lancer une gamme de produits d'exception.",
    "C'est ainsi qu'est arrivé notre fameux Kossam. Le succès a été immédiat ! Aujourd'hui, c'est plus de 150 gourmands régalés et fidélisés. Une vraie fierté qui me pousse à aller encore plus loin.",
    "Aujourd'hui, Lab's Food n'est plus seulement une entreprise, c'est une véritable plateforme dédiée à votre bien-être gourmand. Je vois grand pour la suite, et je vous invite à rester connectés, car de magnifiques choses se préparent en coulisses…",
    "En attendant, je vous laisse parcourir Nos services sur-mesure et découvrir nos produits d'exception. Laissez-nous entrer dans votre cuisine, nous nous occupons du reste.",
  ],
  /**
   * Pull-quote phare extraite de la bio (déclic).
   */
  signaturePull:
    "Soulager la charge mentale d'une personne par la cuisine, c'est exceptionnel.",
  mission:
    "Lab's Food, c'est une plateforme dédiée à votre bien-être gourmand — entrer dans votre cuisine pour vous y faire respirer.",
  gourmandsServed: 150,
  certifications: ['HACCP'],
  languages: ['Français', 'Anglais', 'Portugais'],
}

/**
 * Chronologie LAB'S FOOD en 4 temps (Updates LabsFood Main, onglet 4)
 */
export const TIMELINE = [
  {
    year: '2020',
    place: 'Cameroun',
    title: 'Les premiers pas',
    body: "L'aventure Lab's Food commence ! Ma première mission à l'époque ? Conquérir les cœurs et les estomacs, principalement avec mon riz sauté et mes pâtisseries (crêpes, cakes…).",
  },
  {
    year: '2021',
    place: 'Brésil',
    title: "L'école de la résilience",
    body: "Nouveau continent, nouveau défi. Je me lance dans la commercialisation de douceurs… et c'est un échec total ! Je ne maîtrise pas les codes locaux. Une claque, mais surtout une formidable leçon qui m'a forgée.",
  },
  {
    year: '2025',
    place: 'France',
    title: 'La révélation',
    body: "Je pose mes valises et je repense mon modèle. Je teste mon concept de batch cooking à domicile et je fais découvrir mon fameux Kossam gratuitement. Les retours sont incroyables, l'évidence est là : ça marche.",
  },
  {
    year: '2026',
    place: 'La concrétisation',
    title: 'Naissance officielle',
    body: "L'année où tout prend forme. Je structure l'ensemble de mes services, j'allie mes compétences en gestion de projets et excellence opérationnelle à ma passion, et je fonde officiellement l'entreprise. Lab's Food est prête à révolutionner votre quotidien !",
  },
] as const

/**
 * Chefs disponibles pour l'assistance culinaire.
 * Extensible : ajouter un objet par chef partenaire validé.
 *
 * Champs :
 *  - badges   : certifications, expérience, distinctions (flexible)
 *  - languages: codes ISO 2 lettres ['FR', 'EN', 'PT'...]
 *  - zone     : ville(s) / code(s) postal(aux) d'intervention
 */
export const CHEFS = [
  {
    id: 'ivy',
    n: '01',
    name: 'Ivy',
    title: "Fondatrice & Cheffe · Lab's Food",
    photo: '/assets/placehold.jpeg',
    region: "Côte d'Azur",
    zone: "Nice · Cannes · Antibes",
    bio: "Ingénieure de formation, passionnée de gastronomie et de voyages. Ivy a fondé Lab's Food pour partager une vision : cuisiner, c'est voyager.",
    badges: ['HACCP', 'Cuisines du monde'],
    languages: ['FR', 'PT', 'EN'],
    specialties: ['Cuisines du monde', 'Cuisine africaine', 'Dressage & présentation'],
    available: true,
    /**
     * Lien de prise de rendez-vous (Calendly / YouCanBookMe).
     * Cf. onglet 5 du doc client : on n'affiche jamais le numéro perso en public.
     * À remplacer par le vrai lien du chef quand disponible.
     */
    bookingLink: BATCH_COOKING_URL,
  },
  {
    id: 'davilla',
    n: '02',
    name: "D'Avilla",
    title: "Chef partenaire · Lab's Food",
    photo: '/davila.jpeg',
    region: 'Seine-et-Marne · Île-de-France',
    zone: 'Secteur 77127 et alentours',
    bio: "Aujourd'hui, j'accumule 2 ans d'expérience en restauration en tant qu'équipière polyvalente. Traiteurs, restaurateurs — je suis disposée à vous donner un coup de main en cuisine. Contactez-moi pour que l'on travaille ensemble.",
    badges: ["2 ans d'expérience", 'Restauration'],
    languages: ['FR', 'EN'],
    specialties: ['Cuisine africaine', 'Cuisine européenne'],
    available: true,
    bookingLink: 'https://calendly.com/ktdange/30min',
  },
] as const
