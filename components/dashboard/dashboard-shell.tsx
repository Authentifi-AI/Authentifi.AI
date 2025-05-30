import type React from "react"

interface DashboardShellProps {
  children: React.ReactNode
  className?: string
}

export function DashboardShell({ children, className }: DashboardShellProps) {
  return <div className={`flex-1 space-y-4 p-4 pt-6 md:p-8 overflow-visible ${className}`}>{children}</div>
}
