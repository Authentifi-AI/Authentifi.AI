import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AuthentifiAI - Secure Research Platform",
  description: "AuthentifiAI is a secure platform for researchers to organize, analyze, and collaborate on their work.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the entire app with the AuthProvider */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
