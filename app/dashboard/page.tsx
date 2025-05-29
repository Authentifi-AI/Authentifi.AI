import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ResearchOverview } from "@/components/dashboard/research-overview"
import { RecentProjects } from "@/components/dashboard/recent-projects"

// Add this line to make the page dynamic instead of static
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Dashboard - AuthentifiAI",
  description: "Manage your research projects and access AI tools",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-8 py-8">
        <ResearchOverview />
        <div className="grid gap-8">
          <RecentProjects />
        </div>
      </div>
    </DashboardShell>
  )
}
