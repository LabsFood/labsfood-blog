'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function AnnouncementBar() {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('lf:announce-dismissed')
    if (dismissed) setOpen(false)
  }, [])

  function close() {
    sessionStorage.setItem('lf:announce-dismissed', '1')
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="relative bg-navy-mid text-cream">
      <div className="container-wide flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-medium">
        <span className="hidden sm:inline">🌿</span>
        <span>
          Nouveau —{' '}
          <Link href="/produits" className="underline underline-offset-2 hover:no-underline">
            Luxury Kossam & marinade verte BIO arrivent bientôt
          </Link>
        </span>
        <button
          aria-label="Fermer"
          onClick={close}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  )
}
