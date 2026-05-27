'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Clock,
  Users,
  MapPin,
  ChefHat,
  Gift,
  CalendarCheck,
  Building2,
  ListChecks,
} from 'lucide-react'

const SHOWCASE = [
  {
    slug: 'batch-cooking',
    n: '01',
    name: 'Batch cooking',
    kicker: 'Service à domicile',
    description:
      "Une cheffe vient préparer une semaine entière de repas chez vous, en 2 heures minimum. L'art de mieux manger sans y penser, sur-mesure et à votre rythme.",
    price: 'À partir de 50€',
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
      "Un grand dîner, une fête de famille, un événement traiteur ? Lab's Food intervient en renfort — préparation, dressage, coordination. Vous gérez vos invités, on gère les fourneaux.",
    price: 'Sur devis',
    image: '/assets/photo-8.jpeg',
    href: '/services/assistance-culinaire',
    features: [
      { icon: ChefHat, label: '02 chefs disponibles' },
      { icon: CalendarCheck, label: 'Événements & dîners' },
      { icon: Building2, label: 'Particuliers & pros' },
    ],
  },
  {
    slug: 'atelier-culinaire',
    n: '03',
    name: 'Atelier culinaire',
    kicker: 'Expérience interactive',
    description:
      "Apprenez à cuisiner une spécialité du monde lors d'une expérience interactive et intime. Une cheffe vient chez vous — vous repartez avec la fiche recette et un cadeau surprise.",
    price: 'À partir de 80€',
    image: '/assets/photo-15.jpeg',
    href: '/services/atelier-culinaire',
    features: [
      { icon: Users, label: "Jusqu'à 4 personnes" },
      { icon: Clock, label: '~ 2h d’atelier' },
      { icon: Gift, label: 'Cadeau surprise' },
    ],
  },
] as const

export function ShowcaseSection() {
  return (
    <section
      id="services"
      className="relative bg-navy text-cream py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Bruit doux */}
      <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />

      <div className="relative container-wide">
        {/* ── En-tête ── */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-orange inline-flex items-center gap-3 mb-6">
              <span className="size-6 h-px bg-orange" />
              Nos services
            </p>
            <h2
              className="font-display text-cream leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
            >
              Apprendre, déléguer,{' '}
              <em className="not-italic">
                <span className="font-display italic text-orange">
                  ou se faire épauler.
                </span>
              </em>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-cream/15 flex items-end"
          >
            <p className="text-cream/70 text-base leading-relaxed text-pretty">
              Trois services pensés pour trois moments de vie. Choisissez votre
              angle — chaque formule s&apos;adapte à votre rythme, votre
              événement, vos envies.
            </p>
          </motion.div>
        </div>

        {/* ── Liste éditoriale alternée ── */}
        <div className="flex flex-col gap-24 md:gap-32">
          {SHOWCASE.map((s, i) => (
            <ShowcaseRow key={s.slug} service={s} reverse={i % 2 === 1} index={i} />
          ))}
        </div>

        {/* ── Lien vers la page services ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-28 pt-10 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p className="font-display italic text-2xl md:text-3xl text-cream/80 max-w-xl text-balance">
            Et ce n&apos;est qu&apos;un début —{' '}
            <span className="text-orange">d&apos;autres formules</span>{' '}
            arrivent.
          </p>
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-cream/30 text-cream hover:bg-cream hover:text-navy hover:border-cream text-sm font-medium transition-all"
          >
            Voir tous les services
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

type Service = (typeof SHOWCASE)[number]

function ShowcaseRow({
  service,
  reverse,
  index,
}: {
  service: Service
  reverse: boolean
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: 0.1 }}
      className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
    >
      {/* Image */}
      <Link
        href={service.href}
        className="lg:col-span-7 group block relative aspect-[5/4] md:aspect-[16/10] rounded-3xl overflow-hidden bg-navy-deep"
      >
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-expo"
        />
        {/* Voile */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
        {/* Numéro géant */}
        <div className="absolute top-6 left-6 font-display text-7xl md:text-9xl leading-none tabular-nums text-cream/25">
          {service.n}
        </div>
        {/* Kicker */}
        <div className="absolute top-6 right-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20">
          <span className="size-1.5 rounded-full bg-orange" />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-cream">
            {service.kicker}
          </span>
        </div>
        {/* Flèche bas-droite */}
        <div className="absolute bottom-6 right-6 size-14 rounded-full bg-cream text-navy grid place-items-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-expo">
          <ArrowUpRight className="size-5" />
        </div>
      </Link>

      {/* Texte */}
      <div className="lg:col-span-5">
        <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-navy-mid mb-3">
          Service · {service.n}
        </div>
        <h3 className="font-display text-4xl md:text-5xl text-cream leading-tight">
          {service.name}
          <span className="italic-fraunces text-navy-mid">.</span>
        </h3>

        <p className="mt-6 text-cream/70 leading-relaxed text-pretty max-w-md">
          {service.description}
        </p>

        {/* Features */}
        <ul className="mt-8 flex flex-col gap-3">
          {service.features.map((f) => (
            <li
              key={f.label}
              className="flex items-center gap-3 text-sm text-cream/85"
            >
              <span className="size-7 rounded-full bg-cream/5 border border-cream/15 grid place-items-center shrink-0">
                <f.icon className="size-3.5 text-cream/80" />
              </span>
              {f.label}
            </li>
          ))}
        </ul>

        {/* Footer ligne : prix + CTA */}
        <div className="mt-10 pt-6 border-t border-cream/10 flex items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-cream/45">
              Tarif
            </div>
            <div className="font-display text-2xl mt-1 leading-none text-cream">
              {service.price}
            </div>
          </div>
          <Link
            href={service.href}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-orange text-cream hover:bg-orange-deep text-sm font-medium transition-all shadow-lg shadow-orange/30"
          >
            Découvrir
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
