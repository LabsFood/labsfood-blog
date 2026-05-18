'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  MapPin,
  Truck,
  Beaker,
  MessageCircle,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { COMING_SOON, PRODUCTS } from '@/lib/content'
import { whatsappLink } from '@/lib/utils'

// Mapping catégorie → icône (illustratif, pas exact)
const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Boisson: Beaker,
  Épice: Sparkles,
  Condiment: Sparkles,
  Pâtisserie: Sparkles,
}

export function ProductsSection() {
  const kossam = PRODUCTS[0]

  return (
    <section
      id="produits"
      className="section bg-teal text-cream relative overflow-hidden"
    >
      {/* Décors */}
      <div className="absolute inset-0 bg-grain opacity-[0.06]" />
      <div className="absolute top-0 right-0 size-[600px] bg-terra/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-[500px] bg-navy/30 blur-3xl rounded-full pointer-events-none" />
      {/* Motif vague décoratif */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(217,105,65,0.6) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(247,241,232,0.4) 0%, transparent 50%)",
        }}
      />

      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Nos produits"
          title={
            <>
              Le labo, et ses{' '}
              <span className="italic gradient-text-terra">créations artisanales</span>.
            </>
          }
          lede="Le Kossam est notre première signature. D'autres expérimentations arrivent — déjà en cours dans le labo."
          invert
        />

        <div className="grid lg:grid-cols-12 gap-8 mt-16">
          {/* === Carte Kossam featured === */}
          <Reveal className="lg:col-span-7">
            <Link
              href="/produits/kossam"
              className="group relative block h-full min-h-[520px] rounded-3xl overflow-hidden bg-navy ring-1 ring-cream/10 hover:ring-terra/40 transition-all duration-500"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/photo-1.jpeg"
                className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-expo"
              >
                <source src="/assets/kossam-main.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />

              {/* Badge HACCP */}
              <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 text-[0.65rem] font-mono uppercase tracking-[0.2em] text-cream">
                <ShieldCheck className="size-3 text-terra-soft" />
                HACCP
              </div>

              <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-terra-soft">
                    Produit · 01 — Signature
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-5xl md:text-7xl text-cream leading-none">
                    {kossam.name}
                  </h3>
                  <p className="mt-3 text-cream/80 max-w-md">{kossam.tagline}</p>

                  {/* Formats avec prix */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {kossam.formats.map((f) => (
                      <div
                        key={f.size}
                        className="px-4 py-2.5 rounded-full bg-cream/10 backdrop-blur-md border border-cream/25 flex items-center gap-3"
                      >
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-terra-soft">
                          {f.size}
                        </span>
                        <span className="font-display text-lg text-cream">
                          {f.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/65 inline-flex items-center gap-2">
                      <MapPin className="size-3.5 text-terra-soft" />
                      Livraison Côte d&apos;Azur
                    </span>
                    <span className="size-12 rounded-full bg-cream text-navy grid place-items-center group-hover:scale-110 group-hover:bg-terra group-hover:text-cream transition-all duration-500">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* === Coming soon stack === */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="h-full rounded-3xl bg-cream/5 border border-cream/15 backdrop-blur-sm p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 size-60 bg-terra/10 blur-3xl rounded-full" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-terra-soft" />
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-terra-soft">
                      Le labo
                    </span>
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cream/45">
                    {COMING_SOON.length} créations
                  </span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl text-cream mb-2 text-balance">
                  Bientôt disponibles.
                </h3>
                <p className="text-sm text-cream/65 mb-8">
                  Inscrivez-vous pour être prévenu·e des sorties.
                </p>

                {/* Liste enrichie */}
                <ul className="flex flex-col divide-y divide-cream/10">
                  {COMING_SOON.map((item, i) => {
                    const Icon = CATEGORY_ICONS[item.category] ?? Sparkles
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-center justify-between gap-3 py-3.5 group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="size-8 rounded-full bg-cream/[0.08] border border-cream/15 grid place-items-center shrink-0 group-hover:bg-terra/20 group-hover:border-terra/40 transition-colors">
                            <Icon className="size-3.5 text-terra-soft" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-display text-lg text-cream truncate">
                              {item.name}
                            </span>
                            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/50">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-terra-soft border border-terra-soft/30 px-2.5 py-1 rounded-full shrink-0">
                          Soon
                        </span>
                      </motion.li>
                    )
                  })}
                </ul>

                {/* CTA double */}
                <div className="mt-8 flex flex-col gap-3">
                  <Button asChild variant="whatsapp" size="sm" className="w-full">
                    <a
                      href={whatsappLink("Bonjour Lab's Food, je souhaite être prévenu·e des sorties produits.")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="size-3.5" />
                      Être prévenu·e sur WhatsApp
                    </a>
                  </Button>
                  <Link
                    href="/produits"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-terra-soft hover:text-cream transition-colors link-underline self-center"
                  >
                    Voir tous les produits
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* === Bande de livraison / réassurance === */}
        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <DeliveryCard
              icon={MapPin}
              title="Kossam"
              body="Livraison sur la Côte d'Azur uniquement"
            />
            <DeliveryCard
              icon={Truck}
              title="Autres produits"
              body="Toute l'Europe via La Poste"
            />
            <DeliveryCard
              icon={ShieldCheck}
              title="Qualité"
              body="Maison certifiée HACCP"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function DeliveryCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType
  title: string
  body: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-cream/[0.06] backdrop-blur-sm border border-cream/15 p-5">
      <div className="size-11 rounded-full bg-terra/20 grid place-items-center shrink-0">
        <Icon className="size-5 text-terra-soft" />
      </div>
      <div>
        <div className="font-display text-lg text-cream leading-none">{title}</div>
        <div className="text-xs text-cream/70 mt-1.5">{body}</div>
      </div>
    </div>
  )
}
