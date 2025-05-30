import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSectionBackup() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center justify-center rounded-full bg-slate-800/80 px-6 py-2 text-sm font-medium text-cyan-400 backdrop-blur-sm">
            <span className="mr-2 rounded-full bg-cyan-500 px-2 py-1 text-xs font-semibold text-white">New</span>
            Introducing AuthentifiAI for Academic Research
          </div>
          <h1 className="mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Verify Authorship with AI-Powered Confidence
          </h1>
          <p className="mb-10 text-xl text-slate-300 sm:text-2xl">
            AuthentifiAI helps researchers and institutions verify document authorship with advanced AI, ensuring
            academic integrity and preventing fraud.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#early-access">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 text-lg font-semibold hover:from-cyan-600 hover:to-blue-700"
              >
                Get Early Access
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 bg-slate-800/50 px-8 py-6 text-lg font-semibold text-slate-200 backdrop-blur-sm hover:bg-slate-700/50 hover:text-white"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-slate-800/50 p-2 backdrop-blur-sm sm:p-4 md:mt-24">
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-slate-700 bg-slate-900 shadow-2xl">
            <div className="flex h-full items-center justify-center">
              <div className="px-4 py-16 text-center">
                <div className="mb-4 animate-pulse rounded-full bg-slate-700 p-4 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <p className="text-lg text-slate-400">Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
