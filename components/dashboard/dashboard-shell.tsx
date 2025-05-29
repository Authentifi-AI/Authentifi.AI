"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Navbar } from "@/components/layout/navbar"

interface DashboardShellProps {
  children: React.ReactNode
  className?: string
}

export function DashboardShell({ children, className }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            {/* Sidebar navigation can be added here */}
            <nav className="grid items-start gap-2">
              <div className="text-sm font-medium text-muted-foreground">Dashboard</div>
            </nav>
          </div>
        </aside>
        <main className={cn("flex w-full flex-col overflow-hidden", className)}>{children}</main>
      </div>
    </div>
  )
}
