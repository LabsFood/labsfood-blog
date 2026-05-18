import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Music2, Mail, Phone } from 'lucide-react'
import { SITE } from '@/lib/content'
import { WHATSAPP_NUMBER_DISPLAY, whatsappLink } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="relative bg-navy text-cream/80 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-terra/40 to-transparent" />

      <div className="container-wide relative pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="size-10 rounded-full bg-cream grid place-items-center">
                <Image
                  src="/logo.png"
                  alt="Lab's Food"
                  width={26}
                  height={26}
                />
              </span>
              <span className="font-display text-2xl text-cream">
                Lab&apos;s Food
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/65">
              {SITE.description}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.instagram.com/labs_food"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="size-10 grid place-items-center rounded-full border border-cream/15 hover:bg-terra hover:border-terra transition-all"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://www.tiktok.com/@labs_food"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="size-10 grid place-items-center rounded-full border border-cream/15 hover:bg-terra hover:border-terra transition-all"
              >
                <Music2 className="size-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-terra-soft mb-5">
              Explorer
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/services/atelier-culinaire" className="hover:text-cream transition-colors">
                  Atelier culinaire
                </Link>
              </li>
              <li>
                <Link href="/services/batch-cooking" className="hover:text-cream transition-colors">
                  Batch cooking
                </Link>
              </li>
              <li>
                <Link href="/produits/kossam" className="hover:text-cream transition-colors">
                  Kossam
                </Link>
              </li>
              <li>
                <Link href="/devenir-chef" className="hover:text-cream transition-colors">
                  Devenir chef partenaire
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-terra-soft mb-5">
              Nous contacter
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-terra-soft" />
                <a
                  href={whatsappLink('Bonjour Lab\'s Food, ')}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  WhatsApp : {WHATSAPP_NUMBER_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-terra-soft" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-cream transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-cream/55">
              Service client 7j/7 • 24h/24 sur WhatsApp
              <br />
              <span className="text-terra-soft">Messages écrits uniquement</span> — pas de notes vocales
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Lab&apos;s Food — Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-terra" />
            Certifiée HACCP
          </p>
        </div>
      </div>
    </footer>
  )
}
