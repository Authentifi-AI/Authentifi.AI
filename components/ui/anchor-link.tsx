"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { scrollToSection } from "@/lib/scroll-utils"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnchorLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function AnchorLink({ href, children, className, variant = "default", size = "default" }: AnchorLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (href.startsWith("/#")) {
      // It's an anchor link on the current page
      const id = href.substring(2)
      scrollToSection(id)
    } else if (href.startsWith("#")) {
      // It's an anchor link on the current page
      const id = href.substring(1)
      scrollToSection(id)
    } else {
      // It's a regular link
      router.push(href)
    }
  }

  return (
    <Button variant={variant} size={size} className={cn(className)} onClick={handleClick}>
      {children}
    </Button>
  )
}
