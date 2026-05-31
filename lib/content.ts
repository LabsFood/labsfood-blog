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
      { size: '1.5L', price: '20€' },
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

/**
 * REVIEWS — fusion Kossam (court, snack) + Batch cooking (long, structuré).
 *
 * Champs :
 *  - source : 'kossam' | 'batch' | 'atelier' — drive le tag et la teinte
 *  - text   : commentaire client
 *  - author : nom/pseudo (initiale utilisée pour l'avatar)
 *  - city   : optionnel, affichage subtil sous le nom
 */
export const REVIEWS = [
  // ─── Kossam (commentaires courts, exclamatifs) ──────────────────────
  { author: 'Arrel', text: "🙌🏾🙌🏾🙌🏾 C'est trop bon mama", source: 'kossam' as const },
  {
    author: 'Pria',
    text: "Franchement excellent. 10/10. J'ai beaucoup beaucoup aimé. J'ai hâte que mon fils soit en âge d'en manger.",
    source: 'kossam' as const,
  },
  {
    author: 'Boriska',
    text: "Ma bouteille de Kossam décorée avec des fleurs reste l'une de mes plus grande joie.",
    source: 'kossam' as const,
  },
  {
    author: 'Dony',
    text: "On s'est régalé avec le Kossam 🙂‍↕️ C'est trop bon massa",
    source: 'kossam' as const,
  },
  {
    author: 'Zemira',
    text: "Le beau des beaux a validé. Merci Lab's Food 🥰",
    source: 'kossam' as const,
  },
  {
    author: 'Carole',
    text: "Mama j'ai goûté le Kossam… Aïe aïe aïe 😭 Les mots me manquent.",
    source: 'kossam' as const,
  },
  {
    author: 'Guy',
    text: "Ma cousine a kiffé ton lait 🥛 — Je vais peut-être encore acheter ça la semaine prochaine.",
    source: 'kossam' as const,
  },
  {
    author: 'Christian',
    text: "Elle est très compliquée en nourriture & boisson, et elle a direct aimé le Kossam.",
    source: 'kossam' as const,
  },
  {
    author: 'Ingrid',
    text: "J'ai seulement fermé les yeux pour ne pas finir le Kossam avant d'arriver à la maison.",
    source: 'kossam' as const,
  },
  { author: 'Brodon', text: 'Excellent 👌🏽', source: 'kossam' as const },

  // ─── Batch cooking (avis longs, structurés) — fusionnés du projet labs-food ──
  {
    author: 'Ted',
    city: "Côte d'Azur",
    text: "Expérience appétissante avec Lab's Food. En tant qu'inculte de la cuisine, j'ai commandé trois plats pour découvrir : fondue de poireaux riz et saumon, bœuf aux oignons, poulet basquaise et plantain vapeur. Le programme prévu a bien été respecté, le rendu était clean et bien organisé. Une semaine avec de la bouffe à la maison validée — de quoi souffler des McDo !",
    source: 'batch' as const,
  },
  {
    author: 'Ghislain & Raissa',
    city: "Côte d'Azur",
    text: "Nous avons fait appel à Lab's Food après la naissance de notre fille pour nous faire du batch cooking et tout s'est parfaitement bien déroulé. Les plats choisis ont été respectés à la lettre. En bonus, nous avons eu droit à un cleaning complet de la cuisine. Nous vous le recommandons vivement.",
    source: 'batch' as const,
  },
  {
    author: 'Joe',
    city: "Côte d'Azur",
    text: "J'ai fait appel à Lab's Food car j'étais débordée avec les enfants (maman solo de 3). J'ai pu manger pendant 3 jours sans me poser la question de savoir « qu'est-ce que je cuisine aujourd'hui ? ». Ce fut une belle expérience que j'ai renouvelée et que je recommande à 10 000 %.",
    source: 'batch' as const,
  },

  // ─── Nouveaux avis Kossam (doc "Commentaires pour site de LF") ──────
  {
    author: 'Laee',
    text: "Best Kossam ever tasted ❤️🤧. Tu maîtrises ta chose maaa.",
    source: 'kossam' as const,
  },
  {
    author: 'Carole Modimo',
    text: "J'avais pour habitude de consommer le kossam au Cameroun, mais celui de Lab's Food est particulier. Très bon, très onctueux. Je n'hésite pas à diviser ma bouteille en deux quand il ne reste que le fond. Et le service également est impeccable. Reviens nous vite la mère du kossam 🫶",
    source: 'kossam' as const,
  },
  {
    author: 'Yves Emma',
    text: "Un Kossam qui me fait voyager jusqu'au 237 — simple, onctueux, plusieurs saveurs et qui se conserve bien. Un délice.",
    source: 'kossam' as const,
  },
  {
    author: 'Kelian',
    text: "Je ne pense pas avoir déjà goûté un yaourt plus goûteux, plus onctueux que le Kossam de Lab's Food. C'est vraiment un pur délice.",
    source: 'kossam' as const,
  },
  {
    author: 'Marylou',
    text: "Meilleur Kossam consommé jusqu'ici ❤️ — les différentes saveurs fruitées rajoutent un PEPS ! 🤧 Coco mon préféré 🫶",
    source: 'kossam' as const,
  },
  {
    author: 'Steve Enygma',
    text: "Délicieux Kossam, ça m'a rappelé les saveurs du pays et des souvenirs d'enfance. Je recommande totalement ! 🙏",
    source: 'kossam' as const,
  },
  {
    author: 'Arthur Tenkam',
    text: "Le Kossam Lab's Food est un vrai régal. Il faut le goûter pour comprendre.",
    source: 'kossam' as const,
  },
  {
    author: 'David Carpentier',
    text: "Le kossam c'est une folie. Ça me transporte en enfance avec ce petit goût de lait concentré. C'est addictif.",
    source: 'kossam' as const,
  },
  {
    author: 'Kevin',
    text: "J'ai adoré le kossam — je l'ai fini en une soirée.",
    source: 'kossam' as const,
  },

  // ─── Avis Services & Nourriture (plats, prestations à domicile) ──────
  {
    author: 'Kelian',
    text: "Le riz de Lab's Food ?? D'en parler ? Vous n'êtes pas prêts !!",
    source: 'service' as const,
  },
  {
    author: 'Daryl Wilfried',
    text: "Le ndolé du chef à couper le souffle. Une réelle extase pour les papilles gustatives.",
    source: 'service' as const,
  },
  {
    author: 'Steve Enygma',
    text: "Des plats savoureux et un service qui réchauffent le cœur.",
    source: 'service' as const,
  },
  {
    author: 'Arthur Tenkam',
    text: "J'ai contacté Lab's Food pour un plantain poulet DG et vraiment ma satisfaction était à 100 %. Merci encore Lab's Food !",
    source: 'service' as const,
  },
  {
    author: 'David Carpentier',
    text: "Un service au top ! Les goûts et les saveurs vous font voyager depuis votre salon.",
    source: 'service' as const,
  },
  {
    author: 'Franck',
    text: "Très bon plat fait par Ivy. Avec passion et amour. La qualité est irréprochable. Je recommande à 100 %.",
    source: 'service' as const,
  },
  {
    author: 'Jennifer',
    text: "En tant que Béninoise, j'ai été conquise par le ndolè de Lab's Food. J'y ai retrouvé réconfort, amour et le goût du 237. Excellent !",
    source: 'service' as const,
  },
  {
    author: 'Junior',
    text: "J'ai eu l'occasion de goûter plusieurs plats d'Ivy et je n'ai jamais été déçu. Une cuisine généreuse, savoureuse et faite avec passion. On sent le soin apporté aux détails — foncez les yeux fermés, elle gère de fou.",
    source: 'service' as const,
  },
  {
    author: 'Ange',
    text: "Je me suis régalée 😍🙏 — dites-vous qu'au début je me disais « qu'est-ce que celle-ci a encore fabriqué ? » 🤣🤣 En tout cas sa créativité est à saluer, et rassurez-vous, le goût suit 🙏🤩",
    source: 'service' as const,
  },
  {
    author: 'Bénédicte',
    text: "On vient de dégommer les poissons / banane plantain, c'était vraiment délicieux.",
    source: 'service' as const,
  },
  {
    author: 'Kuikui',
    text: "En plus de faire des repas délicieux, elle est très propre.",
    source: 'service' as const,
  },
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
    place: 'FRANCE, la concrétisation',
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
    title: "Fondatrice",
    photo: '/assets/placehold.jpeg',
    region: "Provence-Alpes-Côte d'Azur",
    regionId: 'paca',
    cities: [
      'Antibes',
      'Biot',
      'Cagnes-sur-Mer',
      'Cros de Cagnes',
      'Nice',
      'Juan les Pins',
      'Cannes',
      'Le Bosquet',
      'La Frayère',
      'Ranguin',
      'Mouans-Sartoux',
      'Grasse',
    ],
    zone: "Côte d'Azur — Alpes-Maritimes",
    bio: "Passionnée jusqu'au bout de la spatule, je suis prête à mettre la main à la pâte pour devenir votre renfort de choc en cuisine : contactez-moi pour en discuter !",
    /** Pitches optionnels par service. Si vide, on retombe sur `bio`. */
    pitches: {} as { atelier?: string; assistance?: string },
    badges: ["06 ans d'expérience"],
    /** Certifications affichées en badge visuel sur la card (pas en texte). */
    certifications: ['HACCP'],
    languages: ['FR', 'PT', 'EN'],
    specialties: ['Cuisines du monde', 'Cuisine africaine', 'Dressage & présentation'],
    available: true,
    bookingLink: BATCH_COOKING_URL,
    /** Liens Calendly différenciés par service (vide = utilise bookingLink). */
    bookingLinks: {} as { atelier?: string; assistance?: string },
    /** Pages où ce chef apparaît. Si false, masqué sur cette page. */
    services: { atelier: true, assistance: true },
  },
  {
    id: 'ange',
    n: '02',
    name: 'Ange',
    title: "Etudiante",
    photo: '/davila.jpeg',
    region: 'Occitanie',
    regionId: 'occitanie',
    cities: ['Pau'],
    zone: 'Pau',
    bio: "Animatrice d'ateliers et assistante culinaire, je viens vous prêter main-forte en cuisine.",
    pitches: {
      assistance:
        "Assistante culinaire | 4 ans d'expérience en restauration et traiteur 🍽️ Que vous soyez professionnel (chef, traiteur, restaurateur) ou particulier (repas du quotidien, réceptions, accompagnement), je viens vous prêter main-forte en cuisine ! Contactez-moi pour planifier notre prochaine collaboration ! 👩‍🍳",
      atelier:
        "Animatrice d'ateliers cuisine à domicile 🍽️ Vous avez envie de cuisiner ce que vous avez toujours voulu apprendre, de partager une activité originale en famille ou d'animer un événement entre amis ? Je propose des sessions personnalisées adaptées à tous les niveaux et tous les publics. Un moment d'apprentissage, de partage et de plaisir — directement chez vous. Contactez-moi pour planifier votre atelier ! 👩‍🍳",
    } as { atelier?: string; assistance?: string },
    badges: ["4 ans d'expérience", 'Restauration & traiteur'],
    certifications: [] as string[],
    languages: ['FR', 'EN'],
    specialties: ['Cuisine africaine', 'Cuisine européenne'],
    available: true,
    /** Lien Calendly par défaut — utilisé si pas de bookingLinks dédié. */
    bookingLink: 'https://calendly.com/ktdange/assistance-culinaire',
    /** Liens Calendly différenciés par service. */
    bookingLinks: {
      assistance: 'https://calendly.com/ktdange/assistance-culinaire',
      atelier: 'https://calendly.com/ktdange/assistance-culinaire-clone',
    } as { atelier?: string; assistance?: string },
    services: { atelier: true, assistance: true },
  },
] as const

// ─── Helpers pour les filtres ──────────────────────────────────────────────
/** Retourne les régions uniques disponibles, déduites des chefs */
export function getAvailableRegions() {
  const map = new Map<string, string>()
  CHEFS.forEach((c) => map.set(c.regionId, c.region))
  return Array.from(map, ([id, label]) => ({ id, label }))
}

/** Retourne les villes uniques disponibles pour une région donnée (ou toutes) */
export function getAvailableCities(regionId?: string) {
  const set = new Set<string>()
  CHEFS.filter((c) => !regionId || c.regionId === regionId).forEach((c) =>
    c.cities.forEach((city) => set.add(city)),
  )
  return Array.from(set).sort()
}
