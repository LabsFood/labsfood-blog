import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  Gift,
  MapPin,
  Users,
  Clock,
  Sparkles,

} from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { whatsappLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Atelier culinaire à domicile',
  description:
    "Apprenez à cuisiner une spécialité du monde lors d'un atelier privé chez vous. Forfait 80€ jusqu'à 4 personnes.",
}

const STEPS = [
  {
    n: '01',
    title: 'Filtrez selon votre zone géographique',
    body: 'Utilisez notre barre de recherche pour cibler rapidement les animateurs culinaires de votre région. De la cuisine du monde à la patisserie, trouvez votre bonheur localement',
  },
  {
    n: '02',
    title: 'Echanger en direct',
    body: "Discutez sans intermédiaire avec votre animateur pour préparer l'atelier. Il s'invitera dans votre cuisine pour partager ses techniques et ses secrets.",
  },
  {
    n: '03',
    title: 'Maitrisez de nouvelles saveurs',
    body: "Profitez d'un apprentissage sur-mesure. Grace aux conseils en direct, vous apprendrez de bons gestes pour epater vos futurs invités",
  },
] as const

const FEATURES = [
  { icon: Users, label: 'Jusqu\'à 04 personnes' },
  { icon: Clock, label: '~ 2h d\'atelier' },
  { icon: Gift, label: 'Cadeau surprise' },
  { icon: MapPin, label: 'À domicile' },
] as const

const INCLUDED = [
  'Apprentissage pas à pas par une cheffe passionnée',
  'Fiche recette professionnelle pour chaque participant',
  'Cadeau surprise selon disponibilité',
  'Choix d\'une cuisine du monde ou recette exclusive',
  'Adapté aux passionnés, amis et collègues',
  'Expérience interactive et conviviale',
] as const

export default function AtelierPage() {
  return (
    <>
      <PageHero
        eyebrow="Service · 03 — Atelier culinaire"
        title={
          <>
            Une cuisine du monde,{' '}
            <em className="not-italic">
              <span className="font-display italic text-orange">
                apprise pas à pas
              </span>
            </em>{' '}
            chez vous.
          </>
        }
        lede="Passionnés de saveurs, amis ou collègues : un atelier interactif et intime pour apprendre une spécialité choisie, animé par une cheffe à domicile."
        image="/assets/photo-15.jpeg"
      />

      {/* ── Carte tarif flottante ───────────────────────────────────── */}
      {/* <section className="bg-cream">
        <div className="container-wide -mt-16 md:-mt-20 relative z-10">
          <div className="rounded-3xl bg-cream border border-navy/10 shadow-2xl p-8 md:p-10 grid md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-1">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid mb-2">
                Forfait privé
              </div>
              <div className="font-display text-5xl text-navy leading-none">
                80€
              </div>
              <div className="text-xs text-ink/60 mt-2">
                jusqu&apos;à 4 personnes
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <div key={f.label} className="flex items-center gap-3 text-sm">
                  <f.icon className="size-4 text-navy-mid shrink-0" />
                  <span className="text-ink/80">{f.label}</span>
                </div>
              ))}
            </div>
            <div className="md:col-span-1">
              <a
                href={whatsappLink(
                  "Bonjour Lab's Food, je souhaite réserver un atelier culinaire.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full bg-whatsapp text-white font-medium text-sm hover:bg-whatsapp-deep transition-colors"
              >
                <WhatsAppIcon className="size-4" />
                Réserver
              </a>
              <p className="text-[0.7rem] text-ink/55 mt-2 text-center">
                Via WhatsApp · réponse 7j/7
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── Comment ça marche ───────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
                <span className="size-6 h-px bg-navy-mid" />
                Comment ça marche
              </p>
              <h2
                className="font-display text-navy leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Trois étapes, et c&apos;est l&apos;embarquement{' '}
                <em className="not-italic">
                  <span className="font-display italic text-navy-mid">
                    gustatif.
                  </span>
                </em>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <div className="rounded-2xl bg-cream-soft border border-navy/8 p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="font-display text-5xl text-orange tabular-nums leading-none mb-6">
                    {s.n}
                  </div>
                  <h3 className="font-display text-2xl text-navy">{s.title}</h3>
                  <p className="mt-3 text-ink/70 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tarifs détaillés ────────────────────────────────────────── */}
      {/* <section className="relative bg-navy text-cream py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="relative container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-orange inline-flex items-center gap-3 mb-6">
              <span className="size-6 h-px bg-orange" />
              Tarifs
            </p>
            <h2
              className="font-display text-cream leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Simple, transparent,{' '}
              <em className="not-italic">
                <span className="font-display italic text-orange">
                  tout compris.
                </span>
              </em>
            </h2>
            <p className="mt-6 text-cream/75 leading-relaxed">
              Hors coût des ingrédients. Option : on s&apos;occupe des courses
              pour vous (+20€) pour vraiment ne penser à rien.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {[
              { label: 'Atelier privé · 1 à 4 personnes', price: '80€', note: 'forfait' },
              { label: '+1 personne (au-delà de 4)', price: '+20€', note: 'par personne' },
              { label: 'Groupe maximum', price: '07 pers.', note: 'capacité maximale' },
              { label: 'Gestion des courses', price: '+20€', note: 'optionnel' },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-6 px-6 py-5 rounded-2xl bg-cream/[0.06] border border-cream/15 hover:bg-cream/[0.1] transition-colors"
              >
                <div>
                  <div className="font-display text-lg text-cream">
                    {row.label}
                  </div>
                  <div className="text-xs text-cream/55 mt-0.5">{row.note}</div>
                </div>
                <div className="font-display text-2xl text-orange tabular-nums">
                  {row.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Inclus dans l'atelier ───────────────────────────────────── */}
      {/* <section className="bg-cream py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <Reveal axis="x" className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-navy">
              <Image
                src="/assets/info-atelier.jpeg"
                alt="Atelier culinaire Lab's Food"
                width={800}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
                <span className="size-6 h-px bg-navy-mid" />
                Inclus dans l&apos;atelier
              </p>
              <h2
                className="font-display text-navy leading-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Tout pour que vous repartiez{' '}
                <em className="not-italic">
                  <span className="font-display italic text-navy-mid">
                    avec votre recette.
                  </span>
                </em>
              </h2>
              <ul className="mt-10 grid sm:grid-cols-2 gap-4">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 size-5 rounded-full bg-navy-mid/15 text-navy-mid grid place-items-center shrink-0">
                      <Check className="size-3" />
                    </span>
                    <span className="text-ink/85 leading-relaxed text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* ── CTA devenir chef ────────────────────────────────────────── */}
      <section className="bg-cream-soft py-24 md:py-28">
        <div className="container-wide">
          <div className="rounded-3xl bg-navy text-cream relative overflow-hidden p-10 md:p-16 grid lg:grid-cols-12 gap-8 items-center">
            <div className="absolute -top-10 -right-10 size-72 rounded-full bg-navy-mid/20 blur-3xl" />
            <div className="lg:col-span-8 relative">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="size-4 text-orange" />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-orange">
                  Vous êtes passionné de cuisine ?
                </span>
              </div>
              <h2
                className="font-display text-cream leading-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Rejoignez nos{' '}
                <em className="not-italic">
                  <span className="font-display italic text-orange">
                    animateurs.
                  </span>
                </em>
              </h2>
              <p className="mt-5 text-cream/75 max-w-xl">
                Si l&apos;idée de donner des cours vous anime, remplissez le
                formulaire d&apos;inscription pour devenir l&apos;un de nos
                chefs partenaires. Gratuit pour le moment.
              </p>
            </div>
            <div className="lg:col-span-4 relative">
              <Link
                href="/devenir-chef"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full bg-cream text-navy font-medium text-sm hover:bg-orange hover:text-cream transition-colors"
              >
                Donner des cours de cuisine
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
