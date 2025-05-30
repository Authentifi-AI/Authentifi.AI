"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Footer } from "@/components/layout/footer"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useAuthStore } from "@/lib/auth-store";
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"







export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()

  //get the current user state
  const user = useAuthStore((state: any) => state.user);

  useEffect(() => {
    //user is not logged in so redirect to login page
    if (!user) {
      toast({
        title: "Login",
        description: "Please login first before proceeding to the dashboard.",
      })
      router.push("/login")
    }
  }, [user, router, toast]);


  // Auto-collapse sidebar when viewing project pages
  useEffect(() => {
    if (pathname.includes("/dashboard/projects/")) {
      setSidebarCollapsed(true)
    }
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="container flex-1 items-start flex relative">
        {/* Sidebar with toggle button */}
        <div className="relative">
          <aside
            className={`transition-all duration-300 ease-in-out ${sidebarCollapsed ? "w-0 overflow-hidden opacity-0" : "w-[240px] opacity-100"
              } sticky top-14 z-30 h-[calc(100vh-3.5rem)] shrink-0 md:sticky`}
          >
            <DashboardNav />
          </aside>

          {/* Toggle button positioned at the edge of the sidebar */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute top-4 h-8 w-8 rounded-full border-primary/20 bg-background shadow-md z-40 transition-all duration-300 ${sidebarCollapsed ? "left-2" : "right-[-16px]"
              }`}
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Main content */}
        <main
          className={`flex w-full flex-col overflow-visible transition-all duration-300 ease-in-out ${sidebarCollapsed ? "ml-4" : "ml-6"
            }`}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
