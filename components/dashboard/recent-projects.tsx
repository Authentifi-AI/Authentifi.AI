import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { MoreHorizontal, Plus, Search } from "lucide-react"
import Link from "next/link"

interface RecentProjectsProps {
  className?: string
}

export function RecentProjects({ className }: RecentProjectsProps) {
  const projects = [
    {
      id: "1",
      name: "Climate Change Research",
      description: "Analysis of global temperature changes",
      updatedAt: "Updated 2 hours ago",
      status: "In Progress",
    },
    {
      id: "2",
      name: "AI Ethics Study",
      description: "Examining ethical implications of AI systems",
      updatedAt: "Updated yesterday",
      status: "Draft",
    },
    {
      id: "3",
      name: "Renewable Energy",
      description: "Comparative study of renewable energy sources",
      updatedAt: "Updated 3 days ago",
      status: "Completed",
    },
  ]

  return (
    <Card className={cn("col-span-3", className)}>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-1">
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>You have {projects.length} active research projects.</CardDescription>
        </div>
        <div className="ml-auto flex gap-2">
          <Link href="/dashboard/research">
            <Button variant="outline" size="sm" className="gap-1 border-primary/20 text-primary hover:bg-primary/10">
              <Search className="h-4 w-4" />
              Research
            </Button>
          </Link>
          <Button size="sm" className="gap-1 bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between space-x-4 hover:bg-muted/20 rounded-md p-2 transition-colors"
            >
              <Link href={`/dashboard/projects/${project.id}`} className="flex-1">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm font-medium leading-none">{project.name}</p>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </Link>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={
                    project.status === "In Progress"
                      ? "default"
                      : project.status === "Completed"
                        ? "success"
                        : "secondary"
                  }
                >
                  {project.status}
                </Badge>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
