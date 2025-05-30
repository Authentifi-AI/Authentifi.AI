import type { LucideProps } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { Logo } from "@/components/layout/logo"

interface DynamicIconProps extends Omit<LucideProps, "ref"> {
  name: string
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  // Handle Logo as a special case
  if (name === "Logo") {
    return <Logo size="sm" showText={false} />
  }

  // @ts-ignore - Dynamic access to LucideIcons
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons]

  if (!IconComponent) {
    return <LucideIcons.HelpCircle {...props} />
  }

  return <IconComponent {...props} />
}
