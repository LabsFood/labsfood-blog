'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  MapPin,
  Truck,
  
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { COMING_SOON, PRODUCTS } from '@/lib/content'
import { whatsappLink } from '@/lib/utils'

// Mapping catégorie → couleur d'accent (placeholder visuel)
const CATEGORY_TINT: Record<string, string> = {
  Boisson: 'from-mint-ink/20 to-mint-ink/5',
  Épice: 'from-navy/15 to-navy/5',
  Condiment: 'from-teal/20 to-teal/5',
  Pâtisserie: 'from-mint-ink/15 to-cream-deep',
}

export function ProductsSection() {
  const kossam = PRODUCTS[0]

  return (
    <section id="produits" className="section bg-cream-deep relative overflow-hidden">
      {/* Photo de fond très estompée pour casser le blanc */}
      <Image
        src="/assets/photo-2.jpeg"
        alt=""
        fill
        className="object-cover opacity-[0.08] pointer-events-none"
        sizes="100vw"
      />
      {/* Voile cream pour adoucir la photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-deep via-cream-deep/95 to-cream-deep pointer-events-none" />
      {/* Filet supérieur */}
      <div className="absolute top-0 inset-x-0 h-px bg-navy/10" />

      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Le labo · Nos produits"
          title={
            <>
              Une signature{' '}
              <span className="italic text-mint-ink">qui infuse</span>,
              <br className="hidden md:block" /> des créations qui s&apos;annoncent.
            </>
          }
          lede="Le Kossam est notre première signature. D'autres créations artisanales sont en cours dans le labo."
        />

        {/* ═══════════════════════════════════════════════════════════
            BLOC 01 — Kossam : magazine spread
            ═══════════════════════════════════════════════════════════ */}
        <Reveal>
          <div className="mt-20 grid lg:grid-cols-12 gap-10 items-center">
            {/* Photos */}
            <div className="lg:col-span-7 relative">
              {/* Vidéo principale */}
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
                {/* Étiquette en haut */}
                {/* <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/90 text-navy font-mono text-[0.6rem] uppercase tracking-[0.25em]">
                  <span className="size-1.5 rounded-full bg-whatsapp animate-pulse" />
                  En stock
                </div> */}
                {/* Numérotation discrète */}
                <div className="absolute bottom-5 right-5 font-display text-7xl text-cream/30 leading-none">
                  01
                </div>
              </div>

              {/* Mini photo secondaire en chevauchement */}
              <div className="hidden md:block absolute -bottom-12 -left-8 w-44 h-56 rounded-2xl overflow-hidden border-4 border-cream shadow-xl">
                <Image
                  src="/assets/photo-10.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Texte produit */}
            <div className="lg:col-span-5 lg:pl-6">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-mint-ink mb-4">
                Produit · 01 — Signature
              </div>

              <h3 className="font-display text-5xl md:text-6xl text-navy leading-none">
                {kossam.name}
                <span className="italic-fraunces text-mint-ink">.</span>
              </h3>

              <p className="font-display italic text-xl text-navy/80 mt-4 max-w-md">
                {kossam.tagline}
              </p>

              {/* Tableau des formats — sobre */}
              <div className="mt-10 border-t border-navy/10">
                {kossam.formats.map((f) => (
                  <div
                    key={f.size}
                    className="flex items-baseline justify-between py-4 border-b border-navy/10"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/55 tabular-nums">
                        {f.size}
                      </span>
                      <span className="text-sm text-ink/70">Format bouteille</span>
                    </div>
                    <span className="font-display text-2xl text-navy tabular-nums">
                      {f.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bouton + livraison */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start">
                <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  <a
                    href={whatsappLink(
                      "Bonjour Lab's Food, je souhaite commander du Kossam — format : ",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="size-4" />
                    Commander
                  </a>
                </Button>
                <Link
                  href="/produits/kossam"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-navy hover:text-mint-ink transition-colors"
                >
                  Découvrir la fiche
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-ink/60">
                <MapPin className="size-3.5 text-mint-ink" />
                Livraison sur la Côte d&apos;Azur · paiement à la livraison
              </div>
            </div>
          </div>
        </Reveal>

        {/* ═══════════════════════════════════════════════════════════
            BLOC 02 — "Bientôt dans le labo" — strip horizontal
            ═══════════════════════════════════════════════════════════ */}
        <div className="mt-32 md:mt-40">
          {/* <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <span className="size-6 h-px bg-mint-ink" />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-mint-ink">
                  Bientôt dans le labo
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-5xl text-navy text-balance max-w-2xl">
                Les prochaines{' '}
                <span className="italic text-mint-ink">sorties</span>.
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink/45">
                [ {COMING_SOON.length.toString().padStart(2, '0')} en préparation ]
              </span>
            </Reveal>
          </div> */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {COMING_SOON.map((item, i) => {
              const tint = CATEGORY_TINT[item.category] ?? 'from-navy/10 to-navy/5'
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group"
                >
                  <div className="aspect-[3/4] rounded-2xl bg-cream-soft border border-navy/8 overflow-hidden relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tint}`}
                    />
                    <div className="absolute top-3 right-3 inline-flex items-center px-2 py-1 rounded-full bg-cream/90 text-mint-ink font-mono text-[0.55rem] uppercase tracking-[0.2em]">
                      Soon
                    </div>
                    <div className="absolute bottom-3 left-3 font-mono text-[0.6rem] tabular-nums text-navy/30">
                      [{String(i + 1).padStart(2, '0')}]
                    </div>
                    <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-navy/85">
                      <div className="text-center px-4">
                        <Sparkles className="size-4 text-navy-soft mx-auto mb-2" />
                        <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-cream/80">
                          En préparation
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-1">
                    <div className="font-display text-lg text-navy leading-tight">
                      {item.name}
                    </div>
                    <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/55 mt-1">
                      {item.category}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div> */}

          {/* <Reveal delay={0.15}>
            <div className="mt-10 flex items-center justify-center">
              <Button asChild variant="whatsapp" size="md">
                <a
                  href={whatsappLink(
                    "Bonjour Lab's Food, je souhaite être prévenu·e des nouvelles sorties.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="size-4" />
                  Être prévenu·e des sorties sur WhatsApp
                </a>
              </Button>
            </div>
          </Reveal> */}
        </div>

        <Reveal>
          <div className="mt-24 md:mt-32 border-t border-navy/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Info
              icon={MapPin}
              title="Kossam"
              body="Livraison sur la Côte d'Azur et bientot toute la France"
            />
            <Info
              icon={ShieldCheck}
              title="Qualité garantie"
              body="Maison certifiée HACCP"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Info({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType
  title: string
  body: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="size-10 rounded-full bg-mint-ink/10 grid place-items-center shrink-0">
        <Icon className="size-4 text-mint-ink" />
      </div>
      <div>
        <div className="font-display text-lg text-navy leading-none">{title}</div>
        <div className="text-sm text-ink/65 mt-1.5">{body}</div>
      </div>
    </div>
  )
}
