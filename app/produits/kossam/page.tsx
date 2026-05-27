import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  
  MapPin,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  Leaf,
  GlassWater,
  Play,
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { whatsappLink } from '@/lib/utils'
import { PRODUCTS } from '@/lib/content'
import { KossamReviewsCarousel } from '@/components/sections/KossamReviewsCarousel'

export const metadata: Metadata = {
  title: 'Kossam — Boisson lactée fermentée',
  description:
    "Le Kossam de Lab's Food : boisson lactée fermentée d'inspiration camerounaise. Texture veloutée, note acidulée. 7€ (0.5L) et 19,99€ (1.5L).",
}

const kossam = PRODUCTS[0]

export default function KossamPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Vidéo plein écran avec carte produit superposée
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] bg-navy text-cream overflow-hidden flex items-end">
        {/* Vidéo fond */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/photo-1.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/kossam-main.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grain opacity-[0.06]" />

        {/* Décor radial */}
        <div className="absolute top-20 right-0 size-[600px] bg-mint-ink/20 blur-3xl rounded-full pointer-events-none" />

        {/* Filets */}
        <div className="absolute top-32 inset-x-0 h-px bg-gradient-to-r from-transparent via-mint-ink/30 to-transparent" />

        <div className="container-wide relative pt-40 pb-16 md:pb-24 w-full">
          {/* Badge breadcrumb */}
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              {/* <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/85">
                <span className="size-1.5 rounded-full bg-whatsapp animate-pulse" />
                Disponible
              </span> */}
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-soft">
                Produit · 01 — Signature
              </span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            {/* Colonne titre + tagline */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream leading-[0.9] tracking-tight">
                  Kossam
                  <span className="text-mint-ink italic-fraunces inline-block">.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-display italic text-2xl md:text-3xl text-cream/90 mt-6 max-w-xl leading-tight">
                  {kossam.tagline}
                </p>
              </Reveal>

              {/* Bandeau stars + origine */}
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-yellow-500 text-yellow-500" />
                    ))}
                    <span className="ml-2 text-cream/80 font-mono text-[0.7rem] uppercase tracking-[0.2em]">
                      10 avis · 5.0
                    </span>
                  </div>
                  <span className="hidden sm:block size-1 rounded-full bg-cream/40" />
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/65">
                    Inspiration camerounaise
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Colonne carte prix flottante */}
            <Reveal axis="x" amount={40} delay={0.3} className="lg:col-span-5">
              <div className="relative rounded-3xl bg-cream/10 backdrop-blur-xl border border-cream/20 p-7 md:p-8 shadow-2xl">
                {/* Pill HACCP */}
                <div className="absolute -top-3 left-7 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint-ink text-cream font-mono text-[0.6rem] uppercase tracking-[0.25em] shadow-lg">
                  <ShieldCheck className="size-3" />
                  HACCP
                </div>

                <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white">
                  Disponible en deux formats
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {kossam.formats.map((f) => (
                    <a
                      key={f.size}
                      href={whatsappLink(
                        `Bonjour Lab's Food, je souhaite commander du Kossam — format ${f.size} (${f.price})`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative block p-5 rounded-2xl bg-cream/5 border border-cream/15 hover:bg-cream hover:border-cream transition-all duration-500"
                    >
                      <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/65 group-hover:text-navy/60">
                        {f.size}
                      </div>
                      <div className="font-display text-3xl text-cream group-hover:text-navy mt-1">
                        {f.price}
                      </div>
                      <ArrowUpRight className="absolute top-4 right-4 size-4 text-cream/40 group-hover:text-mint-ink group-hover:rotate-45 transition-all" />
                    </a>
                  ))}
                </div>

                <Button
                  asChild
                  variant="whatsapp"
                  size="lg"
                  className="w-full mt-5 justify-center"
                >
                  <a
                    href={whatsappLink(
                      "Bonjour Lab's Food, je souhaite commander du Kossam — format : ",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <WhatsAppIcon className="size-4" /> */}
                    Commander sur WhatsApp
                  </a>
                </Button>

                <div className="mt-5 pt-5 border-t border-cream/15 flex items-center gap-2 text-xs text-cream/65">
                  <MapPin className="size-3.5 text-white" />
                  Livraison sur la Côte d&apos;Azur uniquement, bientot toute la France
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DESCRIPTION LONGUE — éditorial
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section bg-cream relative overflow-hidden">
        <div className="absolute -top-40 right-0 size-[500px] bg-mint-ink/8 blur-3xl rounded-full" />
        <div className="container-wide relative grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-mint-ink">
              Description
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-4 text-balance">
              Une <span className="italic gradient-text-mint">expérience sensorielle</span>{' '}
              avant tout.
            </h2>

            {/* Photo verticale */}
            <div className="mt-8 relative aspect-[4/5] rounded-3xl overflow-hidden hidden lg:block">
              <Image
                src="/assets/photo-2.jpeg"
                alt="Kossam"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-cream">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em]">
                  La signature de la maison
                </span>
                <Sparkles className="size-4 text-navy-soft" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink/85 text-pretty">
              {kossam.description}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Snowflake, label: 'Servir très frais', sub: 'Entre 2°C et 6°C' },
                { icon: Sparkles, label: 'Texture veloutée', sub: 'Onctueuse et fraîche' },
                { icon: MapPin, label: kossam.delivery, sub: 'Livraison rapide' },
                { icon: ShieldCheck, label: 'HACCP', sub: 'Maison certifiée' },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-4 rounded-2xl bg-cream-soft border border-navy/8 p-5 hover:border-mint-ink/40 hover:shadow-lg transition-all"
                >
                  <div className="size-11 rounded-full bg-mint-ink/15 grid place-items-center shrink-0">
                    <b.icon className="size-5 text-mint-ink" />
                  </div>
                  <div>
                    <div className="font-display text-base text-navy">{b.label}</div>
                    <div className="text-xs text-ink/55 mt-0.5">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bandeau bénéfices */}
            <div className="mt-8 rounded-2xl bg-navy text-cream p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 size-40 bg-mint-ink/30 blur-3xl rounded-full" />
              <div className="relative flex flex-wrap items-center gap-6">
                <Leaf className="size-5 text-navy-soft" />
                <p className="text-sm text-cream/85 flex-1 min-w-[200px]">
                  Source d&apos;inspiration en cuisine : verre frais, granola, smoothie, sauces…
                </p>
                <a
                  href="#usages"
                  className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-soft hover:text-cream transition-colors"
                >
                  Voir les usages ↓
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          USAGES — grille enrichie
          ═══════════════════════════════════════════════════════════════ */}
      <section id="usages" className="section bg-cream-soft relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03]" />
        <div className="container-wide relative">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <Reveal>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-mint-ink">
                Mille façons de le savourer
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy mt-4 text-balance max-w-3xl">
                Du verre frais aux{' '}
                <span className="italic gradient-text-mint">sauces salées</span>, le
                Kossam s&apos;invite partout.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-mint-ink/10 text-navy-deep">
                <GlassWater className="size-4" />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em]">
                  Polyvalent
                </span>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {kossam.usages.map((u, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group h-full rounded-3xl bg-cream border border-navy/8 p-7 hover:bg-navy hover:text-cream hover:border-navy hover:-translate-y-1 transition-all duration-500 ease-expo">
                  <div className="flex items-center justify-between mb-6">
                    <div className="font-display text-3xl text-mint-ink group-hover:text-navy-soft transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="size-9 rounded-full bg-mint-ink/10 group-hover:bg-cream/10 grid place-items-center transition-colors">
                      <Sparkles className="size-4 text-mint-ink group-hover:text-navy-soft transition-colors" />
                    </div>
                  </div>
                  <p className="leading-relaxed text-ink/85 group-hover:text-cream/85 transition-colors">
                    {u}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RECETTES VIDÉO — section navy enrichie
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section bg-navy text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="absolute -top-32 left-1/4 size-[500px] bg-mint-ink/15 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 size-[400px] bg-teal/30 blur-3xl rounded-full" />

        <div className="container-wide relative">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <Reveal className="max-w-2xl">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white">
                Recettes en vidéo
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-cream mt-4 text-balance">
                Trois idées pour{' '}
                <span className="italic">commencer</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm text-cream/65 max-w-sm">
                Inspirez-vous des recettes faites par la cheffe Ivy avec son Kossam.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[1, 2, 3].map((n, i) => (
              <Reveal key={n} delay={i * 0.1}>
                <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-navy-deep ring-1 ring-cream/10 hover:ring-mint-ink/40 transition-all duration-500">
                  <video
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-expo"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={`/assets/photo-${n + 1}.jpeg`}
                  >
                    <source src={`/assets/recette-${n}.mp4`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

                  {/* Icône play flottante */}
                  <div className="absolute top-5 right-5 size-11 rounded-full bg-cream/15 backdrop-blur-md border border-cream/25 grid place-items-center group-hover:bg-mint-ink group-hover:border-mint-ink transition-all duration-500">
                    <Play className="size-4 fill-current text-cream" />
                  </div>

                  <div className="relative h-full flex flex-col justify-end p-6">
                    {/* <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white">
                      Recette {String(n).padStart(2, '0')}
                    </span> */}
                    <h3 className="font-display text-2xl text-cream mt-2">
                      Recette {String(n).padStart(2, '0')}                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONSERVATION + QUALITÉ — split coloré
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section bg-cream">
        <div className="container-wide grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full rounded-3xl bg-cream-soft border border-navy/10 p-10 relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute -top-10 -right-10 size-40 bg-mint-ink/8 blur-3xl rounded-full" />
              <div className="relative">
                <div className="size-12 rounded-full bg-mint-ink/15 grid place-items-center mb-5">
                  <Snowflake className="size-5 text-mint-ink" />
                </div>
                <h3 className="font-display text-3xl text-navy">Conservation</h3>
                <p className="mt-2 text-sm text-ink/60">
                  Pour préserver toute sa fraîcheur
                </p>
                <ul className="mt-6 space-y-4 text-ink/85 leading-relaxed">
                  {[
                    'À conserver au réfrigérateur entre 2°C et 6°C.',
                    'À consommer rapidement après ouverture.',
                    'Bien agiter avant dégustation.',
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-1 size-5 rounded-full bg-mint-ink/15 text-mint-ink grid place-items-center shrink-0">
                        <Check className="size-3" />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-teal text-cream p-10 relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-grain opacity-[0.05]" />
              <div className="absolute -bottom-10 -left-10 size-60 bg-mint-ink/20 blur-3xl rounded-full" />
              <div className="relative">
                <div className="size-12 rounded-full bg-mint-ink/20 grid place-items-center mb-5">
                  <ShieldCheck className="size-8 text-white" />
                </div>
                <h3 className="font-display text-3xl text-cream">
                  Confiance & qualité
                </h3>
                <p className="mt-2 text-sm text-cream/60">
                  Lab&apos;s Food respecte les normes
                </p>
                <p className="mt-6 text-white leading-relaxed">
                  Lab&apos;s Food est{' '}
                  <span className="text-white font-bold">certifiée HACCP</span>.
                  Chaque produit est préparé dans le respect des normes d&apos;hygiène
                  alimentaire.
                </p>
                <div className="mt-6 pt-6 border-t border-cream/15">
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white">
                    Allergènes
                  </div>
                  <p className="text-sm text-cream/75">
                    Présence de lait. Pour toute question, contactez-nous sur WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          AVIS — carousel
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section bg-cream-soft">
        <div className="container-wide mb-12">
          <Reveal>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-mint-ink">
              Avis clients
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-4 text-balance max-w-3xl">
              Ce que la <span className="italic gradient-text-mint">communauté</span> en
              dit.
            </h2>
          </Reveal>
        </div>
        <KossamReviewsCarousel />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA FINALE — double commande WhatsApp
          ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-cream pb-24">
        <div className="container-wide">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-mint-ink via-mint-ink to-navy-deep text-cream p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-grain opacity-10" />
              <div className="absolute -top-20 -right-20 size-96 rounded-full bg-cream/15 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 size-96 rounded-full bg-navy/30 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-20">
                <Image src="/assets/photo-2.jpeg" alt="" fill className="object-cover" />
              </div>
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/80 inline-flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-cream animate-pulse" />
                    Commande en quelques secondes
                  </span>
                  <h2 className="font-display text-4xl md:text-6xl text-cream text-balance leading-[0.95] mt-4">
                    Prêt à goûter le{' '}
                    <span className="italic">Kossam</span> ?
                  </h2>
                  <p className="mt-6 text-cream/85 text-lg max-w-md">
                    Une discussion WhatsApp suffit. Précisez le format et la quantité, on
                    s&apos;occupe du reste.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild variant="whatsapp" size="lg" className="w-full justify-between">
                    <a
                      href={whatsappLink(
                        "Bonjour Lab's Food, je souhaite commander du Kossam — format 0.5L (7€)",
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="flex items-center gap-2">
                        <WhatsAppIcon className="size-4" />
                        Commander 0.5L · 7€
                      </span>
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="whatsapp" size="lg" className="w-full justify-between">
                    <a
                      href={whatsappLink(
                        "Bonjour Lab's Food, je souhaite commander du Kossam — format 1.5L (19.99€)",
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="flex items-center gap-2">
                        <WhatsAppIcon className="size-4" />
                        Commander 1.5L · 19.99€
                      </span>
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
