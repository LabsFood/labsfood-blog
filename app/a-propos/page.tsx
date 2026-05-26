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
} from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
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
    body: "Partager les savoirs, créer du lien autour d'une assiette. La cuisine est un langage universel — on l'apprend ensemble.",
  },
  {
    icon: Heart,
    title: 'Honorer les saveurs',
    body: "Chaque recette porte une histoire. On respecte les traditions et on les réinvente avec soin.",
  },
  {
    icon: Sparkles,
    title: 'Surprendre',
    body: "Le voyage culinaire, c'est aussi l'inattendu. Une note acidulée, un cadeau surprise, une saveur d'ailleurs.",
  },
  {
    icon: ShieldCheck,
    title: 'Rassurer',
    body: 'Certifiée HACCP, transparente sur les ingrédients et les méthodes. La confiance avant tout.',
  },
]

const TIMELINE = [
  {
    year: '21 pays',
    title: 'L\'exploration',
    body: 'Ivy parcourt 21 pays, à la rencontre de cultures et de saveurs qui la marqueront durablement.',
  },
  {
    year: '2025',
    title: 'La naissance',
    body: "L'idée prend forme : créer une maison culinaire qui fait voyager, sans la contrainte du visa.",
  },
  {
    year: 'Aujourd\'hui',
    title: 'Lab\'s Food',
    body: 'Ateliers à domicile, batch cooking sur-mesure, et produits artisanaux comme le Kossam.',
  },
  {
    year: 'Demain',
    title: 'Le labo grandit',
    body: 'Kossam Bissap, Luxury Kossam, ail noir, marinade verte BIO, cakes, cocktails… ce n\'est qu\'un début.',
  },
]

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Une maison culinaire,{' '}
            <span className="italic">née d&apos;un voyage</span>.
          </>
        }
        lede="Lab's Food, c'est l'histoire d'Ivy : ingénieure de formation, étudiante, mais surtout passionnée de gastronomie. Après 21 pays explorés, une conviction — le plus beau des voyages se passe souvent autour d'une assiette."
        image="/assets/photo-14.jpeg"
        imagePosition="center 40%"
      />

      {/* ═══════════════════════════════════════════════════════════
          NOTRE HISTOIRE — portrait + citation
          ═══════════════════════════════════════════════════════════ */}
      <section className="section bg-cream relative overflow-hidden">
        <div className="absolute -top-32 right-0 size-[500px] bg-navy-mid/8 blur-3xl rounded-full pointer-events-none" />

        <div className="container-wide relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Ivy */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-6 -left-6 size-28 rounded-full bg-navy-mid/15 -z-0" />
              <div className="absolute -bottom-8 -right-4 size-44 rounded-full bg-teal/10 -z-0" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy">
                <Image
                  src="/assets/photo-9.jpeg"
                  alt={FOUNDER.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Carte d'identité flottante */}
              <div className="absolute -bottom-6 left-6 bg-cream rounded-2xl px-5 py-3 shadow-xl border border-navy/8">
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-navy-mid">
                  {FOUNDER.title}
                </div>
                <div className="font-display text-2xl text-navy leading-none mt-1">
                  {FOUNDER.name}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Citation + bio */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-navy-mid inline-flex items-center gap-3">
              <span className="size-6 h-px bg-navy-mid" />
              Notre histoire
            </span>

            <Quote className="size-10 text-navy-mid mt-8 -mb-2" />
            <p className="font-display italic text-3xl md:text-4xl text-navy leading-tight max-w-xl">
              Le plus beau des voyages se passe souvent{' '}
              <span>autour d&apos;une assiette</span>.
            </p>

            <div className="mt-10 space-y-5 max-w-xl">
              <p className="lede text-pretty">{FOUNDER.bio}</p>
              <p className="lede text-pretty">{FOUNDER.mission}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STATS — bande navy
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-16 md:py-20 bg-navy text-cream overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="container-wide relative grid grid-cols-3 divide-x divide-cream/15">
          <StatCard
            icon={Globe2}
            value={FOUNDER.countries.toString()}
            label="pays explorés"
          />
          <StatCard icon={ShieldCheck} value="HACCP" label="maison certifiée" />
          <StatCard
            icon={Languages}
            value={FOUNDER.languages.length.toString()}
            label="langues parlées"
            sub={FOUNDER.languages.join(' · ')}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NOS VALEURS
          ═══════════════════════════════════════════════════════════ */}
      <section className="section bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-navy-mid inline-flex items-center gap-3">
                <span className="size-6 h-px bg-navy-mid" />
                Ce qui nous tient à cœur
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-navy mt-6 text-balance">
                Quatre principes,{' '}
                <span className="italic">une seule promesse</span>.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-cream-soft border border-navy/8 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-expo">
                  <div className="size-12 rounded-full bg-navy-mid/15 grid place-items-center mb-5">
                    <v.icon className="size-5 text-navy-mid" />
                  </div>
                  <h3 className="font-display text-xl text-navy">{v.title}</h3>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TIMELINE — étapes clés
          ═══════════════════════════════════════════════════════════ */}
      <section className="section bg-cream-deep relative overflow-hidden">
        <Image
          src="/assets/photo-7.jpeg"
          alt=""
          fill
          className="object-cover opacity-[0.06] pointer-events-none"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-deep via-cream-deep/95 to-cream-deep pointer-events-none" />

        <div className="container-wide relative">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-navy-mid inline-flex items-center gap-3">
                <span className="size-6 h-px bg-navy-mid" />
                Le chemin
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-navy mt-6 text-balance">
                D&apos;un sac à dos{' '}
                <span className="italic">à une maison</span>.
              </h2>
            </Reveal>
          </div>

          {/* Timeline horizontale */}
          <div className="relative">
            {/* Ligne horizontale */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-navy/15" />

            <div className="grid md:grid-cols-4 gap-8">
              {TIMELINE.map((step, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="relative">
                    <div className="size-14 mx-auto md:mx-0 rounded-full bg-navy-mid text-cream grid place-items-center font-display text-xl shadow-lg ring-4 ring-cream-deep relative z-10">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="mt-5 text-center md:text-left">
                      <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-navy-mid">
                        {step.year}
                      </div>
                      <h3 className="font-display text-xl text-navy mt-2">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MOT DE LA CHEFFE — bloc éditorial
          ═══════════════════════════════════════════════════════════ */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <Reveal>
            <div className="rounded-3xl bg-navy text-cream p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 size-1/3 opacity-20">
                <Image
                  src="/assets/photo-2.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white">
                  Mot de la cheffe
                </span>
                <p className="font-display italic text-2xl md:text-3xl text-cream mt-6 leading-snug max-w-2xl">
                  «&nbsp;J&apos;ai imaginé Lab&apos;s Food comme un passeport vers la table.
                  Embarquez avec nous,{' '}
                  <span>et bon voyage gustatif&nbsp;!</span>
                  &nbsp;»
                </p>
                <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white">
                  — Ivy, fondatrice
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA — découvrir les services + WhatsApp
          ═══════════════════════════════════════════════════════════ */}
      {/* <section className="section bg-cream-deep relative overflow-hidden">
        <Image
          src="/assets/photo-9.jpeg"
          alt=""
          fill
          className="object-cover opacity-[0.07] pointer-events-none"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-deep via-cream-deep/95 to-cream-deep pointer-events-none" />

        <div className="container-wide relative">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-navy-mid">
                Et maintenant ?
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-navy mt-6 text-balance">
                Embarquez avec{' '}
                <span className="italic gradient-text-navy-mid">nous</span>.
              </h2>
              <p className="lede mt-6 max-w-xl mx-auto">
                Découvrez nos services, commandez du Kossam, ou rejoignez la
                communauté des chefs partenaires. À vous de choisir.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/services">
                    Découvrir nos services
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={whatsappLink("Bonjour Lab's Food, ")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Discuter sur WhatsApp
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section> */}
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

function StatCard({
  icon: Icon,
  value,
  label,
  sub,
}: {
  icon: React.ElementType
  value: string
  label: string
  sub?: string
}) {
  return (
    <div className="px-4 md:px-8 first:pl-0 last:pr-0">
      <Icon className="size-8 text-white mb-4" />
      <div className="font-display text-4xl md:text-5xl text-cream tabular-nums leading-none">
        {value}
      </div>
      <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/55 mt-3">
        {label}
      </div>
      {sub && (
        <div className="text-xs text-cream/70 mt-2 hidden md:block">{sub}</div>
      )}
    </div>
  )
}
