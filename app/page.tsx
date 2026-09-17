import { HeroD } from '@/components/sections/HeroD'
import { IntroSection } from '@/components/sections/IntroSection'
import { BatchCookingSection } from '@/components/sections/BatchCookingSection'
import { MenuSection } from '@/components/sections/MenuSection'
import { FormulesSection } from '@/components/sections/FormulesSection'
import { AvanceImmediateSection } from '@/components/sections/AvanceImmediateSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaFinalSection } from '@/components/sections/CtaFinalSection'

/**
 * Accueil — refonte batch cooking (septembre 2026).
 *
 * Le site ne présente plus trois services mais un seul, expliqué de bout en
 * bout : ce que c'est, ce qu'on mange, ce que ça coûte, et pourquoi ça coûte
 * la moitié de ce qu'on croit. Les produits viennent ensuite.
 *
 *   1. HeroD                    Hero full-bleed
 *   2. IntroSection             Ivy + les valeurs de la maison
 *   3. BatchCookingSection      Le service : la définition puis le déroulé
 *   4. MenuSection              Le menu du mois
 *   5. FormulesSection          La grille tarifaire complète
 *   6. AvanceImmediateSection   Crédit d'impôt, avance immédiate, CESU
 *   7. ProductsSection          Kossam et marinade Köni
 *   8. GallerySection           Marquee + mosaïque photos
 *   9. TestimonialsSection      Avis clients
 *  10. CtaFinalSection          CTA WhatsApp full-bleed
 */
export default function HomePage() {
  return (
    <>
      <HeroD />
      <IntroSection />
      <BatchCookingSection />
      <MenuSection />
      <FormulesSection />
      <AvanceImmediateSection />
      <ProductsSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaFinalSection />
    </>
  )
}
