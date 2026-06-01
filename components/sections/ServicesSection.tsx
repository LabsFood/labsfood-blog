'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Users,
  Clock,
  MapPin,
  Gift,
  ListChecks,
  ChefHat,
  CalendarCheck,
  Building2,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const services = [
  {
    slug: 'batch-cooking',
    n: '01',
    name: 'Batch cooking',
    description:
      "Une cheffe vient cuisiner une semaine entière de repas chez vous, en 2 heures minimum. L'art de mieux manger sans y penser, sur-mesure et à votre rythme.",
    price: "~ 50€" as string | null,
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
  {
    slug: 'assistance-culinaire',
    n: '02',
    name: 'Assistance culinaire',
    description:
      "Un grand dîner, une fête de famille, un événement traiteur ? Lab's Food vient en renfort en cuisine , vous aide à la préparation, dressage, coordination. Vous gérez vos invités, on gère les fourneaux.",
    price: null,
    priceNote: 'Sur devis · contactez-nous',
    image: '/assets/ange.jpeg',
    href: '/services/assistance-culinaire',
    accent: 'teal' as const,
    features: [
      { icon: ChefHat, label: 'Recherche des chefs' },
      { icon: CalendarCheck, label: 'Événements & dîners' },
      { icon: Building2, label: 'Pour particuliers & professionnels' },
    ],
  },
  {
    slug: 'atelier-culinaire',
    n: '03',
    name: 'Atelier culinaire',
    description:
      "Apprenez à cuisiner une spécialité du monde lors d'une expérience interactive et intime. Une cheffe vient chez vous, ensuite repartez avec la fiche recette et un cadeau surprise.",
    price: '80€' as string | null,
    priceNote: "forfait — jusqu'à 4 pers.",
    image: '/assets/photo-15.jpeg',
    href: '/services/atelier-culinaire',
    accent: 'navy-mid' as const,
    features: [
      { icon: Users, label: "Jusqu'à 4 pers." },
      { icon: Clock, label: '~ 2h d’atelier' },
      { icon: Gift, label: 'Cadeau surprise' },
    ],
  },

]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section bg-cream relative overflow-hidden"
    >
      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Nos services"
          title={
            <>
              Apprendre, déléguer,{' '}
              <span className="italic text-navy-mid">ou se faire épauler</span>.
            </>
          }
          lede="Trois services pensés pour trois moments de vie. Choisissez votre angle."
          align="center"
        />

        {/* ─── Lignes éditoriales alternées ─── */}
        <div className="mt-20 md:mt-24 flex flex-col gap-20 md:gap-28">
          {services.map((s, i) => (
            <ServiceRow key={s.slug} service={s} reverse={i % 2 === 1} />
          ))}
        </div>

        {/* ─── Fin : invitation discrète vers la page services ─── */}
        <Reveal>
          <div className="mt-24 md:mt-28 pt-10 border-t border-navy/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-display italic text-2xl md:text-3xl text-navy max-w-xl text-balance">
              Et ce n&apos;est qu&apos;un début &mdash;{' '}
              <span className="text-navy-mid">d&apos;autres formules</span>{' '}
              arrivent.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-cream hover:border-navy text-sm font-medium transition-all"
            >
              Voir tous les services
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

type Service = (typeof services)[number]

function ServiceRow({
  service,
  reverse,
}: {
  service: Service
  reverse: boolean
}) {
  return (
    <Reveal>
      <div
        className={cn(
          'grid lg:grid-cols-12 gap-8 lg:gap-16 items-center',
          reverse && 'lg:[&>*:first-child]:order-2',
        )}
      >
        {/* Image */}
        <Link
          href={service.href}
          className="lg:col-span-7 group block relative aspect-[5/4] rounded-3xl overflow-hidden bg-navy"
        >
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-expo"
          />
          {/* Voile dégradé léger */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Numéro géant en filigrane */}
          <div className="absolute top-6 left-6 font-display text-7xl md:text-8xl leading-none tabular-nums text-cream/30">
            {service.n}
          </div>

          {/* Flèche hover */}
          <div className="absolute bottom-6 right-6 size-14 rounded-full bg-cream text-navy grid place-items-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-expo">
            <ArrowUpRight className="size-5" />
          </div>
        </Link>

        {/* Texte */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={cn(
                'font-mono text-[0.65rem] uppercase tracking-[0.3em]',
                service.accent === 'navy-mid'
                  ? 'text-navy-mid'
                  : service.accent === 'teal'
                    ? 'text-teal'
                    : 'text-navy/65',
              )}
            >
              Service &middot; {service.n}
            </span>
            <span className="size-1 rounded-full bg-navy/20" />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink/45">
              {service.priceNote}
            </span>
          </div>

          <h3 className="font-display text-4xl md:text-5xl text-navy leading-tight">
            {service.name}
            <span className="italic-fraunces text-navy-mid">.</span>
          </h3>

          <p className="mt-6 lede  text-justify">{service.description}</p>

          {/* Features inline */}
          <ul className="mt-8 flex flex-col gap-3">
            {service.features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-3 text-sm text-ink/80"
              >
                <span
                  className={cn(
                    'size-7 rounded-full border grid place-items-center shrink-0',
                    service.accent === 'teal'
                      ? 'bg-teal/10 border-teal/15'
                      : 'bg-cream-soft border-navy/10',
                  )}
                >
                  <f.icon
                    className={cn(
                      'size-3.5',
                      service.accent === 'teal' ? 'text-teal' : 'text-navy-mid',
                    )}
                  />
                </span>
                {f.label}
              </li>
            ))}
          </ul>

          {/* Footer ligne : prix (si dispo) + CTA */}
          <div className="mt-10 pt-6 border-t border-navy/10 flex items-end justify-between gap-6">
            {service.price !== null ? (
              <div>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink/55">
                  À partir de
                </div>
                <div
                  className={cn(
                    'font-display text-4xl mt-1 leading-none',
                    service.accent === 'navy-mid' ? 'text-navy-mid' : 'text-navy',
                  )}
                >
                  {service.price}
                </div>
              </div>
            ) : (
              <div>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink/55">
                  Tarif
                </div>
                <div className="font-display text-2xl mt-1 leading-none text-teal">
                  Sur devis
                </div>
              </div>
            )}
            <Link
              href={service.href}
              className={cn(
                'group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all',
                service.accent === 'teal'
                  ? 'bg-teal text-cream hover:bg-teal-deep'
                  : service.accent === 'navy-mid'
                    ? 'bg-navy-mid text-cream hover:bg-navy-deep'
                    : 'bg-navy text-cream hover:bg-navy-mid',
              )}
            >
              Découvrir
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
