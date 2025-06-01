"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock, Brain, ArrowRight } from "lucide-react"
import { Logo } from "@/components/layout/logo"
import { VideoPlayer } from "@/components/ui/video-player"
import { scrollToSection } from "@/lib/scroll-utils"

export function HeroSection() {
  const handleEarlyAccessClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToSection("early-access")
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24 authentifi-gradient-bg text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-6 max-w-xl mx-auto lg:mx-0">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Logo size="sm" showText={false} />
                <span className="text-sm font-medium text-white">AI Authorship Verification</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Authentifi AI</h1>
              <p className="text-white/80 text-lg md:text-xl max-w-[600px]">
                Use Authentifi AI to create your work, record your progress, and publish with confidence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="w-full min-[400px]:w-auto authentifi-button">
                  Get Started
                </Button>
              </Link>
              <a href="#early-access" onClick={handleEarlyAccessClick}>
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full min-[400px]:w-auto border border-white/40 text-white hover:bg-white/15 hover:border-white/60 bg-transparent backdrop-blur-sm"
                >
                  Get Early Access
                </Button>
              </a>
            </div>

            {/* Added more space before the feature list */}
            <div className="pt-6 md:pt-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-white/10 p-1">
                    <Lock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Secure Authentication</h3>
                    <p className="text-sm text-white/70">Multi-factor protection for your digital identity</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-white/10 p-1">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">AI-Powered Analysis</h3>
                    <p className="text-sm text-white/70">Advanced insights from your research data</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-white/10 p-1">
                    <Logo size="sm" showText={false} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Privacy Protection</h3>
                    <p className="text-sm text-white/70">Your data remains private and secure</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-white/10 p-1">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-medium">Semantic Search</h3>
                    <p className="text-sm text-white/70">Find exactly what you need, faster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Video player */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] h-auto rounded-lg overflow-hidden bg-purple-700/50 backdrop-blur-sm shadow-lg">
              <div className="p-4 md:p-6">
                <div className="authentifi-card rounded-lg shadow-lg p-4 md:p-5">
                  <div className="space-y-2 mb-3">
                    <h3 className="text-lg font-bold flex items-center justify-center">
                      See how it works <ArrowRight className="ml-2 h-4 w-4" />
                    </h3>
                    <p className="text-white/80 text-sm text-center">Meet Alice, our student...</p>
                  </div>

                  <VideoPlayer
                    src="https://authentifi.ai/HeroLandingPageVideo.mp4"
                    poster="/placeholder.svg?height=720&width=1280"
                    className="w-full rounded-md overflow-hidden aspect-video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
