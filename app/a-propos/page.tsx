import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  Languages,
  Heart,
  Sparkles,
  HandHeart,
  Quote,
  MessageCircle,
  MapPin,
} from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { FOUNDER } from '@/lib/content'
import { whatsappLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: "À propos — Lab's Food, par Ivy",
  description:
    "L'histoire de Lab's Food, maison culinaire fondée par Ivy après l'exploration de 21 pays. Notre mission : vous faire voyager autour d'une assiette.",
}

const VALUES = [
  {
    icon: HandHeart,
    title: 'Transmettre',
    text: 'Partager les savoir-faire culinaires découverts de pays en pays.',
  },
  {
    icon: Sparkles,
    title: 'Émerveiller',
    text: 'Chaque assiette est une invitation à goûter une culture nouvelle.',
  },
  {
    icon: Heart,
    title: 'Recevoir',
    text: "Créer un moment, qu'il soit privé ou professionnel — toujours sincère.",
  },
  {
    icon: ShieldCheck,
    title: 'Rigoureux',
    text: 'HACCP, hygiène et qualité ne sont jamais des options.',
  },
] as const

const STORY = [
  {
    n: '01',
    year: '2018',
    title: 'Premier voyage culinaire',
    text: "Premier départ. Premiers carnets de recettes. La conviction qu'une assiette raconte un pays mieux qu'un livre.",
  },
  {
    n: '02',
    year: '2020',
    title: '21 pays explorés',
    text: "Italie, Portugal, Liban, Maroc, Sénégal, Japon… Chaque cuisine devient une école, chaque chef rencontré une inspiration.",
  },
  {
    n: '03',
    year: '2024',
    title: "Lancement de Lab's Food",
    text: "La maison culinaire prend forme : ateliers, batch cooking, assistance. Trois services nés d'une seule passion.",
  },
  {
    n: '04',
    year: '2025',
    title: 'Le Kossam',
    text: "Première création signature — un savoir-faire camerounais réinventé, déjà adopté par la Côte d'Azur.",
  },
] as const

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Une maison née d&apos;
            <em className="not-italic">
              <span className="font-display italic gradient-text-navy-mid">
                21 voyages
              </span>
            </em>
            ,
            <br />
            d&apos;une assiette à la fois.
          </>
        }
        lede="Lab's Food, c'est avant tout l'histoire d'Ivy — ingénieure de formation, passionnée de gastronomie et d'évasion."
        image="/assets/photo-11.jpeg"
        imagePosition="center 30%"
        size="lg"
      />

      {/* ── Bloc Portrait + Bio ───────────────────────────────────────── */}
      <section id="histoire" className="bg-cream py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <Reveal axis="x" amount={30}>
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy">
                <Image
                  src="/IvyOfficielle.png"
                  alt="Ivy — Fondatrice & cheffe"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-cream/80">
                    Fondatrice &amp; cheffe
                  </div>
                  <div className="font-display text-5xl text-cream mt-2 leading-none">
                    Ivy
                    <span className="italic-fraunces text-navy-mid">.</span>
                  </div>
                </div>
              </div>

              {/* Pastilles flottantes */}
              <div className="absolute -top-6 -right-6 size-28 rounded-full bg-cream border-4 border-cream-deep shadow-xl grid place-items-center rotate-[-8deg]">
                <div className="text-center">
                  <div className="font-display text-3xl text-navy leading-none">
                    {FOUNDER.countries}
                  </div>
                  <div className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-navy-mid mt-1">
                    pays
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal>
            <div className="lg:col-span-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
                <span className="size-6 h-px bg-navy-mid" />
                L&apos;histoire
              </p>

              <h2
                className="font-display text-navy leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                Ingénieure le jour,{' '}
                <em className="not-italic">
                  <span className="font-display italic gradient-text-navy-mid">
                    cuisinière du monde
                  </span>
                </em>{' '}
                toujours.
              </h2>

              <div className="mt-8 space-y-5 text-ink/75 leading-relaxed max-w-xl text-pretty">
                <p>{FOUNDER.bio}</p>
                <p className="italic font-display text-2xl text-navy">
                  « {FOUNDER.mission} »
                </p>
              </div>

              {/* Infos rapides */}
              <div className="mt-10 pt-8 border-t border-navy/10 grid grid-cols-2 md:grid-cols-3 gap-6">
                <InfoBlock
                  icon={Globe2}
                  label="Pays explorés"
                  value={`${FOUNDER.countries} pays`}
                />
                <InfoBlock
                  icon={Languages}
                  label="Langues"
                  value={FOUNDER.languages.join(' · ')}
                />
                <InfoBlock
                  icon={ShieldCheck}
                  label="Certification"
                  value={FOUNDER.certifications.join(', ')}
                />
              </div>
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
                  <span className="font-display italic gradient-text-navy-mid">
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

      {/* ── Bloc Frise temporelle ───────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
                <span className="size-6 h-px bg-navy-mid" />
                Notre parcours
              </p>
              <h2
                className="font-display text-navy leading-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                De la première recette
                <br />
                <em className="not-italic">
                  <span className="font-display italic gradient-text-navy-mid">
                    à la maison d&apos;aujourd&apos;hui.
                  </span>
                </em>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {STORY.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12}>
                <div className="relative rounded-2xl bg-cream-soft border border-navy/8 p-8 h-full hover:shadow-lg transition-shadow group">
                  <div className="font-display text-5xl text-navy/15 tabular-nums leading-none mb-6">
                    {step.n}
                  </div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid mb-2">
                    {step.year}
                  </div>
                  <h4 className="font-display text-xl text-navy mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm text-ink/70 leading-relaxed text-pretty">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Citation pleine largeur ─────────────────────────────────── */}
      <section className="relative bg-navy text-cream py-32 md:py-40 overflow-hidden">
        <Image
          src="/assets/photo-12.jpeg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/85 to-navy" />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />

        <div className="relative container-wide">
          <Reveal>
            <Quote className="size-12 text-navy-mid mb-8" />
            <blockquote
              className="font-display italic text-cream leading-[1.15] text-balance max-w-4xl"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              « Le plus beau des voyages se passe souvent autour d&apos;une
              assiette. »
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="size-12 rounded-full overflow-hidden bg-cream">
                <Image
                  src="/IvyOfficielle.png"
                  alt="Ivy"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="font-display text-xl text-cream">Ivy</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/55 mt-0.5">
                  Fondatrice &amp; cheffe Lab&apos;s Food
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
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
                  <span className="font-display italic gradient-text-navy-mid">
                    en parler
                  </span>
                </em>{' '}
                directement avec Ivy ?
              </h3>
              <p className="mt-4 text-ink/70 max-w-xl text-pretty">
                Que ce soit pour un atelier, un événement ou simplement échanger
                — la conversation commence sur WhatsApp.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={whatsappLink("Bonjour Ivy, j'ai vu votre page À propos et j'aimerais en savoir plus — ")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-whatsapp text-white font-medium text-sm hover:bg-whatsapp-deep transition-colors"
              >
                <MessageCircle className="size-4" />
                Discuter avec Ivy
                <ArrowUpRight className="size-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-cream text-sm font-medium transition-all"
              >
                Voir nos services
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
