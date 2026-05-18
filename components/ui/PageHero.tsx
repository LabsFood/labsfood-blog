import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: React.ReactNode
  lede?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function PageHero({ eyebrow, title, lede, align = 'left', className }: Props) {
  return (
    <section
      className={cn(
        'relative bg-navy text-cream overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28',
        className,
      )}
    >
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-terra/30 to-transparent" />

      <div className="container-wide relative">
        <div
          className={cn(
            'max-w-4xl',
            align === 'center' && 'mx-auto text-center',
          )}
        >
          {eyebrow && <span className="eyebrow text-terra-soft">{eyebrow}</span>}
          <h1 className="display-lg text-cream mt-6 text-balance">{title}</h1>
          {lede && <p className="lede mt-6 text-cream/70 text-pretty">{lede}</p>}
        </div>
      </div>
    </section>
  )
}
