import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: React.ReactNode
  lede?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
  /** Image de fond optionnelle — placée derrière l'overlay navy. */
  image?: string
  /** Position de l'image (default: center). */
  imagePosition?: string
}

export function PageHero({
  eyebrow,
  title,
  lede,
  align = 'left',
  className,
  image,
  imagePosition = 'center',
}: Props) {
  return (
    <section
      className={cn(
        'relative bg-navy text-cream overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28',
        className,
      )}
    >
      {/* Image de fond — optionnelle */}
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          style={{ objectPosition: imagePosition }}
          sizes="100vw"
        />
      )}

      {/* Calques de surimpression */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/85 to-navy/55" />
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />

      {/* Filets */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-terra/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-terra/20 to-transparent" />

      <div className="container-wide relative">
        <div
          className={cn(
            'max-w-4xl',
            align === 'center' && 'mx-auto text-center',
          )}
        >
          {eyebrow && (
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-terra-soft inline-flex items-center gap-3">
              <span className="size-6 h-px bg-terra-soft" />
              {eyebrow}
            </span>
          )}
          <h1 className="display-lg text-cream mt-6 text-balance">{title}</h1>
          {lede && (
            <p className="lede mt-6 text-cream/70 text-pretty">{lede}</p>
          )}
        </div>
      </div>
    </section>
  )
}
