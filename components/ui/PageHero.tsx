import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: React.ReactNode
  lede?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
  /** Image de fond optionnelle, placée derrière le scrim navy. */
  image?: string
  /** Position de l'image (default: center). */
  imagePosition?: string
  /** Hauteur du hero : default = 'md'. 'lg' pour les pages importantes. */
  size?: 'md' | 'lg'
}

/**
 * PageHero — Style éditorial benchland
 * Image full-bleed + scrim navy + kicker mono + h1 avec em italic
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  align = 'left',
  className,
  image,
  imagePosition = 'center',
  size = 'md',
}: Props) {
  return (
    <section
      className={cn(
        'relative bg-black text-cream overflow-hidden',
        size === 'lg'
          ? 'pt-40 pb-28 md:pt-56 md:pb-36'
          : 'pt-32 pb-20 md:pt-44 md:pb-28',
        className,
      )}
    >
      {/* Image de fond */}
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          quality={100}
          className="object-cover opacity-40"
          style={{ objectPosition: imagePosition }}
          sizes="100vw"
        />
      )}

      {/* Scrim navy multi-couches */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />

      {/* Filets décoratifs */}
      {/* <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-navy-mid/40 to-transparent" /> */}
      {/* <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-navy-mid/40 to-transparent" /> */}

      <div className="container-wide relative">
        <div
          className={cn(
            'max-w-4xl',
            align === 'center' && 'mx-auto text-center',
          )}
        >
          {eyebrow && (
            <p
              className={cn(
                'font-mono text-[0.7rem] uppercase tracking-[0.35em] text-white inline-flex items-center gap-3 mb-6',
              )}
            >
              <span className="size-6 h-px bg-navy-mid" />
              {eyebrow}
              {align === 'center' && <span className="size-6 h-px bg-navy-mid" />}
            </p>
          )}

          <h1
            className="font-display text-cream leading-[0.98] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
          >
            {title}
          </h1>

          {lede && (
            <p className="lede mt-8 text-cream/75 text-pretty max-w-2xl">
              {lede}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
