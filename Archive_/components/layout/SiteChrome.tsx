'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

/* ─────────────────────────────────────────────────────────────────────────────
   L'habillage du site, sauf là où il n'a rien à faire.

   La page d'attente `/bientot` se suffit à elle-même : lui poser l'en-tête et
   le pied de page reviendrait à afficher la navigation d'un site qu'on vient
   d'annoncer fermé, avec des liens qui tous ramènent ici.

   L'en-tête et le pied de page arrivent **en props**, pas en imports : passés
   depuis le layout serveur, ils restent rendus côté serveur. Seul ce
   composant-ci est client, et il ne décide que d'une chose — les montrer ou
   non.
   ───────────────────────────────────────────────────────────────────────────── */

/** Les routes qui s'affichent nues. */
const SANS_HABILLAGE = ['/bientot']

export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode
  footer: ReactNode
  children: ReactNode
}) {
  const pathname = usePathname()

  if (SANS_HABILLAGE.includes(pathname)) return <>{children}</>

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  )
}
