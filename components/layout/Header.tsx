'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react'
import { cn, whatsappLink } from '@/lib/utils'

const NAV = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  // { label: 'Services', href: '/services' },
  { label: 'Produits', href: '/produits' },
  // { label: 'Devenir chef', href: '/devenir-chef' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
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
          ? 'bg-cream/95 border-b border-navy/10 shadow-[0_1px_0_rgba(0,35,75,0.04)]'
          : 'bg-transparent',
      )}
    >
      <div className="container-wide flex items-center justify-between h-20">
        {/* ─── Identité ─── */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative  rounded-full grid place-items-center overflow-hidden transition-transform duration-500 ease-expo group-hover:rotate-[8deg]">
            <Image
              src="/mainLogo.png"
              alt=""
              width={150}
              height={150}
              priority
            />
          </span>
          {/* <span className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] tracking-tight text-navy">
              Lab&apos;s Food
            </span>
          </span> */}
        </Link>

        {/* ─── Nav centrale (desktop) ─── */}
        <nav className="hidden lg:flex items-center" aria-label="Navigation principale">
          {NAV.map((item, i) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(item.href)
            return (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 text-md transition-colors duration-300',
                    active
                      ? 'text-navy font-medium'
                      : 'text-navy/70 hover:text-navy',
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 size-1 rounded-full bg-navy-mid" />
                  )}
                </Link>
                {i < NAV.length - 1 && (
                  <span
                    className="size-1 rounded-full bg-navy/15"
                    aria-hidden
                  />
                )}
              </div>
            )
          })}
        </nav>

        {/* ─── Actions droite ─── */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={whatsappLink("Bonjour Lab's Food, ")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-md font-medium text-navy/75 hover:text-whatsapp-deep transition-colors group"
          >
            {/* <span className="relative grid place-items-center size-5">
              <span className="absolute inset-0 rounded-full bg-whatsapp/30 animate-ping" />
              <span className="relative size-1.5 rounded-full bg-whatsapp" />
            </span> */}
            <span className="hidden xl:inline">Service client whatsapp · 7j/7</span>
          </a>

          <span className="h-5 w-px bg-navy/15" aria-hidden />

          {/* <Link
            href="/produits/kossam"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-cream text-xs font-medium tracking-wide hover:bg-navy-mid transition-colors duration-500"
          >
            Commander Kossam
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:rotate-45" />
          </Link> */}
        </div>

        {/* ─── Burger mobile ─── */}
        <button
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="lg:hidden size-10 grid place-items-center rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-cream transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* ─── Drawer mobile ─── */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-20 bottom-0 bg-cream transition-all duration-500 ease-expo',
          open
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2',
        )}
      >
        <div className="container-wide flex flex-col py-8">
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
                  'group flex items-baseline gap-5 py-5 border-b border-navy/10 transition-colors',
                  active ? 'text-navy-mid' : 'text-navy',
                )}
              >
                <span className="font-mono text-[0.65rem] tabular-nums text-navy/35">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-3xl">{item.label}</span>
                {active && (
                  <span className="ml-auto size-1.5 rounded-full bg-navy-mid self-center" />
                )}
              </Link>
            )
          })}

          <div className="mt-10 grid grid-cols-2 gap-3">
            <a
              href={whatsappLink("Bonjour Lab's Food, ")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-whatsapp text-white text-xs font-medium"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp
            </a>
            <Link
              href="/produits/kossam"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-navy text-cream text-xs font-medium"
            >
              Commander
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
