'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const services = [
  {
    slug: 'atelier-culinaire',
    eyebrow: 'Service · 01',
    name: 'Atelier culinaire',
    description:
      "Apprenez à cuisiner une spécialité du monde dans une expérience interactive et intime. Une cheffe vient chez vous, vous repartez avec la fiche recette et un cadeau surprise.",
    price: 'à partir de 80€',
    image: '/assets/photo-7.jpeg',
    href: '/services/atelier-culinaire',
    accent: 'terra',
  },
  {
    slug: 'batch-cooking',
    eyebrow: 'Service · 02',
    name: 'Batch cooking',
    description:
      "Une cheffe vient préparer une semaine entière de repas chez vous, en 2 heures minimum. Idéal pour mieux manger sans y penser.",
    price: 'sur-mesure',
    image: '/assets/photo-9.jpeg',
    href: '/services/batch-cooking',
    accent: 'navy',
  },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="section bg-cream">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Nos services"
          title={
            <>
              Deux services pensés pour{' '}
              <span className="italic gradient-text-terra">vivre la cuisine</span>{' '}
              autrement.
            </>
          }
          lede="Que vous vouliez apprendre, ou simplement bien manger sans y penser — il y a une formule pour vous."
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link
                href={s.href}
                className="group block card hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-expo"
                  />
                  <div className="absolute top-5 left-5 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream bg-navy/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {s.eyebrow}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-display text-3xl text-navy">{s.name}</h3>
                    <span
                      className={`shrink-0 inline-flex items-center justify-center size-10 rounded-full transition-all duration-500 group-hover:rotate-45 ${
                        s.accent === 'terra'
                          ? 'bg-terra/10 text-terra group-hover:bg-terra group-hover:text-cream'
                          : 'bg-navy/10 text-navy group-hover:bg-navy group-hover:text-cream'
                      }`}
                    >
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-5 text-pretty text-ink/75 leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                      Tarifs
                    </span>
                    <span className="font-display text-xl text-terra">
                      {s.price}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
