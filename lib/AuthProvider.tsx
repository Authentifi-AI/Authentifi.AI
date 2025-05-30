"use client"

import type React from "react"

import { AuthProvider as AuthContextProvider } from "@/contexts/auth-context"

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}
