import type { Metadata, Viewport } from 'next'
import { Montserrat, DM_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
// import { CookieConsent } from '@/components/ui/CookieConsent'

// ── Fraunces — police display (fichiers locaux, variable font) ───────────────
// display: 'block' → le texte reste invisible jusqu'au chargement de Fraunces,
// éliminant le flash de police (FOUT) très visible sur une police display.
const fraunces = localFont({
  src: [
    {
      path: '../public/fraunces-font-family/Fraunces-VariableFont_SOFTWONKopszwght.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../public/fraunces-font-family/Fraunces-Italic-VariableFont_SOFTWONKopszwght.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
  variable: '--font-fraunces',
  display: 'block',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

// ── Montserrat — police corps (auto-hébergée via next/font/google) ────────────
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
})

// ── DM Mono — police labels / références ─────────────────────────────────────
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://labsfood.fr'),
  title: {
    default: "Lab's Food — Ateliers, batch cooking & produits artisanaux",
    template: "%s · Lab's Food",
  },
  description:
    "Lab's Food, fondé par Ivy : ateliers de cuisine du monde à domicile, batch cooking sur-mesure et le Kossam — boisson lactée fermentée d'inspiration camerounaise.",
  applicationName: "Lab's Food",
  keywords: [
    "atelier culinaire",
    "batch cooking",
    'kossam',
    'boisson lactée fermentée',
    'chef à domicile',
    'cuisine du monde',
    "Lab's Food",
    "Côte d'Azur",
    'cuisine africaine',
    'Nice',
    'Cannes',
  ],
  authors: [{ name: "Lab's Food" }],
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: "Lab's Food — We create what you love!",
    description:
      "Batch cooking, Assistance culinaire, Ateliers de cuisine & Kossam",
    type: 'website',
    locale: 'fr_FR',
    siteName: "Lab's Food",
    images: [
      {
        url: '/logoLab.png',
        width: 1200,
        height: 630,
        alt: "Lab's Food — We create what you love!",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lab's Food — We create what you love!",
    description:
      "Ateliers de cuisine du monde, batch cooking sur-mesure et le Kossam.",
    images: ['/logoLab.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  formatDetection: { telephone: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00234B' },
    { media: '(prefers-color-scheme: dark)', color: '#2C3E50' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${montserrat.variable} `}
    >
      <body className="bg-cream text-ink font-sans antialiased">
        {/* <AnnouncementBar /> */}
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <CookieConsent /> */}
      </body>
    </html>
  )
}
