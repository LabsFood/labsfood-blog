import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ease-expo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-mid/40 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
  {
    variants: {
      variant: {
        primary:
          'bg-navy-mid text-cream hover:bg-navy-deep shadow-[0_8px_24px_-8px_rgba(44, 62, 80,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(44, 62, 80,0.7)] hover:-translate-y-0.5',
        secondary:
          'bg-navy text-cream hover:bg-navy-mid shadow-[0_8px_24px_-8px_rgba(0,35,75,0.6)] hover:-translate-y-0.5',
        ghost:
          'bg-transparent border border-navy/20 text-navy hover:bg-navy hover:text-cream hover:border-navy',
        outline:
          'bg-transparent border border-cream/40 text-cream hover:bg-cream hover:text-navy hover:border-cream',
        whatsapp:
          'bg-whatsapp text-white hover:bg-whatsapp-deep shadow-[0_8px_24px_-8px_rgba(37,211,102,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(37,211,102,0.75)] hover:-translate-y-0.5',
        link: 'text-navy-mid underline-offset-4 hover:underline px-0 py-0',
      },
      size: {
        sm: 'px-5 py-2.5 text-xs',
        md: 'px-7 py-3.5 text-sm',
        lg: 'px-9 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { buttonVariants }
