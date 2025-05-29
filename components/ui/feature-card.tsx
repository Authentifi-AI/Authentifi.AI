import Link from "next/link"
import { cn } from "@/lib/utils"
import { DynamicIcon } from "@/components/ui/dynamic-icon"

interface FeatureCardProps {
  title: string
  description: string
  icon?: string
  href?: string
  className?: string
}

export function FeatureCard({ title, description, icon, href, className }: FeatureCardProps) {
  const CardWrapper = href ? Link : "div"
  const wrapperProps = href ? { href } : {}

  return (
    <CardWrapper
      {...wrapperProps}
      className={cn(
        "authentifi-card rounded-lg p-6 shadow-lg transition-all duration-200 hover:shadow-xl",
        href && "cursor-pointer",
        className,
      )}
    >
      {icon && (
        <div className="mb-4">
          <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
            <DynamicIcon name={icon} className="h-6 w-6 text-indigo-600" />
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardWrapper>
  )
}
