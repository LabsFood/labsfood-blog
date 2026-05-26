import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { COMING_SOON, PRODUCTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Produits artisanaux',
  description:
    "Découvrez le Kossam, notre boisson lactée fermentée. Et bientôt : Kossam Bissap, Luxury Kossam, ail noir, marinade verte BIO, cakes & cocktails.",
}

export default function ProduitsPage() {
  const kossam = PRODUCTS[0]

  return (
    <>
      <PageHero
        eyebrow="Nos produits"
        title={
          <>
            Le labo,{' '}
            <span className="italic gradient-text-navy-mid">au quotidien</span>.
          </>
        }
        lede="Le Kossam est notre signature. D'autres créations artisanales sont en cours dans le labo, déjà disponibles à la pré-commande."
        image="/assets/photo-1.jpeg"
        imagePosition="center 40%"
      />

      {/* Produit dispo */}
      <section className="section bg-cream">
        <div className="container-wide">
          <span className="eyebrow">Disponibles</span>
          <h2 className="display-md text-navy mt-4 mb-12">En stock dès aujourd&apos;hui</h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <Link
              href={`/produits/${kossam.slug}`}
              className="group lg:col-span-2 relative block rounded-3xl overflow-hidden bg-navy min-h-[440px]"
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
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-navy-soft">
                    Produit · 01
                  </span>
                  <span className="size-12 rounded-full bg-cream text-navy grid place-items-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-5xl md:text-7xl text-cream">
                    {kossam.name}
                  </h3>
                  <p className="mt-3 text-cream/75 max-w-md">{kossam.tagline}</p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {kossam.formats.map((f) => (
                      <div
                        key={f.size}
                        className="px-4 py-2 rounded-full border border-cream/30 backdrop-blur-sm text-sm flex items-center gap-2"
                      >
                        <span className="font-mono text-xs text-navy-soft">
                          {f.size}
                        </span>
                        <span className="font-display text-base">{f.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            <div className="rounded-3xl bg-teal text-cream p-8 md:p-10 flex flex-col justify-between min-h-[440px]">
              <div>
                <Sparkles className="size-5 text-navy-soft" />
                <h3 className="font-display text-3xl mt-4">Livraison</h3>
                <p className="mt-3 text-cream/75 text-sm leading-relaxed">
                  Le Kossam, c&apos;est uniquement{' '}
                  <span className="text-navy-soft">sur la Côte d&apos;Azur</span>.
                  <br />
                  <br />
                  Les autres produits, on livre dans toute l&apos;Europe avec la Poste.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-cream/15">
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/55">
                  Certifié
                </div>
                <div className="font-display text-2xl mt-1">HACCP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming soon grid */}
      <section className="section bg-navy text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="container-wide relative">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div className="max-w-2xl">
              <span className="eyebrow text-navy-soft">Le labo · Bientôt</span>
              <h2 className="display-md text-cream mt-4 text-balance">
                Les prochaines{' '}
                <span className="italic gradient-text-navy-mid">surprises</span> qui sortent du
                labo.
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMING_SOON.map((item, i) => (
              <div
                key={item.name}
                className="group rounded-2xl bg-cream/5 border border-cream/10 backdrop-blur-sm p-8 hover:bg-cream/10 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/55">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-navy-soft border border-navy-soft/30 px-2.5 py-1 rounded-full">
                    Soon
                  </span>
                </div>
                <h3 className="font-display text-2xl text-cream">{item.name}</h3>
                <p className="mt-2 text-sm text-cream/55">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
