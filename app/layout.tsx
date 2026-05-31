import type { Metadata, Viewport } from 'next'
import { Montserrat, DM_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { SplashScreen } from '@/components/layout/SplashScreen'

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
    "Lab's Food, fondé par Ivy, propose ateliers de cuisine du monde à domicile, batch cooking sur-mesure et produits artisanaux comme le Kossam.",
  applicationName: "Lab's Food",
  keywords: [
    "atelier culinaire",
    "batch cooking",
    'kossam',
    'chef à domicile',
    'cuisine du monde',
    "Lab's Food",
    "Côte d'Azur",
  ],
  authors: [{ name: "Lab's Food" }],
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: "Lab's Food — We create what you love!",
    description:
      'Ateliers, batch cooking & produits artisanaux.',
    type: 'website',
    locale: 'fr_FR',
    siteName: "Lab's Food",
  },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F6F7' },
    { media: '(prefers-color-scheme: dark)', color: '#00234B' },
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
        <SplashScreen />
        {/* <AnnouncementBar /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
