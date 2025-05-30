import type React from "react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
  hideFooter?: boolean
}

export function PageLayout({ children, hideFooter = false }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  )
}
