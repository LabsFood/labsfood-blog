import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  Clock,
  Leaf,
  MapPin,
  UtensilsCrossed,
  
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { BATCH_COOKING_URL, whatsappLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Batch cooking à domicile',
  description:
    "Une cheffe vient préparer une semaine entière de repas variés et équilibrés chez vous, en 2h minimum. Disponible sur la Côte d'Azur.",
}

const FEATURES = [
  { icon: Clock, label: '2h minimum d\'intervention' },
  { icon: UtensilsCrossed, label: 'Une semaine de repas' },
  { icon: Leaf, label: 'Ingrédients frais & locaux' },
  { icon: MapPin, label: "Côte d'Azur" },
] as const

const BULLETS = [
  'Plannings de menus variés et équilibrés',
  'Adapté à vos contraintes alimentaires',
  'Conservation et conseils de réchauffage inclus',
  'Idéal pour familles, couples actifs, sportifs',
] as const

export default function BatchCookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Service · 01 — Batch cooking"
        title={
          <>
            Une semaine de repas,{' '}
            <em className="not-italic">
              <span className="font-display italic text-navy-mid">
                préparée chez vous.
              </span>
            </em>
          </>
        }
        lede="Une cheffe professionnelle vient cuisiner directement à votre domicile. En 2 heures minimum, votre semaine est prête."
        image="/assets/photo-9.jpeg"
        imagePosition="center 40%"
      />

      {/* ── Carte features flottante ──────────────────────────────────── */}
      <section className="bg-cream">
        <div className="container-wide -mt-16 md:-mt-20 relative z-10">
          <div className="rounded-3xl bg-cream border border-navy/10 shadow-2xl p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 grid grid-cols-2 gap-5">
              {FEATURES.map((f) => (
                <div key={f.label} className="flex items-center gap-3 text-sm">
                  <span className="size-9 rounded-full bg-navy-mid/10 grid place-items-center shrink-0">
                    <f.icon className="size-4 text-navy-mid" />
                  </span>
                  <span className="text-ink/85 font-medium">{f.label}</span>
                </div>
              ))}
            </div>
            <a
              href={BATCH_COOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-navy text-cream font-medium text-sm hover:bg-navy-mid transition-colors"
            >
              Site dédié
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Bloc Pourquoi ────────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
                <span className="size-6 h-px bg-navy-mid" />
                Pourquoi le batch ?
              </p>
              <h2
                className="font-display text-navy leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                Bien manger toute la semaine,{' '}
                <em className="not-italic">
                  <span className="font-display italic text-navy-mid">
                    sans la charge mentale.
                  </span>
                </em>
              </h2>
              <p className="mt-8 lede text-pretty">
                Le batch cooking, c&apos;est cuisiner une fois pour toute la
                semaine — sauf que cette fois, c&apos;est nous qui le faisons.
                Chez vous, avec votre matériel, et adapté à ce que vous aimez.
              </p>
              <ul className="mt-8 space-y-4">
                {BULLETS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 size-5 rounded-full bg-navy-mid/15 text-navy-mid grid place-items-center shrink-0">
                      <Check className="size-3" />
                    </span>
                    <span className="text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal axis="x" className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative h-[480px] md:h-[600px]">
              <div className="absolute top-0 right-0 w-[70%] h-[60%] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/photo-9.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-xl border-4 border-cream">
                <Image
                  src="/assets/photo-11.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              {/* Pastille prix */}
              <div className="absolute top-[40%] left-[35%] size-28 rounded-full bg-cream border-4 border-cream-deep shadow-xl grid place-items-center rotate-[-8deg] z-10">
                <div className="text-center">
                  <div className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-navy-mid">
                    Dès
                  </div>
                  <div className="font-display text-2xl text-navy leading-none mt-1">
                    50€
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA site dédié ──────────────────────────────────────────── */}
      <section className="relative bg-navy text-cream py-24 md:py-32 overflow-hidden">
        <Image
          src="/assets/photo-11.jpeg"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-navy/95" />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />

        <div className="relative container-wide text-center max-w-3xl mx-auto">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
            <span className="size-6 h-px bg-navy-mid" />
            Site dédié
            <span className="size-6 h-px bg-navy-mid" />
          </p>
          <h2
            className="font-display text-cream leading-[0.95] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Toute l&apos;offre batch cooking,
            <br />
            <em className="not-italic">
              <span className="font-display italic text-navy-mid">
                sur son propre site.
              </span>
            </em>
          </h2>
          <p className="mt-8 text-cream/75 max-w-xl mx-auto leading-relaxed">
            Formules, prise de rendez-vous, détail des menus, tarifs — tout est
            sur le site dédié au service batch cooking Lab&apos;s Food.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BATCH_COOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-cream text-navy font-medium text-sm hover:bg-navy-mid hover:text-cream transition-colors"
            >
              Accéder au site batch cooking
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={whatsappLink(
                "Bonjour Lab's Food, je m'intéresse au batch cooking — ",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-whatsapp text-white font-medium text-sm hover:bg-whatsapp-deep transition-colors"
            >
              <WhatsAppIcon className="size-4" />
              Demander un devis
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
