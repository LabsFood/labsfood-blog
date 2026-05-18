'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { COMING_SOON, PRODUCTS } from '@/lib/content'

export function ProductsSection() {
  const kossam = PRODUCTS[0]

  return (
    <section id="produits" className="section bg-teal text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="absolute top-0 right-0 size-[500px] bg-terra/15 blur-3xl rounded-full" />
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
          {/* Carte Kossam featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <Link
              href="/produits/kossam"
              className="group relative block h-full min-h-[440px] rounded-3xl overflow-hidden bg-navy"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/photo-1.jpeg"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 ease-expo"
              >
                <source src="/assets/kossam-main.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

              <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-terra-soft">
                    Produit · 01
                  </span>
                  <span className="size-12 rounded-full bg-cream text-navy grid place-items-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-5xl md:text-7xl text-cream">{kossam.name}</h3>
                  <p className="mt-3 text-cream/75 max-w-md">{kossam.tagline}</p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {kossam.formats.map((f) => (
                      <div
                        key={f.size}
                        className="px-4 py-2 rounded-full border border-cream/30 backdrop-blur-sm text-sm flex items-center gap-2"
                      >
                        <span className="font-mono text-xs text-terra-soft">{f.size}</span>
                        <span className="font-display text-base">{f.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Coming soon stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-3xl bg-cream/5 border border-cream/15 backdrop-blur-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="size-4 text-terra-soft" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-terra-soft">
                  Le labo
                </span>
              </div>
              <h3 className="font-display text-3xl text-cream mb-8 text-balance">
                Bientôt disponibles.
              </h3>
              <ul className="flex flex-col divide-y divide-cream/10">
                {COMING_SOON.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between py-3.5 group"
                  >
                    <div className="flex flex-col">
                      <span className="font-display text-lg text-cream">{item.name}</span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cream/50">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-terra-soft border border-terra-soft/30 px-2.5 py-1 rounded-full">
                      Soon
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/produits"
                className="mt-8 inline-flex items-center gap-2 font-medium text-terra-soft hover:text-cream transition-colors link-underline"
              >
                Voir tous les produits
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
