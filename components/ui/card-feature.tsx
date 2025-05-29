import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { DynamicIcon } from "@/components/ui/dynamic-icon"

interface CardFeatureProps {
  title: string
  description: string
  icon: string
  href?: string | null
  className?: string
}

export function CardFeature({ title, description, icon, href, className }: CardFeatureProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <Link href={href} className="group">
          {children}
        </Link>
      )
    }
    return <>{children}</>
  }

  return (
    <CardWrapper>
      <div
        className={cn(
          "flex flex-col items-center space-y-2 rounded-lg authentifi-card p-6 shadow-lg transition-all",
          href && "hover:shadow-xl",
          className,
        )}
      >
        <div className="rounded-full bg-white/10 p-3 group-hover:bg-white/20">
          <DynamicIcon name={icon} className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-center text-white/80">{description}</p>
      </div>
    </CardWrapper>
  )
}
