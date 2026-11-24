import { NextResponse, type NextRequest } from 'next/server'

/* ─────────────────────────────────────────────────────────────────────────────
   Le site en travaux.

   Tant que `MAINTENANCE` vaut `true`, toute page renvoie vers `/bientot`. Les
   pages ne sont pas supprimées : elles dorment derrière, et repasser cette
   constante à `false` rallume le site entier. Rien d'autre à toucher.

   Trois exceptions, et chacune a sa raison :

   - les **pages légales** restent accessibles. Mentions légales, CGU,
     confidentialité : ce sont des obligations, elles ne se mettent pas en
     travaux ;
   - les **routes d'API** continuent de répondre, sans quoi un formulaire resté
     ouvert dans un onglet échouerait silencieusement ;
   - les **fichiers** — images, polices, manifeste — passent toujours, sinon la
     page d'attente elle-même s'afficherait nue.

   La redirection est temporaire (307) et non indexable : un moteur de
   recherche ne doit pas remplacer les pages du site par celle-ci dans son
   index, ni les considérer comme déplacées pour de bon.
   ───────────────────────────────────────────────────────────────────────────── */

const MAINTENANCE = true

/** La page d'attente elle-même, et ce qui doit rester joignable. */
const TOUJOURS_OUVERT = [
  '/bientot',
  '/mentions-legales',
  '/cgu',
  '/confidentialite',
  '/api',
]

export function middleware(request: NextRequest) {
  if (!MAINTENANCE) return NextResponse.next()

  const { pathname } = request.nextUrl
  if (TOUJOURS_OUVERT.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.next()
  }

  const vers = request.nextUrl.clone()
  vers.pathname = '/bientot'
  vers.search = ''
  return NextResponse.redirect(vers, 307)
}

export const config = {
  /*
   * Tout, sauf ce que Next sert lui-même et les fichiers du dossier public.
   * Le dernier terme écarte les requêtes qui portent une extension : une image
   * ou une police n'a rien à faire dans une page d'attente.
   */
  matcher: ['/((?!_next/static|_next/image|favicon.png|.*\\.[^/]+$).*)'],
}
