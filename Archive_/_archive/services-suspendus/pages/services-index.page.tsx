import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { whatsappLink } from '@/lib/utils'
import { SHOWCASE_SERVICES, type ShowcaseService } from '@/lib/services-data'

export const metadata: Metadata = {
  title: "Services — Ateliers, batch cooking & assistance",
  description:
    "Découvrez nos trois services : ateliers de cuisine du monde à domicile, batch cooking sur-mesure, et assistance culinaire pour vos événements.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={
          <>
            Apprendre, déléguer,{' '}
            <em className="not-italic">
              <span className="font-display italic text-orange">
                ou se faire épauler.
              </span>
            </em>
          </>
        }
        lede="Trois formules pensées pour trois moments de vie."
        image="/assets/gallerie/plenty.jpeg"
        imagePosition="center"
      />

      {/* ── 3 services en lignes éditoriales alternées ────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide flex flex-col gap-24 md:gap-32">
          {SHOWCASE_SERVICES.map((s, i) => (
            <ServiceRow key={s.slug} service={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* ── CTA bas ──────────────────────────────────────────────────── */}
      <section className="bg-navy-mid text-cream py-20 md:py-28">
        <div className="container-wide grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-orange mb-4">
              — Pas encore décidé ?
            </p>
            <h3
              className="font-display text-cream leading-tight text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              On vous oriente vers le{' '}
              <em className="not-italic">
                <span className="font-display italic text-orange">
                  bon service
                </span>
              </em>{' '}
              en un message.
            </h3>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href={whatsappLink(
                "Bonjour Lab's Food, j'hésite entre vos services — pouvez-vous m'orienter ?",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-whatsapp text-white font-medium text-sm hover:bg-whatsapp-deep transition-colors"
            >
              <WhatsAppIcon className="size-4" />
              Décrire ma demande
              <ArrowUpRight className="size-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-cream/30 text-cream hover:bg-cream hover:text-navy text-sm font-medium transition-all"
            >
              Formulaire de contact
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

function ServiceRow({
  service,
  reverse,
}: {
  service: ShowcaseService
  reverse: boolean
}) {
  return (
    <Reveal>
      <div
        className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
      >
        {/* Image */}
        <Link
          href={service.href}
          className="lg:col-span-7 group block relative aspect-[5/4] md:aspect-[16/10] rounded-3xl overflow-hidden bg-navy"
        >
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-expo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          <div className="absolute top-6 left-6 font-display text-7xl md:text-9xl leading-none tabular-nums text-cream/25">
            {service.n}
          </div>
          <div className="absolute top-6 right-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20">
            <span className="size-1.5 rounded-full bg-orange" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-cream">
              {service.kicker}
            </span>
          </div>
          <div className="absolute bottom-6 right-6 size-14 rounded-full bg-cream text-navy grid place-items-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-expo">
            <ArrowUpRight className="size-5" />
          </div>
        </Link>

        {/* Texte */}
        <div className="lg:col-span-5">
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-navy-mid mb-3">
            Service · {service.n}
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
            {service.name}
            <span className="italic-fraunces text-navy-mid">.</span>
          </h2>
          <p className="mt-6 text-ink/75 leading-relaxed text-pretty max-w-md">
            {service.description}
          </p>

          {/* Features — icônes + label */}
          <ul className="mt-8 flex flex-col gap-3">
            {service.features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-3 text-sm text-ink/85"
              >
                <span className="size-7 rounded-full bg-orange/10 border border-orange/20 grid place-items-center shrink-0">
                  <f.icon className="size-3.5 text-orange-deep" />
                </span>
                {f.label}
              </li>
            ))}
          </ul>

          {/* Tarif + note + CTA */}
          <div className="mt-10 pt-6 border-t border-navy/10 flex items-end justify-between gap-6">
            <div className="min-w-0">
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink/55">
                Tarif
              </div>
              <div className="font-display text-2xl mt-1 leading-none text-navy">
                {service.price} {service.priceNote && (<span className='text-orange -ml-1'>*</span>)}
              </div>
              {service.priceNote && (
                <div className="font-mono text-[0.6rem] text-orange mt-1.5 italic">
                  {service.priceNote}
                </div>
              )}
            </div>
            <Link
              href={service.href}
              className="group shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-orange text-cream hover:bg-orange-deep text-sm font-medium transition-all shadow-lg shadow-orange/30"
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
