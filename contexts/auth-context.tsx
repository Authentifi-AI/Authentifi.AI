"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, type User } from "firebase/auth"
import { auth } from "@/lib/firebase"

type AuthContextType = {
  user: User | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only run auth state listener on the client side
    if (typeof window !== "undefined" && auth) {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          setUser(user)
          setLoading(false)
        },
        (error) => {
          console.error("Auth state change error:", error)
          setLoading(false)
        },
      )

      return () => unsubscribe()
    } else {
      // If we're on the server or auth isn't available, just set loading to false
      setLoading(false)
    }
  }, [])

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
