'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ChefHat,
  CalendarCheck,
  Sparkles,
  ListChecks,
  Users,
  Clock,
  MapPin,
  Gift,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { whatsappLink } from '@/lib/utils'

const services = [
  {
    slug: 'atelier-culinaire',
    eyebrow: 'Service · 01',
    name: 'Atelier culinaire',
    description:
      "Apprenez à cuisiner une spécialité du monde dans une expérience interactive et intime. Une cheffe vient chez vous, vous repartez avec la fiche recette et un cadeau surprise.",
    price: '80€',
    priceNote: 'jusqu’à 4 pers.',
    image: '/assets/photo-7.jpeg',
    href: '/services/atelier-culinaire',
    accent: 'terra' as const,
    features: [
      { icon: Users, label: 'Jusqu’à 10 pers.' },
      { icon: Clock, label: '~ 2h d’atelier' },
      { icon: Gift, label: 'Cadeau surprise' },
    ],
  },
  {
    slug: 'batch-cooking',
    eyebrow: 'Service · 02',
    name: 'Batch cooking',
    description:
      "Une cheffe vient préparer une semaine entière de repas chez vous, en 2 heures minimum. Idéal pour mieux manger sans y penser.",
    price: 'sur-mesure',
    priceNote: "Côte d'Azur",
    image: '/assets/photo-9.jpeg',
    href: '/services/batch-cooking',
    accent: 'navy' as const,
    features: [
      { icon: Clock, label: 'À partir de 2h' },
      { icon: ListChecks, label: 'Menus variés' },
      { icon: MapPin, label: "Côte d'Azur" },
    ],
  },
]

const STEPS = [
  {
    icon: ChefHat,
    title: 'Vous choisissez',
    body: 'La cuisine, le service, la date — on cale tout ensemble.',
  },
  {
    icon: CalendarCheck,
    title: 'On vient chez vous',
    body: 'Une cheffe arrive avec le matériel et le savoir-faire.',
  },
  {
    icon: Sparkles,
    title: 'Vous savourez',
    body: 'Fiche recette, repas pour la semaine, ou les deux !',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section bg-cream relative overflow-hidden"
    >
      {/* Décors d'arrière-plan */}
      <div className="absolute -top-32 -left-32 size-[500px] bg-terra/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-40 size-[600px] bg-teal/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />

      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Nos services"
          title={
            <>
              Deux services pensés pour{' '}
              <span className="italic gradient-text-terra">vivre la cuisine</span>{' '}
              autrement.
            </>
          }
          lede="Que vous vouliez apprendre, ou simplement bien manger sans y penser — il y a une formule pour vous."
          align="center"
        />

        {/* Cards des services — design enrichi */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1}>
              <Link
                href={s.href}
                className="group block relative h-full rounded-3xl bg-cream-soft border border-navy/8 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-expo"
              >
                {/* Image header */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-expo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />

                  {/* Badge eyebrow */}
                  <div className="absolute top-5 left-5 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream bg-navy/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cream/15">
                    {s.eyebrow}
                  </div>

                  {/* Prix flottant */}
                  <div
                    className={`absolute bottom-5 right-5 px-4 py-2 rounded-full backdrop-blur-sm ${
                      s.accent === 'terra'
                        ? 'bg-terra text-cream'
                        : 'bg-cream text-navy'
                    } shadow-xl`}
                  >
                    <div className="font-display text-2xl leading-none">
                      {s.price}
                    </div>
                    <div className="font-mono text-[0.55rem] uppercase tracking-[0.2em] opacity-80 mt-0.5">
                      {s.priceNote}
                    </div>
                  </div>

                  {/* Titre sur image */}
                  <h3 className="absolute bottom-5 left-5 font-display text-4xl md:text-5xl text-cream leading-none">
                    {s.name}
                  </h3>
                </div>

                {/* Corps */}
                <div className="p-8 md:p-10 flex flex-col gap-6">
                  <p className="text-pretty text-ink/75 leading-relaxed">
                    {s.description}
                  </p>

                  {/* Features pills */}
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span
                        key={f.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream border border-navy/10 text-xs text-ink/75"
                      >
                        <f.icon className="size-3 text-terra" />
                        {f.label}
                      </span>
                    ))}
                  </div>

                  {/* Footer card */}
                  <div className="mt-auto pt-6 border-t border-navy/10 flex items-center justify-between">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-ink/55">
                      Découvrir le service
                    </span>
                    <span
                      className={`shrink-0 inline-flex items-center justify-center size-11 rounded-full transition-all duration-500 group-hover:rotate-45 ${
                        s.accent === 'terra'
                          ? 'bg-terra/10 text-terra group-hover:bg-terra group-hover:text-cream'
                          : 'bg-navy/10 text-navy group-hover:bg-navy group-hover:text-cream'
                      }`}
                    >
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Comment ça marche — mini timeline */}
        <Reveal delay={0.1}>
          <div className="mt-24 md:mt-32 rounded-3xl bg-navy text-cream relative overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-[0.05]" />
            <div className="absolute -top-20 -right-20 size-80 rounded-full bg-terra/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-teal/30 blur-3xl" />

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
                <div>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-terra-soft">
                    Comment ça marche
                  </span>
                  <h3 className="font-display text-3xl md:text-5xl text-cream mt-3 text-balance">
                    Trois étapes, et c&apos;est{' '}
                    <span className="italic gradient-text-terra">prêt</span>.
                  </h3>
                </div>
                <Button asChild variant="whatsapp" size="md">
                  <a
                    href={whatsappLink("Bonjour Lab's Food, j'aimerais réserver un service.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowUpRight className="size-4" />
                    Réserver sur WhatsApp
                  </a>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 relative">
                {/* Ligne de connexion */}
                <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-terra/0 via-terra/40 to-terra/0" />

                {STEPS.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="relative z-10 size-14 mx-auto md:mx-0 rounded-full bg-cream text-navy grid place-items-center shadow-xl ring-4 ring-navy">
                      <s.icon className="size-5" />
                    </div>
                    <div className="mt-5 text-center md:text-left">
                      <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-terra-soft">
                        Étape {String(i + 1).padStart(2, '0')}
                      </div>
                      <h4 className="font-display text-2xl text-cream mt-2">
                        {s.title}
                      </h4>
                      <p className="mt-2 text-sm text-cream/75 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
