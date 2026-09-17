import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Truck, ShieldCheck } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { KONI } from '@/lib/content'
import { whatsappLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Marinade Köni',
  description: `${KONI.short} ${KONI.price}, expédiée dans toute l'Europe.`,
}

const ORDER_MESSAGE =
  "Bonjour Lab's Food, je souhaite commander la marinade Köni — "

export default function KoniPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Köni, la marinade{' '}
            <span className="font-display italic text-orange">
              qui fait le travail.
            </span>
          </>
        }
        lede={KONI.short}
        image={KONI.image}
        imagePosition="center"
        size="lg"
      />

      {/* ── Le produit ────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-cream-deep">
              <Image
                src={KONI.image}
                alt="Marinade Köni de Lab's Food"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal axis="x" delay={0.1} className="lg:col-span-6">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-navy-mid">
                {KONI.category}
              </p>
              <h2 className="mt-5 font-display text-5xl md:text-6xl text-navy leading-none">
                {KONI.name}
                <span className="italic-fraunces text-orange-deep">.</span>
              </h2>
              <p className="mt-4 font-display italic text-xl text-navy/80">
                {KONI.tagline}
              </p>

              <p className="mt-8 leading-relaxed text-ink/80 max-w-[62ch]">
                {KONI.description}
              </p>

              {/* Prix + commande */}
              <div className="mt-10 pt-8 border-t border-navy/15 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink/75">
                    Le pot
                  </p>
                  <p className="mt-2 font-display text-5xl text-navy leading-none tabular-nums">
                    {KONI.price}
                  </p>
                </div>
                <a
                  href={whatsappLink(ORDER_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-whatsapp text-white font-medium text-sm hover:bg-whatsapp-deep transition-colors duration-300 ease-expo shadow-[0_10px_28px_-12px_rgba(37,211,102,0.8)]"
                >
                  <WhatsAppIcon className="size-4" />
                  Commander sur WhatsApp
                </a>
              </div>

              {/* Livraison */}
              <div className="mt-8 flex items-start gap-4 rounded-2xl bg-cream-deep p-5">
                <span className="size-9 rounded-full bg-navy/10 grid place-items-center shrink-0">
                  <Truck className="size-4 text-navy" />
                </span>
                <div>
                  <p className="font-medium text-sm text-navy">
                    Expédition dans toute l&apos;Europe
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                    {KONI.deliveryNote}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Comment s'en servir ───────────────────────────────────────── */}
      <section className="bg-navy text-cream py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
        <div className="relative container-wide grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2
              className="font-display text-cream leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Une cuillère,{' '}
              <span className="font-display italic text-orange">
                et le plat change.
              </span>
            </h2>
            <p className="mt-7 leading-relaxed text-cream/75 max-w-[52ch]">
              Köni s&apos;utilise comme une marinade classique : vous en enduisez
              le produit, vous laissez reposer, vous cuisez. Elle tient aussi
              très bien la cuisson directe quand le temps manque.
            </p>
          </Reveal>

          <ol className="lg:col-span-7 lg:pt-3">
            {KONI.usages.map((usage, i) => (
              <Reveal key={usage} delay={i * 0.08}>
                <li className="grid grid-cols-[auto_1fr] items-baseline gap-5 py-6 border-b border-cream/12 last:border-b-0">
                  <span className="font-mono text-xs tabular-nums text-orange">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-display text-xl md:text-2xl text-cream leading-snug">
                    {usage}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Sortie ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container-wide flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-start gap-4 max-w-md">
            <span className="size-10 rounded-full bg-navy/8 grid place-items-center shrink-0">
              <ShieldCheck className="size-4 text-navy" />
            </span>
            <div>
              <p className="font-display text-lg text-navy leading-none">
                Maison certifiée HACCP
              </p>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                Produite dans le respect des normes d&apos;hygiène
                alimentaire.
              </p>
            </div>
          </div>

          <Link
            href="/produits"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-cream hover:border-navy text-sm font-medium transition-colors duration-300 ease-expo self-start md:self-auto"
          >
            Voir tous les produits
            <ArrowUpRight className="size-4 transition-transform duration-300 ease-expo group-hover:rotate-45" />
          </Link>
        </div>
      </section>
    </>
  )
}
