import { EarlyAccessFormSimple } from "@/components/forms/early-access-form-simple"
import { Sparkles } from "lucide-react"
import { Logo } from "@/components/layout/logo"

export function EarlyAccessSection() {
  return (
    <section id="early-access" className="w-full py-16 md:py-24 lg:py-32 authentifi-gradient-bg text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Logo size="lg" showText={false} />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sign up early for free</h2>
          <p className="text-white/80 md:text-xl max-w-[800px] mx-auto mt-4">
            We're onboarding early researchers, professors, and institutions. Submit your details below and be the first
            to experience our research assistant.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center max-w-5xl mx-auto">
          {/* Fixed alignment issues for mobile */}
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 text-sm text-white font-medium mx-auto lg:mx-0">
              <Logo size="sm" showText={false} />
              <span>Limited Spots Available</span>
            </div>
            <h3 className="text-2xl font-bold">Join Our Exclusive Beta</h3>
            <p className="text-white/80 mx-auto lg:mx-0 max-w-[500px] lg:max-w-none">
              AuthentifiAI combines secure identity verification with powerful AI research tools. Our early access
              program gives you:
            </p>
            <ul className="space-y-2 mx-auto lg:mx-0 max-w-[500px] lg:max-w-none">
              <li className="flex items-start gap-2 justify-center lg:justify-start">
                <div className="rounded-full bg-white/10 p-1 mt-0.5">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span>Priority access to all new features</span>
              </li>
              <li className="flex items-start gap-2 justify-center lg:justify-start">
                <div className="rounded-full bg-white/10 p-1 mt-0.5">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span>Dedicated onboarding and support</span>
              </li>
              <li className="flex items-start gap-2 justify-center lg:justify-start">
                <div className="rounded-full bg-white/10 p-1 mt-0.5">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span>Influence future development</span>
              </li>
            </ul>
          </div>

          <div className="authentifi-card rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Request Early Access</h3>
            <EarlyAccessFormSimple />
          </div>
        </div>
      </div>
    </section>
  )
}
