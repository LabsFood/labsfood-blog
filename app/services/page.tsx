import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: "Services — Ateliers culinaires, batch cooking & assistance",
  description:
    "Découvrez nos trois services : ateliers de cuisine du monde à domicile, batch cooking sur-mesure, et assistance culinaire pour vos événements.",
}

const SERVICES = [
  {
    slug: 'atelier-culinaire',
    title: 'Atelier culinaire',
    eyebrow: 'Service · 01',
    short:
      "Une cheffe vient chez vous pour un atelier privé et interactif. Vous choisissez la cuisine, vous repartez avec la recette et un cadeau surprise.",
    price: "à partir de 80€ — jusqu'à 4 pers.",
    image: '/assets/photo-7.jpeg',
    href: '/services/atelier-culinaire',
    cta: "Découvrir l'atelier",
    accent: 'navy-mid',
  },
  {
    slug: 'batch-cooking',
    title: 'Batch cooking',
    eyebrow: 'Service · 02',
    short:
      "En 2h minimum, une cheffe vous prépare une semaine entière de repas variés et équilibrés directement à votre domicile.",
    price: "Disponible sur la Côte d'Azur",
    image: '/assets/photo-9.jpeg',
    href: '/services/batch-cooking',
    cta: 'Découvrir le batch',
    accent: 'navy',
  },
  {
    slug: 'assistance-culinaire',
    title: 'Assistance culinaire',
    eyebrow: 'Service · 03',
    short:
      "Un grand dîner, une fête de famille, un événement traiteur ? Lab's Food intervient en renfort en cuisine — le rôle s'adapte à votre besoin.",
    price: 'Sur devis · contactez-nous',
    image: '/assets/photo-5.jpeg',
    href: '/services/assistance-culinaire',
    cta: 'Découvrir le service',
    accent: 'teal',
  },
] as const

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={
          <>
            Apprendre, déléguer,{' '}
            <span className="italic gradient-text-navy-mid">ou se faire épauler</span>.
          </>
        }
        lede="Trois formules pensées pour trois moments de vie. Un atelier pour transmettre, un batch pour bien manger, une assistance pour les grands événements."
        image="/assets/photo-11.jpeg"
        imagePosition="center 30%"
      />

      <section className="section bg-cream">
        <div className="container-wide">
          {/* Grille : 2 colonnes en haut */}
          <div className="grid lg:grid-cols-2 gap-8">
            {SERVICES.slice(0, 2).map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="group block card hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-expo"
                  />
                  <div className="absolute top-5 left-5 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream bg-navy/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {s.eyebrow}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <h2 className="font-display text-4xl text-navy">{s.title}</h2>
                  <p className="mt-5 leading-relaxed text-ink/75">{s.short}</p>
                  <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between">
                    <span className="font-display text-lg text-navy-mid">{s.price}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-navy-mid transition-colors">
                      {s.cta} <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Service 03 — carte panoramique pleine largeur */}
          {SERVICES.slice(2).map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group block card hover:shadow-2xl hover:-translate-y-1 mt-8"
            >
              <div className="lg:grid lg:grid-cols-12">
                <div className="relative lg:col-span-5 h-72 lg:h-auto overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-expo"
                  />
                  <div className="absolute top-5 left-5 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream bg-teal/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {s.eyebrow}
                  </div>
                </div>
                <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-teal mb-3">
                    Nouveau service
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-navy">{s.title}</h2>
                  <p className="mt-5 leading-relaxed text-ink/75 max-w-xl">{s.short}</p>
                  <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between">
                    <span className="font-display text-lg text-teal">{s.price}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-teal transition-colors">
                      {s.cta} <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
