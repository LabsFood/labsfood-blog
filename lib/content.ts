// Données statiques du site Lab's Food.
// Centralise textes, prix, avis pour réutilisation par les pages.

export const SITE = {
  name: "Lab's Food",
  tagline: "L'art de cuisiner, partagé",
  description:
    "Lab's Food, fondé par Ivy : batch cooking à domicile sur la Côte d'Azur et produits artisanaux — le Kossam et la marinade Köni.",
  email: 'contact@labsfood.fr',
}

export const KOSSAM = {
  slug: 'kossam',
  n: '01',
  name: 'Kossam',
  category: 'Boisson lactée fermentée',
  tagline: 'Boisson lactée faite avec beaucoup d’amour pour vous',
  status: 'available' as const,
  formats: [
    { qty: 1, price: '20€', unitPrice: null },
    { qty: 2, price: '38€', unitPrice: '19' },
    { qty: 3, price: '54€', unitPrice: '18' },
  ],
  short:
    "L'alternative onctueuse, légèrement acidulée, inspirée d'un précieux savoir-faire camerounais.",
  description:
    "Découvrez le Kossam, l'alternative onctueuse qui va réinventer vos moments gourmands. Inspirée d'un précieux savoir-faire traditionnel camerounais, cette boisson lactée fermentée séduit instantanément par sa texture incroyablement veloutée et son équilibre parfait — où la douceur réconfortante du lait rencontre une note délicatement acidulée. Le Kossam est avant tout une expérience sensorielle et un véritable allié pour votre bien-être, vous apportant fraîcheur, douceur et vitalité tout au long de la journée.",
  usages: [
    'Très frais au verre, pour un moment de pur plaisir',
    'Versé sur un granola croustillant au petit-déjeuner',
    'Mixé dans vos smoothies pour une consistance incomparable',
    "Base de sauces d'accompagnement légères et raffinées",
  ],
  delivery: "Côte d'Azur uniquement",
  deliveryNote:
    "Le Kossam est un produit frais : il se récupère ou se livre sur la Côte d'Azur.",
}

/**
 * Marinade Köni — mise en vente lors de la refonte de septembre 2026.
 *
 * Éléments confirmés par la cliente : prix 20,99 €, expédition dans toute
 * l'Europe, frais d'expédition à la charge du client.
 *
 * À COMPLÉTER par la cliente avant mise en ligne définitive :
 *   - photo produit  → /public/assets/koni.jpeg (placeholder actuel)
 *   - contenance du pot et durée de conservation
 *   - liste d'ingrédients et allergènes
 */
export const KONI = {
  slug: 'koni',
  n: '02',
  name: 'Köni',
  category: 'Marinade',
  tagline: 'La marinade qui fait le travail à votre place',
  status: 'available' as const,
  price: '20,99€',
  short:
    "Une marinade prête à l'emploi, née de la cuisine de Lab's Food, qui donne du caractère à une viande, un poisson ou des légumes en un seul geste.",
  description:
    "Köni, c'est le raccourci vers le goût. La marinade que la cheffe prépare pour ses propres plats, mise en pot pour votre cuisine. Une cuillère sur une viande, un poisson ou des légumes, quelques heures de repos, et le plat le plus simple prend de l'épaisseur. Pas de liste d'additifs, pas de dosage à improviser : le travail d'assaisonnement est déjà fait, il ne vous reste que la cuisson.",
  usages: [
    'En marinade sur viandes et volailles, quelques heures avant la cuisson',
    'Sur un poisson ou des crevettes, juste avant le passage au four',
    'Sur des légumes rôtis, pour leur donner du relief',
    'En touche finale dans un riz, un bouillon ou une sauce',
  ],
  delivery: 'Toute l’Europe',
  deliveryNote:
    "Expédiée dans toute l'Europe. Les frais d'expédition sont à la charge du client et vous sont communiqués avant la commande.",
  image: '/assets/marmite.jpeg',
}

export const PRODUCTS = [KOSSAM, KONI]

export const COMING_SOON = [
  { name: 'Luxury Kossam', category: 'Boisson' },
  { name: 'Kossam Bissap', category: 'Boisson' },
  { name: 'Ail noir', category: 'Épice' },
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
    "Pourtant, je me battais pour dégager du temps et aller lui cuisiner ses repas. À chaque fois, la voir s'illuminer, la voir me remercier avec un sourire si profond m'a bouleversée. Elle me disait « MERCI » comme si j'avais fait quelque chose d'exceptionnel. Et j'ai réalisé qu'elle avait raison.",
    "Ce sourire a été mon moteur. J'ai laissé derrière moi ce rythme épuisant pour créer Lab's Food, un projet que je mène de front avec mes études. Après tout, optimiser le temps et l'organisation, c'est le cœur de mon métier !",
    "J'ai commencé par le batch cooking à domicile. Puis, face à la réalité de l'entrepreneuriat et pour faire tourner l'entreprise, je me suis adaptée. J'ai ajouté l'assistance et les ateliers culinaires à domicile, avant de faire un pari audacieux : lancer une gamme de produits d'exception.",
    "C'est ainsi qu'est arrivé notre fameux Kossam. Le succès a été immédiat ! Aujourd'hui, c'est plus de 150 gourmands régalés et fidélisés. Une vraie fierté qui me pousse à aller encore plus loin.",
    "Aujourd'hui, Lab's Food n'est plus seulement une entreprise, c'est une véritable plateforme dédiée à votre bien-être gourmand. Je vois grand pour la suite, et je vous invite à rester connectés, car de magnifiques choses se préparent en coulisses…",
    "En attendant, je vous laisse parcourir nos services sur-mesure et découvrir nos produits d'exception. Laissez-nous entrer dans votre cuisine, nous nous occupons du reste.",
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
