import { HeroA } from '@/components/sections/HeroA'
// import { HeroB } from '@/components/sections/HeroB'
// import { HeroC } from '@/components/sections/HeroC'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { FounderSection } from '@/components/sections/FounderSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { CtaSection } from '@/components/sections/CtaSection'

// ── Hero à utiliser ──────────────────────────────────────────────────────────
// 3 variantes disponibles :
//   HeroA — cinématique vidéo plein écran
//   HeroB — split asymétrique éditorial
//   HeroC — triptyque magazine
// Décommenter celui que tu veux essayer ↑.

export default function HomePage() {
  return (
    <>
      <HeroA />
      {/* <HeroB /> */}
      {/* <HeroC /> */}

      <ServicesSection />
      <ProductsSection />
      <FounderSection />
      <ReviewsSection />
      <CtaSection />
    </>
  )
}
