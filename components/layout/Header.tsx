'use client'

import { useEffect, useState, type ElementType } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Menu, X, ArrowUpRight, ChevronDown,
  CalendarCheck, Receipt, Milk, Package,
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { cn, whatsappLink } from '@/lib/utils'

type NavChild = {
  label: string
  href: string
  icon: ElementType
  desc: string
}

type NavItem = {
  label: string
  href: string
  children?: NavChild[]
}

const NAV: NavItem[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Batch cooking',
    href: '/services/batch-cooking',
    children: [
      {
        label: 'Le service',
        href: '/services/batch-cooking',
        icon: CalendarCheck,
        desc: 'Une semaine de repas, cuisinée chez vous',
      },
      {
        label: 'Les formules',
        href: '/services/batch-cooking#formules',
        icon: Receipt,
        desc: 'À partir de 25€, crédit d’impôt déduit',
      },
    ],
  },
  { label: 'Menu du mois', href: '/menu' },
  {
    label: 'Produits',
    href: '/produits',
    children: [
      {
        label: 'Kossam',
        href: '/produits/kossam',
        icon: Milk,
        desc: 'Boisson lactée fermentée',
      },
      {
        label: 'Köni',
        href: '/produits/koni',
        icon: Package,
        desc: 'Marinade, expédiée en Europe',
      },
    ],
  },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => { setOpen(false); setMobileExpanded(null) }, [pathname])

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
          {/* ─── Logo ─── */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <span className="relative transition-transform duration-500 ease-expo group-hover:rotate-[6deg]">
              <Image
                src={scrolled ? '/mainLogo.png' : '/whiteLogo.png'}
                alt="Lab's Food"
                width={200}
                height={200}
                priority
              />
            </span>
          </Link>

          {/* ─── Nav desktop ─── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {NAV.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors duration-300 group/link',
                      scrolled
                        ? active ? 'text-navy' : 'text-navy/65 hover:text-navy'
                        : active ? 'text-cream' : 'text-cream/75 hover:text-cream',
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
              }

              return (
                <div key={item.href} className="relative group/dropdown">
                  {/* Trigger — cliquable vers la page parent */}
                  <Link
                    href={item.href}
                    className={cn(
                      'relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors duration-300',
                      scrolled
                        ? active ? 'text-navy' : 'text-navy/65 hover:text-navy'
                        : active ? 'text-cream' : 'text-cream/75 hover:text-cream',
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform duration-300 ease-out group-hover/dropdown:rotate-180',
                        scrolled ? 'text-navy/40' : 'text-cream/50',
                      )}
                    />
                    <span
                      className={cn(
                        'absolute left-4 right-6 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-500 ease-expo group-hover/dropdown:scale-x-100',
                        scrolled ? 'bg-navy-mid' : 'bg-cream',
                        active && 'scale-x-100',
                      )}
                    />
                  </Link>

                  {/* ── Dropdown card ── */}
                  <div
                    className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64',
                      'rounded-2xl bg-white border border-slate-100',
                      'shadow-[0_20px_60px_-8px_rgba(0,35,75,0.14),0_4px_16px_-4px_rgba(0,35,75,0.07)]',
                      /* entrée */
                      'opacity-0 pointer-events-none -translate-y-1 scale-[0.97]',
                      'group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto group-hover/dropdown:translate-y-0 group-hover/dropdown:scale-100',
                      'transition-all duration-200 ease-out',
                      /* pont invisible entre le trigger et le panel pour éviter le gap */
                      'before:absolute before:-top-3 before:inset-x-0 before:h-3',
                    )}
                  >
                    {/* Notch */}
                    <span
                      aria-hidden
                      className="absolute -top-[5px] left-1/2 -translate-x-1/2 size-[10px] rotate-45 rounded-[2px] bg-white border-l border-t border-slate-100"
                    />

                    {/* Items */}
                    <div className="p-2">
                      {item.children.map((child) => {
                        const Icon = child.icon
                        const childActive = pathname?.startsWith(child.href)
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group/item flex items-center gap-3 p-3 rounded-xl transition-colors duration-150 hover:bg-slate-50"
                          >
                            <div
                              className={cn(
                                'size-9 rounded-lg grid place-items-center shrink-0 transition-colors duration-150',
                                childActive
                                  ? 'bg-navy text-cream'
                                  : 'bg-slate-100 text-slate-400 group-hover/item:bg-navy/10 group-hover/item:text-navy',
                              )}
                            >
                              <Icon className="size-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className={cn(
                                  'text-sm font-semibold leading-tight',
                                  childActive ? 'text-navy' : 'text-slate-700 group-hover/item:text-navy',
                                )}
                              >
                                {child.label}
                              </p>
                              <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                                {child.desc}
                              </p>
                            </div>
                            <ArrowUpRight
                              className="size-3.5 text-slate-300 shrink-0 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150"
                            />
                          </Link>
                        )
                      })}
                    </div>

                    {/* Footer */}
                    <div className="mx-2 mb-2 pt-1.5 border-t border-slate-100">
                      <Link
                        href={item.href}
                        className="group/footer flex items-center justify-between px-3 py-2 rounded-lg text-[11px] font-medium text-slate-500 hover:text-navy hover:bg-slate-50 transition-colors duration-150"
                      >
                        <span>Voir tout — {item.label}</span>
                        <ArrowUpRight className="size-3 opacity-0 group-hover/footer:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                  </div>
                </div>
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
      </header>

      {/* ─── Drawer mobile ─── */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-40 bg-navy text-cream transition-all duration-500 ease-expo',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="container-wide pt-32 pb-12 h-full flex flex-col overflow-y-auto">
          <nav className="flex-1 flex flex-col" aria-label="Menu mobile">
            {NAV.map((item, i) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
              const isExpanded = mobileExpanded === item.href

              return (
                <div key={item.href}>
                  <div
                    className={cn(
                      'flex items-center gap-5 py-5 border-b border-cream/10 transition-all duration-500',
                      open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                    )}
                    style={{ transitionDelay: open ? `${i * 70}ms` : '0ms' }}
                  >
                    <span className="font-mono text-[0.7rem] tabular-nums text-cream/30 self-start mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Link
                      href={item.href}
                      className={cn(
                        'font-display text-4xl transition-colors flex-1',
                        active ? 'text-cream' : 'text-cream/70 hover:text-cream',
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <button
                        aria-label={isExpanded ? 'Réduire' : 'Développer'}
                        onClick={() => setMobileExpanded(isExpanded ? null : item.href)}
                        className="self-center size-8 rounded-full border border-cream/20 grid place-items-center shrink-0"
                      >
                        <ChevronDown
                          className={cn(
                            'size-4 text-cream/50 transition-transform duration-300',
                            isExpanded && 'rotate-180',
                          )}
                        />
                      </button>
                    ) : active ? (
                      <span className="ml-auto size-2 rounded-full bg-navy-mid self-center shrink-0" />
                    ) : null}
                  </div>

                  {/* Sous-menu mobile avec icones */}
                  {item.children && (
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300 ease-out',
                        isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
                      )}
                    >
                      <div className="py-2 pl-12 pr-2 space-y-1">
                        {item.children.map((child) => {
                          const Icon = child.icon
                          const childActive = pathname?.startsWith(child.href)
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'group/mitem flex items-center gap-3 px-3 py-3 rounded-xl transition-colors',
                                childActive ? 'bg-cream/10' : 'hover:bg-cream/5',
                              )}
                            >
                              <div
                                className={cn(
                                  'size-8 rounded-lg grid place-items-center shrink-0',
                                  childActive ? 'bg-cream/20 text-cream' : 'bg-cream/10 text-cream/50',
                                )}
                              >
                                <Icon className="size-3.5" />
                              </div>
                              <div>
                                <p
                                  className={cn(
                                    'text-sm font-semibold leading-tight',
                                    childActive ? 'text-cream' : 'text-cream/70',
                                  )}
                                >
                                  {child.label}
                                </p>
                                <p className="text-[11px] text-cream/35 mt-0.5">{child.desc}</p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
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
      </div>
    </>
  )
}
