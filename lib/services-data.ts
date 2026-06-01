/**
 * Source unique des 3 services — utilisée par :
 *   - components/sections/ShowcaseSection.tsx (page d'accueil)
 *   - app/services/page.tsx (page "Nos services")
 *
 * Toute modification ici se propage automatiquement aux deux endroits.
 */

import type { LucideIcon } from 'lucide-react'
import {
  Clock,
  ListChecks,
  MapPin,
  Map,
  Users,
  Building2,
  Sparkles,
  GraduationCap,
  Star,
} from 'lucide-react'

export type ServiceFeature = {
  icon: LucideIcon
  label: string
}

export type ShowcaseService = {
  slug: string
  n: string
  name: string
  kicker: string
  description: string
  price: string
  /** Petite note sous le prix (ex: "Tarif après -50 % du crédit d'impôt") */
  priceNote?: string
  image: string
  href: string
  features: ServiceFeature[]
}

export const SHOWCASE_SERVICES: ShowcaseService[] = [
  {
    slug: 'batch-cooking',
    n: '01',
    name: 'Batch cooking',
    kicker: 'Service à domicile',
    description:
      "Une cheffe vient cuisiner une semaine entière de repas chez vous, en 2 heures minimum. L'art de mieux manger sans y penser, sur-mesure et à votre rythme.",
    price: 'À partir de 50€*',
    priceNote: "*Tarif après -50 % du crédit d'impôt",
    image: '/assets/photo-9.jpeg',
    href: '/services/batch-cooking',
    features: [
      { icon: Clock, label: 'À partir de 2h' },
      { icon: ListChecks, label: 'Menus variés' },
      { icon: MapPin, label: "Côte d'Azur" },
    ],
  },
  {
    slug: 'assistance-culinaire',
    n: '02',
    name: 'Assistance culinaire',
    kicker: 'Renfort en cuisine',
    description:
      "Un rush en cuisine, une fête de famille ou un événement pro ? Lab's Food est votre solution de renfort sur-mesure. Nous vous connectons avec le profil idéal (passionné, étudiant ou professionnel) pour vous seconder efficacement.",
    price: 'Sur devis',
    image: '/assets/photo-8.jpeg',
    href: '/services/assistance-culinaire',
    features: [
      { icon: Map, label: 'Disponible dans toute la France' },
      { icon: Users, label: 'Profils variés (étudiants, professionnels, …)' },
      { icon: Star, label: 'Pour Particuliers et professionnels' },
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
      { icon: Users, label: 'En solo ou entre amis' },
      { icon: Sparkles, label: 'Ateliers 100 % personnalisés' },
      { icon: GraduationCap, label: 'Apprentissage pas-à-pas' },
    ],
  },
]
