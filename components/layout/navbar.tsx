"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/layout/logo"
import { scrollToSection } from "@/lib/scroll-utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  // Handle hash links when the page loads
  useEffect(() => {
    // Check if there's a hash in the URL
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.substring(1)
      // Use setTimeout to ensure the DOM is fully loaded
      setTimeout(() => {
        scrollToSection(id)
      }, 0)
    }
  }, [pathname])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (pathname === "/") {
      // If we're on the home page, scroll to the section
      scrollToSection(id)
    } else {
      // If we're on another page, navigate to home and then scroll
      window.location.href = `/#${id}`
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full authentifi-nav text-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Home
          </Link>
          <a
            href="#features"
            onClick={(e) => handleAnchorClick(e, "features")}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              isActive("/features") ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Features
          </a>
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/pricing") ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="border border-white/40 text-white hover:bg-white/15 hover:border-white/60 bg-transparent"
            >
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="authentifi-button">
              Sign up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-white"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-secondary">
          <div className="container py-4 grid gap-4">
            <Link
              href="/"
              className={`px-2 py-1 text-sm font-medium rounded-md ${isActive("/") ? "bg-white/10 text-white" : "hover:bg-white/10 text-gray-300"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#features"
              onClick={(e) => handleAnchorClick(e, "features")}
              className={`px-2 py-1 text-sm font-medium rounded-md cursor-pointer ${
                isActive("/features") ? "bg-white/10 text-white" : "hover:bg-white/10 text-gray-300"
              }`}
            >
              Features
            </a>
            <Link
              href="/"
              className={`px-2 py-1 text-sm font-medium rounded-md ${
                isActive("/pricing") ? "bg-white/10 text-white" : "hover:bg-white/10 text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full border border-white/40 text-white hover:bg-white/15 hover:border-white/60 bg-transparent"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full authentifi-button">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
