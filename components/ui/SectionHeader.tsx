import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: React.ReactNode
  lede?: React.ReactNode
  align?: 'left' | 'center'
  invert?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = 'left',
  invert = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 max-w-3xl',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'eyebrow',
            invert ? 'text-terra-soft' : 'text-terra',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'display-md text-balance',
          invert ? 'text-cream' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            'lede text-pretty',
            invert ? 'text-cream/75' : 'text-ink/75',
          )}
        >
          {lede}
        </p>
      )}
    </div>
  )
}
