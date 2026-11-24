/**
 * Données retirées du site lors de la refonte batch cooking (septembre 2026).
 *
 * Ce fichier est exclu de la compilation (`tsconfig.json` → `exclude`).
 * Il sert de source à recopier telle quelle le jour où l'assistance culinaire,
 * les ateliers culinaires ou le recrutement de chefs reviennent en ligne.
 *
 * Voir README.md pour la marche à suivre complète.
 */

import type { LucideIcon } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────────
 * 1. lib/services-data.ts — les deux services retirés de SHOWCASE_SERVICES
 *    (les icônes venaient de lucide-react : Map, Users, Star, Sparkles,
 *     GraduationCap)
 * ──────────────────────────────────────────────────────────────────────── */

type ServiceFeature = { icon: LucideIcon; label: string }

export const SHOWCASE_SERVICES_RETIRES = [
  {
    slug: 'assistance-culinaire',
    n: '02',
    name: 'Assistance culinaire',
    kicker: 'Renfort en cuisine',
    description:
      "Un rush en cuisine, une fête de famille ou un événement professionnel ? Lab's Food est votre solution de renfort sur-mesure. Nous vous connectons avec le profil idéal (passionné, étudiant ou professionnel) pour vous seconder efficacement.",
    price: 'Sur devis',
    image: '/assets/ange.jpeg',
    href: '/services/assistance-culinaire',
    features: [
      { iconName: 'Map', label: 'Disponible dans toute la France' },
      { iconName: 'Users', label: 'Profils variés (étudiants, professionnels, …)' },
      { iconName: 'Star', label: 'Pour Particuliers et professionnels' },
    ],
  },
  {
    slug: 'atelier-culinaire',
    n: '03',
    name: 'Atelier culinaire',
    kicker: 'Expérience interactive',
    description:
      "Voyagez depuis votre cuisine ! Notre plateforme vous connecte avec des animateurs aux profils variés pour des ateliers uniques. Une belle occasion de maîtriser de nouvelles recettes dans une ambiance conviviale, guidé par un talent de votre région.",
    price: 'Sur devis',
    image: '/assets/photo-15.jpeg',
    href: '/services/atelier-culinaire',
    features: [
      { iconName: 'Users', label: 'En solo ou entre amis' },
      { iconName: 'Sparkles', label: 'Ateliers 100 % personnalisés' },
      { iconName: 'GraduationCap', label: 'Apprentissage pas-à-pas' },
    ],
  },
]

/* ─────────────────────────────────────────────────────────────────────────
 * 2. lib/content.ts — la constante SERVICES (3 services)
 * ──────────────────────────────────────────────────────────────────────── */

export const SERVICES_RETIRES = [
  {
    slug: 'atelier-culinaire',
    name: 'Atelier culinaire',
    short: 'Apprenez les cuisines du monde, chez vous, en petit comité.',
    description:
      "Un atelier privé animé par une cheffe passionnée. Vous choisissez la cuisine, vous apprenez pas à pas, vous repartez avec la fiche recette et un cadeau surprise.",
    bullets: [
      "Atelier privé jusqu'à 4 personnes : 80€",
      '+20€ par personne supplémentaire (10 max)',
      'Fiche recette + cadeau surprise inclus',
      'Option gestion des courses (+20€)',
    ],
    accent: 'navy-mid',
  },
  {
    slug: 'assistance-culinaire',
    name: 'Assistance culinaire',
    short:
      'Un coup de main professionnel en cuisine pour vos événements et vos équipes.',
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
]

/* ─────────────────────────────────────────────────────────────────────────
 * 3. lib/content.ts — la constante CHEFS (annuaire des chefs partenaires)
 *    Utilisée par ChefsFilterable sur les pages assistance et atelier,
 *    ainsi que par les helpers getChefRegions / chefMatchesRegion /
 *    chefMatchesCity / getAvailableRegions / getAvailableCities.
 * ──────────────────────────────────────────────────────────────────────── */

export const CHEFS_RETIRES = [
  {
    id: 'ivy',
    n: '01',
    name: 'Ivy',
    title: 'Fondatrice',
    photo: '/assets/placehold.jpeg',
    region: "Provence-Alpes-Côte d'Azur",
    regionId: 'paca',
    cities: [
      'Antibes', 'Biot', 'Cagnes-sur-Mer', 'Cros de Cagnes', 'Nice',
      'Juan les Pins', 'Cannes', 'Le Bosquet', 'La Frayère', 'Ranguin',
      'Mouans-Sartoux', 'Grasse',
    ],
    zone: "Côte d'Azur — Alpes-Maritimes",
    extraRegions: [] as Array<{ id: string; label: string; cities: string[] }>,
    bio: "Passionnée jusqu'au bout de la spatule, je suis prête à mettre la main à la pâte pour devenir votre renfort de choc en cuisine : contactez-moi pour en discuter !",
    pitches: {
      atelier:
        "Vous aimez bien manger ? Je vais vous apprendre à bien cuisiner ! Offrez-vous un cours à domicile sur-mesure pour apprendre mes meilleures recettes sans stress et avec le sourire. Bloquez votre date, créons de la magie dans vos assiettes… et laissez-moi vous gâter avec un petit cadeau surprise !",
    },
    badges: ['06 ans'],
    certifications: ['HACCP'],
    languages: ['FR', 'PT', 'EN'],
    specialties: ['Cuisines du monde'],
    available: true,
    /** whatsappLink("Bonjour Ivy, j'ai vu votre page À propos et j'aimerais en savoir plus — ") */
    bookingLink: '',
    bookingLinks: {},
    services: { atelier: true, assistance: true },
  },
  {
    id: 'ange',
    n: '02',
    name: 'Ange',
    title: 'Etudiante',
    photo: '/assets/ange.jpeg',
    region: 'Île-de-France',
    regionId: 'ile-de-france',
    cities: [
      'Le Plessis-Bouchard', 'Franconville', 'Eaubonne', 'Ermont', 'Sannois',
      'Argenteuil',
    ],
    extraRegions: [{ id: 'occitanie', label: 'Occitanie', cities: ['Pau'] }],
    zone: "Secteur 95130 (Val-d'Oise) · Pau",
    bio: "Animatrice d'ateliers et assistante culinaire, je viens vous prêter main-forte en cuisine.",
    pitches: {
      assistance:
        "Que vous soyez professionnel (chef, traiteur, restaurateur) ou particulier (repas du quotidien, réceptions, accompagnement), je viens vous prêter main-forte en cuisine ! Contactez-moi pour planifier notre prochaine collaboration !",
      atelier:
        "Vous avez envie de cuisiner ce que vous avez toujours voulu apprendre, de partager une activité originale en famille ou d'animer un événement entre amis ? Je propose des sessions personnalisées adaptées à tous les niveaux et tous les publics. Un moment d'apprentissage, de partage et de plaisir — directement chez vous.",
    },
    badges: ['4 ans', 'Restauration & traiteur'],
    certifications: [] as string[],
    languages: ['FR', 'EN'],
    specialties: ['Cuisine africaine', 'Cuisine européenne'],
    available: true,
    bookingLink: 'https://calendly.com/ktdange/assistance-culinaire',
    bookingLinks: {
      assistance: 'https://calendly.com/ktdange/assistance-culinaire',
      atelier: 'https://calendly.com/ktdange/assistance-culinaire-clone',
    },
    services: { atelier: true, assistance: true },
  },
  {
    id: 'elodie',
    n: '03',
    name: 'Elodie',
    title: 'Étudiante',
    photo: '/assets/Elodie.jpg',
    region: 'Île-de-France',
    regionId: 'ile-de-france',
    cities: [
      'Meaux', 'Nanterre', 'Paris', 'Pontoise', 'Rueil-Malmaison',
      'Saint-Denis', 'Boulogne-Billancourt', 'Versailles',
    ],
    extraRegions: [],
    zone: 'Île-de-France',
    bio: "Étudiante passionnée, j'aime cuisiner. Mon objectif : vous aider et vous accompagner avec bonne humeur pour réaliser de délicieux plats au quotidien !",
    pitches: {
      assistance:
        "Étudiante passionnée, j'aime cuisiner. Mon objectif : vous aider et vous accompagner avec bonne humeur pour réaliser de délicieux plats au quotidien !",
    },
    badges: ['Quelques expériences'],
    certifications: [] as string[],
    languages: ['FR', 'EN'],
    specialties: ['Préparations de base', 'Aide-cuisinier'],
    available: true,
    /** wa.me/33763114460 — "Bonjour Elodie, j'ai vu votre profil sur Lab's Food…" */
    bookingLink: 'https://wa.me/33763114460',
    bookingLinks: {},
    services: { atelier: false, assistance: true },
  },
  {
    id: 'maeva',
    n: '04',
    name: 'Maéva',
    title: 'Professionnelle',
    photo: '/assets/maeva.jpeg',
    region: 'Île-de-France',
    regionId: 'ile-de-france',
    cities: [
      'Paris', 'Houilles', 'Sartrouville', 'Argenteuil',
      'La Garenne-Colombes', 'Nanterre', 'Courbevoie', 'Puteaux',
    ],
    extraRegions: [],
    zone: "Île-de-France — Val-d'Oise & Hauts-de-Seine",
    bio: "Un renfort discret et efficace en cuisine : j'assiste chefs, particuliers et structures professionnelles selon vos besoins.",
    pitches: {
      assistance:
        "Un renfort discret et efficace en cuisine : j'assiste chefs, particuliers et structures professionnelles selon vos besoins.",
    },
    badges: ['1 à 3 ans'],
    certifications: [] as string[],
    languages: ['FR'],
    specialties: ['Préparations de base', 'Aide-cuisinier'],
    available: true,
    bookingLink: 'https://calendly.com/mvadems',
    bookingLinks: { assistance: 'https://calendly.com/mvadems' },
    services: { atelier: false, assistance: true },
  },
]

/* ─────────────────────────────────────────────────────────────────────────
 * 4. Entrées de navigation et de formulaire retirées
 * ──────────────────────────────────────────────────────────────────────── */

/** components/layout/Header.tsx — enfants du menu « Services » */
export const NAV_ENFANTS_RETIRES = [
  {
    label: 'Assistance Culinaire',
    href: '/services/assistance-culinaire',
    iconName: 'ChefHat',
    desc: 'Un renfort à votre service',
  },
  {
    label: 'Atelier Culinaire',
    href: '/services/atelier-culinaire',
    iconName: 'GraduationCap',
    desc: 'Cours de cuisine',
  },
]

/** components/layout/Header.tsx — entrée de premier niveau */
export const NAV_REJOINDRE_RETIRE = {
  label: 'Nous rejoindre',
  href: '/devenir-chef',
}

/** components/forms/ContactForm.tsx — options du sélecteur de motif */
export const CONTACT_MOTIFS_RETIRES = [
  { value: 'assistance-culinaire', label: 'Assistance culinaire' },
  { value: 'atelier-culinaire', label: 'Atelier culinaire' },
  { value: 'devenir-chef', label: 'Nous rejoindre' },
]

/** app/api/contact/route.ts — libellés correspondants */
export const CONTACT_LIBELLES_RETIRES = {
  'assistance-culinaire': 'Assistance culinaire',
  'atelier-culinaire': 'Atelier culinaire',
  'devenir-chef': 'Nous rejoindre',
}

export type { ServiceFeature }
