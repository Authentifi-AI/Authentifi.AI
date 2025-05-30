import Link from "next/link"
import { cn } from "@/lib/utils"
import { DynamicIcon } from "@/components/ui/dynamic-icon"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  href?: string | null
  className?: string
}

export function FeatureCard({ title, description, icon, href, className }: FeatureCardProps) {
  const CardContent = (
    <div
      className={cn(
        "flex flex-col items-center space-y-3 rounded-lg authentifi-card p-6 shadow-lg transition-all min-h-[200px] justify-center",
        href && "hover:shadow-xl",
        className,
      )}
    >
      <div className="rounded-full bg-white/10 p-3 group-hover:bg-white/20">
        <DynamicIcon name={icon} className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white text-center">{title}</h3>
      <p className="text-center text-white/80 text-sm leading-relaxed">{description}</p>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="group">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
