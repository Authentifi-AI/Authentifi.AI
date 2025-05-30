import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/layout/logo"
import { FeatureCard } from "@/components/ui/feature-card"
import { featureConfig } from "@/lib/config"

export function FeatureSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 authentifi-gradient-bg text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* Added px-3 to ensure padding on mobile */}
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 text-sm text-white font-medium mx-auto">
              <Logo size="sm" showText={false} />
              <span>Key Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight px-2">
              Everything you need for advanced research
            </h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed px-2 mx-auto">
              Our platform combines powerful AI with intuitive tools to help you organize, analyze, and discover
              insights in your research.
            </p>
          </div>
        </div>
        {/* Added px-2 for mobile padding */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 px-2">
          {featureConfig.items.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              href={feature.href || undefined}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 px-4">
          <Link href="/login">
            <Button size="lg" className="authentifi-button w-full sm:w-auto">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
