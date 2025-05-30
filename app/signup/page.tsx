import type { Metadata } from "next"
import Link from "next/link"
import { SignupForm } from "@/components/forms/signup-form"
import { StandardLayout } from "@/components/layout/standard-layout"

export const metadata: Metadata = {
  title: "Sign Up - AuthentifiAI",
  description: "Create a new AuthentifiAI account",
}

export default function SignupPage() {
  return (
    <StandardLayout>
      <div className="container flex h-[calc(100vh-64px)] w-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your information to create an account</p>
          </div>
          <SignupForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link href="/login" className="hover:text-brand underline underline-offset-4">
              Already have an account? Sign In
            </Link>
          </p>
        </div>
      </div>
    </StandardLayout>
  )
}
