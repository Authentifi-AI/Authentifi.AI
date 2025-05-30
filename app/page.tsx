import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { FeatureSection } from "@/components/sections/feature-section"
import { EarlyAccessSection } from "@/components/sections/early-access-section"
import { AuthentifiFeatures } from "@/components/sections/authentifi-features"

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AuthentifiFeatures />
      <EarlyAccessSection />
      <FeatureSection />
    </MainLayout>
  )
}
