import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  fullscreen?: boolean
  label?: string
  className?: string
}

export function Loader({ fullscreen = false, label = 'Chargement', className }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-6',
        fullscreen && 'fixed inset-0 z-[60] bg-cream',
        !fullscreen && 'py-24',
        className,
      )}
      role="status"
      aria-live="polite"
    >
      {/* Disque tournant avec logo central */}
      <div className="relative size-24">
        <div className="absolute inset-0 rounded-full border-2 border-navy/10" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-navy-mid border-r-navy-mid animate-spin [animation-duration:1.2s]" />
        <div className="absolute inset-2 rounded-full grid place-items-center">
          <Image
            src="/logoLab.png"
            alt=""
            width={100}
            height={100}
            className="animate-float"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="font-display text-lg text-navy">Lab&apos;s Food</span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-navy-mid inline-flex items-center gap-1">
          {label}
          <span className="inline-flex gap-0.5">
            <span className="size-1 rounded-full bg-navy-mid animate-pulse [animation-delay:0ms]" />
            <span className="size-1 rounded-full bg-navy-mid animate-pulse [animation-delay:150ms]" />
            <span className="size-1 rounded-full bg-navy-mid animate-pulse [animation-delay:300ms]" />
          </span>
        </span>
      </div>
    </div>
  )
}
