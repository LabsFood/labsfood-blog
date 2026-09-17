import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MapPin, Truck } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { COMING_SOON, KONI, KOSSAM } from '@/lib/content'
import { whatsappLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Produits artisanaux',
  description:
    "Le Kossam, boisson lactée fermentée livrée sur la Côte d'Azur, et la marinade Köni expédiée dans toute l'Europe. Bientôt : Luxury Kossam, Kossam Bissap, ail noir.",
}

export default function ProduitsPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Le labo,{' '}
            <span className="font-display italic text-orange">
              au quotidien.
            </span>
          </>
        }
        lede="Deux produits maison en vente aujourd'hui : le Kossam, notre signature fraîche, et la marinade Köni, qui voyage dans toute l'Europe. D'autres créations sont en préparation."
        image="/assets/koss.jpeg"
        imagePosition="center 40%"
        size="lg"
      />

      {/* ── En vente aujourd'hui ──────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl text-navy pb-8 border-b border-navy/15">
            En vente aujourd&apos;hui
          </h2>

          <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Kossam */}
            <Reveal>
              <Link
                href={`/produits/${KOSSAM.slug}`}
                className="group block h-full rounded-3xl overflow-hidden bg-navy text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-mid/60 focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/assets/photo-1.jpeg"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-expo group-hover:scale-105"
                  >
                    <source src="/assets/kossam-main.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
                </div>

                <div className="p-8 md:p-10">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-mint">
                    {KOSSAM.category}
                  </p>
                  <h3 className="mt-4 font-display text-4xl md:text-5xl text-cream leading-none">
                    {KOSSAM.name}
                  </h3>
                  <p className="mt-4 text-cream/75 leading-relaxed max-w-md">
                    {KOSSAM.short}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {KOSSAM.formats.map((f) => (
                      <span
                        key={f.qty}
                        className="px-4 py-2 rounded-full border border-cream/25 text-sm text-cream/90 tabular-nums"
                      >
                        {f.qty} × 1,5 L · {f.price}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-cream/15 flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2 text-xs text-cream/70">
                      <MapPin className="size-3.5 text-mint shrink-0" />
                      {KOSSAM.delivery}
                    </span>
                    <span className="size-11 rounded-full bg-cream text-navy grid place-items-center transition-transform duration-500 ease-expo group-hover:scale-110">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Köni */}
            <Reveal delay={0.1}>
              <Link
                href={`/produits/${KONI.slug}`}
                className="group block h-full rounded-3xl overflow-hidden bg-cream-deep text-navy border border-navy/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-mid/60 focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={KONI.image}
                    alt="Marinade Köni de Lab's Food"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-expo group-hover:scale-105"
                  />
                </div>

                <div className="p-8 md:p-10">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid">
                    {KONI.category}
                  </p>
                  <h3 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-none">
                    {KONI.name}
                  </h3>
                  <p className="mt-4 text-ink/75 leading-relaxed max-w-md">
                    {KONI.short}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2.5">
                    <span className="px-4 py-2 rounded-full border border-navy/20 text-sm text-navy tabular-nums">
                      Le pot · {KONI.price}
                    </span>
                  </div>

                  <div className="mt-8 pt-6 border-t border-navy/15 flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2 text-xs text-ink/70">
                      <Truck className="size-3.5 text-orange-deep shrink-0" />
                      {KONI.delivery}
                    </span>
                    <span className="size-11 rounded-full bg-navy text-cream grid place-items-center transition-transform duration-500 ease-expo group-hover:scale-110">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Livraison ─────────────────────────────────────────────────── */}
      <section className="bg-cream-deep py-20 md:py-24">
        <div className="container-wide grid md:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="md:col-span-5">
            <h2
              className="font-display text-navy leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Deux produits,{' '}
              <span className="font-display italic text-orange-deep">
                deux façons de vous les envoyer.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <dl className="border-t border-navy/15">
              <div className="py-7 border-b border-navy/15">
                <dt className="font-display text-xl text-navy">
                  Kossam — {KOSSAM.delivery}
                </dt>
                <dd className="mt-2 text-ink/70 leading-relaxed max-w-[62ch]">
                  {KOSSAM.deliveryNote} Récupération sur place ou livraison,
                  selon ce qui vous arrange.
                </dd>
              </div>
              <div className="py-7 border-b border-navy/15">
                <dt className="font-display text-xl text-navy">
                  Köni — {KONI.delivery}
                </dt>
                <dd className="mt-2 text-ink/70 leading-relaxed max-w-[62ch]">
                  {KONI.deliveryNote}
                </dd>
              </div>
            </dl>

            <a
              href={whatsappLink("Bonjour Lab's Food, j'ai une question sur vos produits — ")}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-whatsapp text-white font-medium text-sm hover:bg-whatsapp-deep transition-colors duration-300 ease-expo"
            >
              <WhatsAppIcon className="size-4" />
              Poser une question
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Bientôt ───────────────────────────────────────────────────── */}
      <section className="relative bg-teal text-cream py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />

        <div className="container-wide relative">
          <div className="max-w-2xl">
            <h2
              className="font-display text-cream leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Les prochaines{' '}
              <span className="font-display italic text-orange-soft">
                sorties du labo.
              </span>
            </h2>
            <p className="mt-6 text-cream/75 leading-relaxed">
              Elles ne sont pas encore en vente. Dites-nous laquelle vous
              attendez et nous vous préviendrons en premier.
            </p>
          </div>

          <ol className="mt-14 border-t border-cream/20">
            {COMING_SOON.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <li className="flex items-baseline justify-between gap-6 py-6 border-b border-cream/20">
                  <div className="flex items-baseline gap-5 min-w-0">
                    <span className="font-mono text-xs tabular-nums text-orange-soft shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/65">
                    {item.category}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>

          <a
            href={whatsappLink(
              "Bonjour Lab's Food, je souhaite être prévenu·e des prochaines sorties.",
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cream text-navy font-medium text-sm hover:bg-orange hover:text-cream transition-colors duration-300 ease-expo"
          >
            <WhatsAppIcon className="size-4" />
            Être prévenu·e en premier
          </a>
        </div>
      </section>
    </>
  )
}
