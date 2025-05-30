"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Mail, LinkIcon } from "lucide-react"
import { useAuthStore } from "@/lib/auth-store"
import { useToast } from "@/hooks/use-toast"


export function UserProfile() {
  const [loading, setLoading] = useState(false)
  const { user_details: user } = useAuthStore()
  const { toast } = useToast()

  if (loading) {
    return <Card className="w-full"><CardContent className="py-6">Loading user profile...</CardContent></Card>
  }

  if (!user) {
    return <Card className="w-full"><CardContent className="py-6">User profile not found</CardContent></Card>
  }
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div>
            <CardTitle className="text-2xl">{user.name}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Mail className="h-4 w-4 mr-1" />
              {user.email}
            </CardDescription>
            {user.nickname && (
              <Badge variant="outline" className="mt-2">
                {user.nickname}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">About</h3>
            <p>{user.bio}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-2">
            {user.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{user.location}</span>
              </div>
            )}
            {user.joined && (
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span>Joined {user.joined}</span>
              </div>
            )}
            {user.website && (
              <div className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4 text-muted-foreground" />
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {user.website.replace(/(^\w+:|^)\/\//, "")}
                </a>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
