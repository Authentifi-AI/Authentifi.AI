"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { navigationConfig } from "@/lib/config"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface DashboardNavProps {
  mobile?: boolean
  onSelect?: () => void
}

export function DashboardNav({ mobile, onSelect }: DashboardNavProps = {}) {
  const pathname = usePathname()

  return (
    <TooltipProvider delayDuration={300}>
      <nav className={cn("flex flex-col gap-2 py-2", mobile && "px-2")}>
        {navigationConfig.dashboardNav.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "justify-start",
                  pathname === item.href
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "hover:bg-primary/5 hover:text-primary",
                )}
                asChild
                onClick={onSelect}
              >
                <Link href={item.href}>
                  <DynamicIcon name={item.icon} className="mr-2 h-4 w-4" />
                  <span className="truncate">{item.label}</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  )
}
