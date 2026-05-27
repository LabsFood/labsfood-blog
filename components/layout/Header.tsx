'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { cn, whatsappLink } from '@/lib/utils'

const NAV = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Produits', href: '/produits' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-expo',
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,35,75,0.06)] py-2'
            : 'bg-transparent py-4',
        )}
      >
        <div className="container-wide flex items-center justify-between gap-8">
          {/* ─── Logo (mainLogo bleu sur cream / whiteLogo blanc sur transparent) ─── */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <span className="relative transition-transform duration-500 ease-expo group-hover:rotate-[6deg]">
              <Image
                src={scrolled ? '/mainLogo.png' : '/whiteLogo.png'}
                alt="Lab's Food"
                width={200}
                height={200}
                // sizes="200px"
                // className="w-full"
                priority
              />
            </span>
          </Link>

          {/* ─── Nav desktop ─── */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Navigation principale"
          >
            {NAV.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-300 group/link',
                    scrolled
                      ? active
                        ? 'text-navy'
                        : 'text-navy/65 hover:text-navy'
                      : active
                        ? 'text-cream'
                        : 'text-cream/75 hover:text-cream',
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute left-4 right-4 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-500 ease-expo group-hover/link:scale-x-100',
                      scrolled ? 'bg-navy-mid' : 'bg-cream',
                      active && 'scale-x-100',
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          {/* ─── CTA droite (desktop) ─── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={whatsappLink("Bonjour Lab's Food, ")}
              target="_blank"
              rel="noreferrer"
              className={cn(
                'group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-medium transition-all duration-500',
                scrolled
                  ? 'bg-navy text-cream hover:bg-navy-mid'
                  : 'bg-cream/10 text-cream border border-cream/30 hover:bg-cream hover:text-navy backdrop-blur-sm',
              )}
            >
              Discuter
              <span className="size-8 rounded-full grid place-items-center bg-whatsapp text-white">
                <WhatsAppIcon className="size-3.5" />
              </span>
            </a>
          </div>

          {/* ─── Burger mobile ─── */}
          <button
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className={cn(
              'lg:hidden size-11 grid place-items-center rounded-full border transition-colors',
              scrolled
                ? 'border-navy/20 text-navy hover:bg-navy hover:text-cream'
                : 'border-cream/30 text-cream hover:bg-cream hover:text-navy',
            )}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header >

      {/* ─── Drawer mobile (full-screen navy) ─── */}
      < div
        className={
          cn(
            'lg:hidden fixed inset-0 z-40 bg-navy text-cream transition-all duration-500 ease-expo',
            open
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none',
          )
        }
      >
        <div className="container-wide pt-32 pb-12 h-full flex flex-col">
          <nav className="flex-1 flex flex-col" aria-label="Menu mobile">
            {NAV.map((item, i) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group flex items-baseline gap-5 py-5 border-b border-cream/10 transition-all duration-500',
                    open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                  )}
                  style={{ transitionDelay: open ? `${i * 70}ms` : '0ms' }}
                >
                  <span className="font-mono text-[0.7rem] tabular-nums text-cream/35">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'font-display text-4xl transition-colors',
                      active ? 'text-cream' : 'text-cream/70 group-hover:text-cream',
                    )}
                  >
                    {item.label}
                  </span>
                  {active && (
                    <span className="ml-auto size-2 rounded-full bg-navy-mid self-center" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="mt-10 flex flex-col gap-3">
            <a
              href={whatsappLink("Bonjour Lab's Food, ")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-whatsapp text-white text-sm font-medium"
            >
              <WhatsAppIcon className="size-4" />
              Discuter sur WhatsApp
              <ArrowUpRight className="size-4" />
            </a>
            <p className="text-center text-xs text-cream/45">
              Service client 7j/7 — Messages écrits uniquement
            </p>
          </div>
        </div>
      </ div>
    </>
  )
}
