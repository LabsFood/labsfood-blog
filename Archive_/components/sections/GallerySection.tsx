'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

/**
 * GALERIE — mosaïque éditoriale.
 *
 * Le bandeau de mots défilants a été retiré : il n'apportait aucune
 * information et le défilement perpétuel tirait l'œil hors des photos, qui
 * sont le vrai contenu de la section.
 */

const GALLERY = [
  { src: '/assets/gallerie/img1.jpeg', alt: 'Préparation maison', aspect: 'tall' },
  { src: '/assets/table.jpeg', alt: 'Batch cooking', aspect: 'wide' },
  { src: '/assets/gallerie/img2.jpeg', alt: 'Préparation en cuisine', aspect: 'square' },
  { src: '/assets/gallerie/img4.jpeg', alt: 'Service maison', aspect: 'tall' },
  { src: '/assets/photo-13.jpeg', alt: 'Dressage soigné', aspect: 'tall' },
  { src: '/assets/poissonn.jpeg', alt: 'Plat de poisson dressé', aspect: 'square' },
  { src: '/assets/photo-10.jpeg', alt: 'Plats préparés pour la semaine', aspect: 'square' },
  { src: '/assets/gallerie/bobolo.jpeg', alt: 'Bobolo fait maison', aspect: 'square' },
]

export function GallerySection() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="container-wide py-24 md:py-32">
        {/* En-tête */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12 md:mb-14">
          <h3
            className="lg:col-span-7 font-display text-navy leading-[0.98] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            La maison Lab&apos;s Food,{' '}
            <span className="font-display italic text-orange-deep">
              au quotidien.
            </span>
          </h3>
          <p className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-navy/10 text-ink/75 leading-relaxed max-w-[52ch]">
            Des photos prises en prestation, chez les clients, sans mise en
            scène. C&apos;est ce que vous retrouverez dans vos plats.
          </p>
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
