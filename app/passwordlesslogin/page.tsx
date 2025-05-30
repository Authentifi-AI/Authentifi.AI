import type { Metadata } from "next"
import Link from "next/link"
import { PasswordLessLoginForm } from "@/components/forms/passwordless-login-form"
import { StandardLayout } from "@/components/layout/standard-layout"

export const metadata: Metadata = {
  title: "Login - AuthentifiAI",
  description: "Login to your AuthentifiAI account",
}

export default function LoginPage() {
  return (
    <StandardLayout>
      <div className="container flex h-[calc(100vh-64px)] w-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to sign in to your account</p>
          </div>
          <PasswordLessLoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link href="/signup" className="hover:text-brand underline underline-offset-4">
              Don&apos;t have an account? Sign Up
            </Link>
            <br></br>
            <br></br>
            <Link href="/login" className="hover:text-brand underline underline-offset-4">
              Click here for password Sign In
            </Link>
          </p>
        </div>
      </div>
    </StandardLayout>
  )
}
