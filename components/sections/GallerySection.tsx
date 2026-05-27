'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

/**
 * GALERIE — Bandeau marquee infini + mosaïque éditoriale
 */

const MARQUEE_WORDS = [
  'Voyager',
  'Apprendre',
  'Partager',
  'Cuisiner',
  'Déguster',
  'Recevoir',
  'Inventer',
  'Transmettre',
]

const GALLERY = [
  { src: '/assets/photo-2.jpeg', alt: 'Préparation maison', aspect: 'tall' },
  { src: '/assets/photo-7.jpeg', alt: 'Atelier culinaire', aspect: 'wide' },
  { src: '/assets/photo-9.jpeg', alt: 'Batch cooking', aspect: 'square' },
  { src: '/assets/photo-11.jpeg', alt: 'Service maison', aspect: 'tall' },
  { src: '/assets/photo-12.jpeg', alt: 'Dressage soigné', aspect: 'wide' },
  { src: '/assets/photo-5.jpeg', alt: 'Assistance culinaire', aspect: 'square' },
]

export function GallerySection() {
  return (
    <section className="relative bg-cream overflow-hidden">
      {/* ─── Marquee mots-clés ────────────────────────────────────────── */}
      <div className="border-y border-navy/8 py-10 md:py-14 bg-cream-soft overflow-hidden">
        <div className="flex gap-12 md:gap-16 animate-marquee whitespace-nowrap">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-16 shrink-0">
              <span
                className="font-display text-navy italic"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1 }}
              >
                {word}
              </span>
              <span className="size-3 rounded-full bg-navy-mid shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* ─── Mosaïque ─────────────────────────────────────────────────── */}
      <div className="container-wide py-20 md:py-28">
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-5">
            <span className="size-6 h-px bg-navy-mid" />
            En cuisine, en image
            <span className="size-6 h-px bg-navy-mid" />
          </p>
          <h3
            className="font-display text-navy leading-tight text-balance"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            La maison Lab&apos;s Food,{' '}
            <em className="not-italic">
              <span className="font-display italic text-navy-mid">
                au quotidien.
              </span>
            </em>
          </h3>
        </div>

        {/* Grille mosaïque */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[240px]">
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl bg-navy group cursor-pointer ${item.aspect === 'tall'
                ? 'row-span-2'
                : item.aspect === 'wide'
                  ? 'col-span-2'
                  : ''
                }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-1000 ease-expo group-hover:scale-110"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
