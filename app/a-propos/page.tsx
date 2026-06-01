import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  ShieldCheck,
  Languages,
  Heart,
  Sparkles,
  HandHeart,
  Quote,

  Users,
  MapPin,
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { FOUNDER, TIMELINE } from '@/lib/content'
import { whatsappLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: "À propos — Lab's Food, par Siyaptze",
  description:
    "L'histoire de Lab's Food, plateforme dédiée au bien-être gourmand fondée par Siyaptze (Ivy). +150 gourmands régalés et fidélisés à ce jour.",
}

const VALUES = [
  {
    icon: HandHeart,
    title: 'Soulager',
    text: "Alléger la charge mentale de ceux qui n'ont plus le temps de bien manger.",
  },
  {
    icon: Sparkles,
    title: 'Émerveiller',
    text: 'Chaque assiette doit arracher un sourire — comme celui de ma tante.',
  },
  {
    icon: Heart,
    title: 'Transmettre',
    text: 'Partager les techniques, les recettes, les produits qui font la différence.',
  },
  {
    icon: ShieldCheck,
    title: 'Rigueur',
    text: "HACCP, hygiène et qualité ne sont jamais des options.",
  },
] as const

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre histoire"
        title={
          <>
            Lab&apos;s Food, c&apos;est l&apos;histoire d&apos;
            <em className="not-italic">
              <span className="font-display italic">
                un sourire
              </span>
            </em>
            ,<br />et d&apos;une conviction.
          </>
        }
        // lede="Siyaptze, ingénieure de formation, a fondé Lab's Food pour soulager la charge mentale de ceux qui n'ont plus le temps de bien manger."
        image="/assets/photo-11.jpeg"
        imagePosition="center 30%"
        size="lg"
      />

      {/* ── Bloc Portrait + Bio complète ─────────────────────────────── */}
      <section id="histoire" className="bg-cream py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Portrait sticky — classes grid + sticky directement sur le Reveal */}
          <Reveal axis="x" amount={30} className="lg:col-span-5 lg:sticky lg:top-32 relative">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy">
                <Image
                  src="/assets/placehold.jpeg"
                  alt="Siyaptze — Fondatrice de Lab's Food"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-cream/80">
                    {FOUNDER.title}
                  </div>
                  <div className="font-display text-5xl text-cream mt-2 leading-none">
                    {FOUNDER.nick}
                    <span className="italic-fraunces text-navy-mid">.</span>
                  </div>
                  {/* <div className="font-display italic text-base text-cream/70 mt-1">
                    « {FOUNDER.nick} » pour les intimes
                  </div> */}
                </div>
              </div>

              {/* Pastille gourmands */}
              <div className="absolute -top-6 -right-6 size-32 rounded-full bg-cream border-4 border-cream-deep shadow-xl grid place-items-center rotate-[-8deg]">
                <div className="text-center">
                  <div className="font-display text-2xl text-navy leading-none">
                    +{FOUNDER.gourmandsServed}
                  </div>
                  <div className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-navy-mid mt-1 leading-tight">
                    gourmands
                    <br />
                    régalés
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio (paragraphes + pull-quote) */}
          <Reveal className="lg:col-span-7">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
                <span className="size-6 h-px bg-navy-mid" />
                Notre histoire
              </p>

              <h2
                className="font-display text-navy leading-[0.98] tracking-tight text-balance mb-12"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
              >
                Je m&apos;appelle{' '}
                <em className="not-italic">
                  <span className="font-display italic text-navy-mid">
                    Siyaptze Ivy.
                  </span>
                </em>
              </h2>

              {/* Paragraphes de bio */}
              <div className="space-y-6 text-ink/80 leading-relaxed text-justify">
                {FOUNDER.bioParagraphs.slice(0, 3).map((p, i) => (
                  <p key={i}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Pull-quote signature */}
              <blockquote className="my-12 py-8 px-8 md:px-10 border-l-4 border-navy-mid bg-cream-soft rounded-r-2xl">
                <Quote className="size-6 text-navy-mid mb-4" />
                <p className="font-display italic text-2xl md:text-3xl text-navy leading-tight">
                  « {FOUNDER.signaturePull} »
                </p>
              </blockquote>

              <div className="space-y-6 text-ink/80 leading-relaxed text-justify">
                {FOUNDER.bioParagraphs.slice(3).map((p, i) => (
                  <p key={i} className='text-justify'>{p}</p>
                ))}
              </div>

              {/* 2 CTAs — fournis par la cliente */}
              <div className="mt-12 pt-8 border-t border-navy/10 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 pl-7 pr-3 py-3 rounded-full bg-navy text-cream hover:bg-navy-mid text-sm font-medium transition-all"
                >
                  Découvrir nos services
                  <span className="size-9 rounded-full bg-cream/15 grid place-items-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
                <Link
                  href="/produits/kossam"
                  className="group inline-flex items-center gap-3 pl-7 pr-3 py-3 rounded-full bg-cream-deep text-navy hover:bg-navy hover:text-cream text-sm font-medium transition-all border border-navy/15"
                >
                  Craquer pour nos produits
                  <span className="size-9 rounded-full bg-navy/10 grid place-items-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </div>

              {/* Infos rapides */}
              {/* <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
                <InfoBlock
                  icon={Users}
                  label="Gourmands régalés"
                  value={`+${FOUNDER.gourmandsServed}`}
                />
                <InfoBlock
                  icon={Languages}
                  label="Langues parlées"
                  value={FOUNDER.languages.join(' · ')}
                />
                <InfoBlock
                  icon={ShieldCheck}
                  label="Certification"
                  value={FOUNDER.certifications.join(', ')}
                />
              </div> */}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Bloc Valeurs ─────────────────────────────────────────────── */}
      <section className="bg-cream-soft py-24 md:py-32 border-y border-navy/8">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-5">
                <span className="size-6 h-px bg-navy-mid" />
                Nos valeurs
                <span className="size-6 h-px bg-navy-mid" />
              </p>
              <h3
                className="font-display text-navy leading-tight text-balance"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
              >
                Quatre piliers qui font{' '}
                <em className="not-italic">
                  <span className="font-display italic text-navy-mid">
                    Lab&apos;s Food.
                  </span>
                </em>
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="inline-flex size-16 md:size-20 rounded-full bg-navy-mid text-cream items-center justify-center mb-5 shadow-lg">
                    <v.icon className="size-6 md:size-7" />
                  </div>
                  <h4 className="font-display text-lg md:text-xl text-navy mb-3">
                    {v.title}
                  </h4>
                  <p className="text-sm text-ink/70 leading-relaxed text-pretty">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CHRONOLOGIE — Lab's Food en 4 temps (onglet 4 du doc)
          ══════════════════════════════════════════════════════════════ */}
      <section id="chronologie" className="bg-cream py-24 md:py-32 scroll-mt-20">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl mb-20">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
                <span className="size-6 h-px bg-navy-mid" />
                Chronologie
              </p>
              <h2
                className="font-display text-navy leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                Lab&apos;s Food en{' '}
                <em className="not-italic">
                  <span className="font-display italic text-navy-mid">
                    quatre temps.
                  </span>
                </em>
              </h2>
              <p className="mt-6 text-ink/70 leading-relaxed text-pretty max-w-xl">
                Du premier <strong>"riz sauté"</strong>  au Cameroun à la naissance officielle de la
                maison en Franc, l&apos;histoire d&apos;une intuition qui a
                pris six ans pour devenir une plateforme.
              </p>
            </div>
          </Reveal>

          {/* Frise verticale avec ligne médiane */}
          <div className="relative">
            {/* Ligne médiane (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-navy/15 -translate-x-1/2" />

            <div className="space-y-12 md:space-y-20">
              {TIMELINE.map((step, i) => (
                <Reveal key={step.year} delay={i * 0.1}>
                  <div
                    className={`md:grid md:grid-cols-2 md:gap-16 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                      }`}
                  >
                    {/* Côté contenu */}
                    <div className="relative">
                      {/* Pastille année (desktop) */}
                      <div
                        className={`hidden md:flex absolute top-1/2 -translate-y-1/2 size-14 rounded-full bg-navy text-cream items-center justify-center font-display text-sm shadow-xl border-4 border-cream z-10 ${i % 2 === 0
                          ? '-right-[3.5rem] translate-x-1/2'
                          : '-left-[3.5rem] -translate-x-1/2'
                          }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>

                      <div className="rounded-3xl bg-cream-soft border border-navy/8 p-8 md:p-10 hover:shadow-xl transition-shadow">
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="font-display text-5xl md:text-6xl text-navy tabular-nums leading-none">
                            {step.year}
                          </span>
                          <span className="size-1.5 rounded-full bg-navy-mid" />
                          <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy-mid">
                            {step.place}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl text-navy mt-4">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-ink/75 leading-relaxed text-pretty">
                          {step.body}
                        </p>
                      </div>
                    </div>

                    {/* Côté vide (visuel) */}
                    <div className="hidden md:block" />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Pastille finale */}
            <Reveal delay={0.5}>
              <div className="mt-16 text-center">
                <div className="inline-flex flex-col items-center">
                  <div className="size-20 rounded-full bg-navy-mid text-cream grid place-items-center shadow-2xl mb-4">
                    <Sparkles className="size-7" />
                  </div>
                  <p className="font-display italic text-2xl text-navy max-w-md text-balance">
                    Et la suite ?{' '}
                    <span className="text-navy-mid">
                      De magnifiques choses se préparent en coulisses…
                    </span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Citation pleine largeur ─────────────────────────────────── */}
      <section className="relative bg-navy text-cream py-32 md:py-40 overflow-hidden">
        <Image
          src="/assets/photo-12.jpeg"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/85 to-navy" />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />

        <div className="relative container-wide">
          <Reveal>
            <Quote className="size-12 text-white mb-8" />
            <blockquote
              className="font-display italic text-cream leading-[1.15] text-balance max-w-4xl"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              « Laissez-nous entrer dans votre cuisine, Nous nous occupons du
              reste ! »
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="size-12 rounded-full overflow-hidden bg-cream">
                <Image
                  src="/assets/placehold.jpeg"
                  alt="Siyaptze"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="font-display text-xl text-cream">
                  Siyaptze Ivy
                </div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/55 mt-0.5">
                  Fondatrice de Lab&apos;s Food
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA contact direct ───────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="rounded-3xl bg-cream-soft border border-navy/10 p-10 md:p-16 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3
                className="font-display text-navy leading-tight text-balance"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
              >
                Envie d&apos;
                <em className="not-italic">
                  <span className="font-display italic text-navy-mid">
                    en parler
                  </span>
                </em>{' '}
                directement avec Ivy ?
              </h3>
              <p className="mt-4 text-ink/70 max-w-xl text-pretty">
                Que ce soit pour un atelier, un événement ou simplement
                échanger.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={whatsappLink(
                  "Bonjour Ivy, j'ai vu votre page À propos et j'aimerais en savoir plus — ",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-whatsapp text-white font-medium text-sm hover:bg-whatsapp-deep transition-colors"
              >
                <WhatsAppIcon className="size-4" />
                Discuter avec Ivy
                <ArrowUpRight className="size-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-cream text-sm font-medium transition-all"
              >
                Formulaire de contact
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon className="size-3 text-navy-mid" />
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink/45">
          {label}
        </span>
      </div>
      <div className="font-display text-base text-navy leading-tight">{value}</div>
    </div>
  )
}
