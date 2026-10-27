'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Info, MapPin, Truck, ShieldCheck } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { COMING_SOON, KONI, KOSSAM } from '@/lib/content'
import { whatsappLink } from '@/lib/utils'

/**
 * ProductsSection — la gamme Lab's Food sur la page d'accueil.
 *
 * Deux produits en vente depuis la refonte de septembre 2026 : le Kossam,
 * frais et limité à la Côte d'Azur, et la marinade Köni, expédiée dans toute
 * l'Europe. Les deux n'ont ni la même logistique ni le même prix : ils sont
 * présentés en deux blocs distincts plutôt qu'en grille uniforme.
 */
export function ProductsSection() {
  return (
    <section
      id="produits"
      className="relative bg-cream-deep py-24 md:py-32 lg:py-36 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-navy/10" />

      <div className="container-wide relative">
        {/* ── Titre ─────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <Reveal className="lg:col-span-7">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-mint-ink">
                Le labo
              </p>
              <h2
                className="mt-5 font-display text-navy leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
              >
                Deux produits maison,{' '}
                <span className="font-display italic text-mint-ink">
                  et ce n&apos;est qu&apos;un début.
                </span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-navy/10">
            <p className="text-ink/75 leading-relaxed max-w-[52ch]">
              Le Kossam est notre signature, née d&apos;un savoir-faire
              camerounais. La marinade Köni est le raccourci que la cheffe
              utilise dans sa propre cuisine, mis en pot pour la vôtre.
            </p>
          </Reveal>
        </div>

        {/* ═══ Kossam ═══════════════════════════════════════════════════ */}
        <Reveal>
          <div className="mt-20 md:mt-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[4/5] md:aspect-[5/4] rounded-3xl overflow-hidden bg-navy">
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
                <div className="absolute bottom-5 right-5 font-display text-7xl text-cream/45 leading-none">
                  {KOSSAM.n}
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-12 -left-8 w-44 h-56 rounded-2xl overflow-hidden border-4 border-cream-deep shadow-[0_18px_36px_-18px_rgba(0,35,75,0.55)]">
                <Image
                  src="/assets/photo-10.jpeg"
                  alt=""
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-mint-ink">
                {KOSSAM.category}
              </p>

              <h3 className="mt-4 font-display text-5xl md:text-6xl text-navy leading-none">
                {KOSSAM.name}
                <span className="italic-fraunces text-mint-ink">.</span>
              </h3>

              <p className="font-display italic text-xl text-navy/80 mt-4 max-w-md">
                {KOSSAM.tagline}
              </p>

              {/* Formats */}
              <div className="mt-9 border-t border-navy/12">
                {KOSSAM.formats.map((f) => (
                  <div
                    key={f.qty}
                    className="flex items-center justify-between py-4 border-b border-navy/12"
                  >
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 tabular-nums">
                      {f.qty} bouteille{f.qty > 1 ? 's' : ''} · 1,5 L
                    </span>
                    <div className="text-right">
                      <span className="font-display text-2xl text-navy tabular-nums">
                        {f.price}
                      </span>
                      {f.unitPrice && (
                        <span className="block font-mono text-[0.6rem] text-ink/70 mt-0.5">
                          soit {f.unitPrice}€/btl
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {['Sans sucre', 'Peu sucré', 'Sucré'].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-full bg-navy/5 border border-navy/10 text-ink/65 font-mono text-[0.55rem] uppercase tracking-[0.12em]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink/75">
                <Info className="size-3.5 shrink-0 mt-0.5 text-ink/40" />
                <span>
                  Zéro Gaspi : votre Kossam est embouteillé dans la bouteille
                  d&apos;eau minérale neuve et stérilisée ayant servi à sa
                  préparation.
                </span>
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start">
                <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  <a
                    href={whatsappLink(
                      "Bonjour Lab's Food, je souhaite commander du Kossam : ",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="size-4" />
                    Commander
                  </a>
                </Button>
                <Link
                  href={`/produits/${KOSSAM.slug}`}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-navy hover:text-mint-ink transition-colors"
                >
                  Découvrir la fiche
                  <ArrowUpRight className="size-4 transition-transform duration-300 ease-expo group-hover:rotate-45" />
                </Link>
              </div>

              <p className="mt-6 flex items-center gap-2 text-xs text-ink/65">
                <MapPin className="size-3.5 text-mint-ink shrink-0" />
                {KOSSAM.delivery}, produit frais.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ═══ Köni ═════════════════════════════════════════════════════ */}
        <Reveal>
          <div className="mt-28 md:mt-36 lg:mt-40 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 lg:order-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy">
                <Image
                  src={KONI.image}
                  alt="Marinade Köni de Lab's Food"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-5 right-5 font-display text-7xl text-cream/45 leading-none">
                  {KONI.n}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-1 lg:pr-10">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-navy-mid">
                {KONI.category}
              </p>

              <h3 className="mt-4 font-display text-5xl md:text-6xl text-navy leading-none">
                {KONI.name}
                <span className="italic-fraunces text-orange-deep">.</span>
              </h3>

              <p className="font-display italic text-xl text-navy/80 mt-4 max-w-md">
                {KONI.tagline}
              </p>

              <p className="mt-7 leading-relaxed text-ink/80 max-w-[58ch]">
                {KONI.short}
              </p>

              <div className="mt-9 pt-7 border-t border-navy/12 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink/75">
                    Le pot
                  </p>
                  <p className="mt-2 font-display text-4xl text-navy leading-none tabular-nums">
                    {KONI.price}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="whatsapp" size="lg">
                    <a
                      href={whatsappLink(
                        "Bonjour Lab's Food, je souhaite commander la marinade Köni : ",
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppIcon className="size-4" />
                      Commander
                    </a>
                  </Button>
                  <Link
                    href={`/produits/${KONI.slug}`}
                    className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-navy hover:text-orange-deep transition-colors"
                  >
                    Découvrir la fiche
                    <ArrowUpRight className="size-4 transition-transform duration-300 ease-expo group-hover:rotate-45" />
                  </Link>
                </div>
              </div>

              <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-ink/65">
                <Truck className="size-3.5 text-orange-deep shrink-0 mt-0.5" />
                {KONI.deliveryNote}
              </p>
            </div>
          </div>
        </Reveal>

        {/* ═══ Bientôt + garanties ══════════════════════════════════════ */}
        <Reveal>
          <div className="mt-28 md:mt-32 pt-12 border-t border-navy/12 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <h3 className="font-display text-2xl md:text-3xl text-navy">
                Bientôt dans le labo
              </h3>
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {COMING_SOON.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-3">
                    <span className="font-display text-xl text-navy/80">
                      {item.name}
                    </span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink/70">
                      {item.category}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(
                  "Bonjour Lab's Food, je souhaite être prévenu·e des prochaines sorties.",
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-mint-ink transition-colors link-underline"
              >
                <WhatsAppIcon className="size-4" />
                Être prévenu·e des sorties
              </a>
            </div>

            <div className="md:col-span-5 md:pl-10 md:border-l md:border-navy/10 flex items-start gap-4">
              <span className="size-10 rounded-full bg-mint-ink/10 grid place-items-center shrink-0">
                <ShieldCheck className="size-4 text-mint-ink" />
              </span>
              <div>
                <p className="font-display text-lg text-navy leading-none">
                  Maison certifiée HACCP
                </p>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                  Production et conditionnement dans le respect des normes
                  d&apos;hygiène alimentaire.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
