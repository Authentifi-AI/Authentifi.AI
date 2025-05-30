import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ResearchWorkspace } from "@/components/dashboard/research-workspace"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Research Project - AuthentifiAI",
  description: "AI-powered research workspace for your project",
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the project details based on the ID
  const projectName = "Climate Change Research" // This would come from your database

  return (
    <DashboardShell>
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{projectName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="min-h-[calc(100vh-12rem)]">
        <ResearchWorkspace projectId={params.id} projectName={projectName} />
      </div>
    </DashboardShell>
  )
}
