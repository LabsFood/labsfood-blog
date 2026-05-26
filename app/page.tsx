import { HeroD } from '@/components/sections/HeroD'
import { IntroSection } from '@/components/sections/IntroSection'
import { ShowcaseSection } from '@/components/sections/ShowcaseSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaFinalSection } from '@/components/sections/CtaFinalSection'
import { ProductsSection } from '@/components/sections/ProductsSection'

/**
 * Home — Redesign benchland-inspired
 *
 * Architecture :
 *   1. HeroD             Hero full-bleed avec image + crown + h1 italic
 *   2. IntroSection      Bienvenue (photo Ivy + texte) + 4 valeurs
 *   3. ShowcaseSection   3 services en lignes éditoriales alternées (navy)
 *   4. ProductsSection   Kossam + bientôt (mis à jour précédemment)
 *   5. GallerySection    Marquee mots + mosaïque photos
 *   6. TestimonialsSection  Carrousel témoignages éditorial
 *   7. CtaFinalSection   CTA WhatsApp full-bleed
 */
export default function HomePage() {
  return (
    <>
      <HeroD />
      <IntroSection />
      <ShowcaseSection />
      <ProductsSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaFinalSection />
    </>
  )
}
