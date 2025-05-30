import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AIAssistant } from "@/components/dashboard/ai-assistant"

export const metadata: Metadata = {
  title: "Research Workspace - AuthentifiAI",
  description: "AI-powered research workspace for your projects",
}

export default function ResearchWorkspacePage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-8 py-8">
        <h1 className="text-3xl font-bold">Research Workspace</h1>
        <p className="text-muted-foreground">
          Use our AI-powered research assistant to help with your research projects.
        </p>
        <AIAssistant className="w-full" />
      </div>
    </DashboardShell>
  )
}
