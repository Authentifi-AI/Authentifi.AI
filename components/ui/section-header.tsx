import type React from "react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
  children?: React.ReactNode
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = "center",
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className,
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 text-sm text-white font-medium mx-auto">
          <Logo size="sm" showText={false} />
          <span>{badge}</span>
        </div>
      )}
      <div className="space-y-2 px-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{title}</h2>
        {description && (
          <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  )
}
