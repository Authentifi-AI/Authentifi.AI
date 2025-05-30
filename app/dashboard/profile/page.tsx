import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { UserProfile } from "@/components/profile/user-profile"
import ProfileForm from "@/components/profile/profile-form"

export const metadata: Metadata = {
  title: "Profile",
  description: "View and manage your profile information.",
}

export default function ResearchPage() {

  return (
    <DashboardShell>
      <div className="flex flex-col gap-8 py-8">

        <div className="container mx-auto py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          <UserProfile />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
          <ProfileForm/>
        </div>
      </div>
    </div>
      </div>
    </DashboardShell>
  )
}
