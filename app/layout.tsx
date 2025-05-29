import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AuthentifiAI - Secure Academic Research & Authorship Verification",
  description:
    "Collaborate, manage, and verify your research with AuthentifiAI. Secure authentication and AI-powered tools for academic integrity.",
  keywords: ["academic research", "authorship verification", "AI research tools", "academic integrity"],
  authors: [{ name: "AuthentifiAI Team" }],
  openGraph: {
    title: "AuthentifiAI - Secure Academic Research & Authorship Verification",
    description: "Collaborate, manage, and verify your research with AuthentifiAI.",
    url: "https://authentifai.org",
    siteName: "AuthentifiAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuthentifiAI - Secure Academic Research & Authorship Verification",
    description: "Collaborate, manage, and verify your research with AuthentifiAI.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
