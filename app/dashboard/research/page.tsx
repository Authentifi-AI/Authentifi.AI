import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ResearchTool } from "@/components/dashboard/research-tool"

export const metadata: Metadata = {
  title: "Research Tools - AuthentifiAI",
  description: "AI-powered research tools and analysis",
}

export default function ResearchPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-8 py-8">
        <h1 className="text-3xl font-bold">Research Tools</h1>
        <ResearchTool />
      </div>
    </DashboardShell>
  )
}
