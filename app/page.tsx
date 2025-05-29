import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { ModeToggle } from "@/components/mode-toggle"

export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex h-20 shrink-0 items-center px-6">
        <div className="mr-4 text-xl font-bold">Acme</div>
        <nav className="ml-auto flex items-center space-x-2">
          <ModeToggle />
          <Button>Sign Up</Button>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>Last month revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Subscriptions</CardTitle>
              <CardDescription>New subscriptions monthly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
              <CardDescription>Total sales made this year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,234,221</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Now</CardTitle>
              <CardDescription>Realtime active users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
            </CardContent>
          </Card>
        </section>
        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>Last month revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" selected={new Date()} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
              <CardDescription>Total sales made this year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,234,221</div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
