import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight, Check, MessageCircle, MapPin, ShieldCheck, Snowflake, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
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
      {/* Hero produit en split */}
      <section className="relative bg-navy text-cream pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="container-wide relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow text-terra-soft">Produit · 01</span>
            <h1 className="display-xl text-cream mt-6 text-balance">{kossam.name}</h1>
            <p className="mt-4 text-cream/75 max-w-lg text-pretty">
              {kossam.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {kossam.formats.map((f) => (
                <div
                  key={f.size}
                  className="px-5 py-3 rounded-full border border-cream/30 backdrop-blur-sm flex items-center gap-3"
                >
                  <span className="font-mono text-xs text-terra-soft">{f.size}</span>
                  <span className="font-display text-xl">{f.price}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <Button asChild size="lg">
                <a
                  href={whatsappLink(
                    "Bonjour Lab's Food, je souhaite commander du Kossam — format : ",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" />
                  Commander sur WhatsApp
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/65">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-terra-soft" />
                {kossam.delivery}
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-terra-soft" />
                Certifiée HACCP
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-square max-w-xl mx-auto w-full">
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-navy-deep shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/photo-1.jpeg"
                className="w-full h-full object-cover"
              >
                <source src="/assets/kossam-main.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Description longue */}
      <section className="section bg-cream">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Description</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Une <span className="italic gradient-text-terra">expérience sensorielle</span>{' '}
              avant tout.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink/85 text-pretty">
              {kossam.description}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Snowflake, label: 'Servir très frais' },
                { icon: Sparkles, label: 'Texture veloutée' },
                { icon: MapPin, label: kossam.delivery },
                { icon: ShieldCheck, label: 'HACCP' },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-3 rounded-xl bg-cream-soft border border-navy/10 px-5 py-4"
                >
                  <b.icon className="size-4 text-terra shrink-0" />
                  <span className="text-sm font-medium text-navy">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usages */}
      <section className="section bg-cream-soft">
        <div className="container-wide">
          <span className="eyebrow">Mille façons de le savourer</span>
          <h2 className="display-md text-navy mt-4 mb-12 text-balance max-w-3xl">
            Du verre frais aux <span className="italic gradient-text-terra">sauces salées</span>, le Kossam s&apos;invite partout.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {kossam.usages.map((u, i) => (
              <div
                key={i}
                className="rounded-2xl bg-cream border border-navy/10 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="font-mono text-xs text-terra mb-3">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-ink/85 leading-relaxed">{u}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recettes vidéo */}
      <section className="section bg-navy text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="container-wide relative">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div className="max-w-2xl">
              <span className="eyebrow text-terra-soft">Recettes en vidéo</span>
              <h2 className="display-md text-cream mt-4 text-balance">
                Trois idées pour{' '}
                <span className="italic gradient-text-terra">commencer</span>.
              </h2>
            </div>
            <p className="text-sm text-cream/65 max-w-sm">
              Inspirez-vous des recettes faites par la cheffe Ivy avec son Kossam.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-navy-deep"
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={`/assets/photo-${n + 1}.jpeg`}
                >
                  <source src={`/assets/recette-${n}.mp4`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-terra-soft">
                    Recette {String(n).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl text-cream mt-2">
                    Inspiration n°{n}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation + Allergènes */}
      <section className="section bg-cream">
        <div className="container-wide grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-cream-soft border border-navy/10 p-10">
            <Snowflake className="size-5 text-terra mb-5" />
            <h3 className="font-display text-2xl text-navy">Conservation</h3>
            <ul className="mt-5 space-y-3 text-ink/80 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-1 size-4 rounded-full bg-terra/15 text-terra grid place-items-center shrink-0">
                  <Check className="size-2.5" />
                </span>
                <span>À conserver au réfrigérateur entre 2°C et 6°C.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-4 rounded-full bg-terra/15 text-terra grid place-items-center shrink-0">
                  <Check className="size-2.5" />
                </span>
                <span>À consommer rapidement après ouverture.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-4 rounded-full bg-terra/15 text-terra grid place-items-center shrink-0">
                  <Check className="size-2.5" />
                </span>
                <span>Bien agiter avant dégustation.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-teal text-cream p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-[0.05]" />
            <div className="relative">
              <ShieldCheck className="size-5 text-terra-soft mb-5" />
              <h3 className="font-display text-2xl text-cream">Confiance & qualité</h3>
              <p className="mt-5 text-cream/80 leading-relaxed">
                Lab&apos;s Food est <span className="text-terra-soft">certifiée HACCP</span>.
                Chaque produit est préparé dans le respect des normes d&apos;hygiène
                alimentaire.
              </p>
              <p className="mt-3 text-cream/75 text-sm">
                Allergènes : présence de lait. Pour toute question, contactez-nous sur
                WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews carousel */}
      <section className="section bg-cream">
        <div className="container-wide mb-12">
          <span className="eyebrow">Avis clients</span>
          <h2 className="display-md text-navy mt-4 text-balance max-w-3xl">
            Ce que la <span className="italic gradient-text-terra">communauté</span> en
            dit.
          </h2>
        </div>
        <KossamReviewsCarousel />
      </section>

      {/* CTA finale */}
      <section className="bg-cream pb-24">
        <div className="container-wide">
          <div className="rounded-3xl bg-terra text-cream p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-10" />
            <div className="absolute -top-20 -right-20 size-96 rounded-full bg-cream/15 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-25">
              <Image src="/assets/photo-2.jpeg" alt="" fill className="object-cover" />
            </div>
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-6xl text-cream text-balance leading-[0.95]">
                  Prêt à goûter le Kossam ?
                </h2>
                <p className="mt-6 text-cream/85 text-lg max-w-md">
                  Une discussion WhatsApp suffit. Précisez le format et la quantité, on
                  s&apos;occupe du reste.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-cream text-terra-deep hover:bg-cream-soft w-full justify-between"
                >
                  <a
                    href={whatsappLink(
                      "Bonjour Lab's Food, je souhaite commander du Kossam — format 0.5L (7€)",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="size-4" />
                      Commander 0.5L · 7€
                    </span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-navy text-cream hover:bg-navy-mid w-full justify-between"
                >
                  <a
                    href={whatsappLink(
                      "Bonjour Lab's Food, je souhaite commander du Kossam — format 1.5L (19.99€)",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="size-4" />
                      Commander 1.5L · 19.99€
                    </span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
