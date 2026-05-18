'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const NAV = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Produits', href: '/produits' },
  { label: 'Devenir chef', href: '/devenir-chef' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-expo',
        scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-navy/5'
          : 'bg-transparent',
      )}
    >
      <div className="container-wide flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative size-10 rounded-full bg-navy grid place-items-center overflow-hidden transition-transform duration-500 ease-expo group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Lab's Food"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-navy">
              Lab&apos;s Food
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-terra mt-0.5">
              Maison culinaire
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-sm font-medium text-navy/80 hover:text-navy transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/produits/kossam">Commander</Link>
          </Button>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden size-10 grid place-items-center rounded-full bg-navy text-cream"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-20 bottom-0 bg-cream transition-all duration-500 ease-expo',
          open
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4',
        )}
      >
        <div className="container-wide flex flex-col gap-2 py-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-navy py-3 border-b border-navy/10"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-8 w-full">
            <Link href="/produits/kossam" onClick={() => setOpen(false)}>
              Commander
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
