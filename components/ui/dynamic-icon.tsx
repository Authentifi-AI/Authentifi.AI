import type { LucideProps } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { Logo } from "@/components/layout/logo"

interface DynamicIconProps extends Omit<LucideProps, "ref"> {
  name: string
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  // @ts-ignore - Dynamic access to LucideIcons
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons]

  if (!IconComponent) {
    // Fallback to Logo component if icon not found
    if (name === "Logo") {
      return <Logo size="sm" showText={false} />
    }
    return <LucideIcons.HelpCircle {...props} />
  }

  return <IconComponent {...props} />
}
