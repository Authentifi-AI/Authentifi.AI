"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { onAuthStateChanged } from "firebase/auth"

interface AuthContextType {
  user: User | null
  loading: boolean
  isFirebaseEnabled: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isFirebaseEnabled: false,
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isFirebaseEnabled, setIsFirebaseEnabled] = useState(false)

  useEffect(() => {
    // Check if Firebase is properly configured
    if (!auth) {
      setLoading(false)
      setIsFirebaseEnabled(false)
      return
    }

    setIsFirebaseEnabled(true)

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const value = {
    user,
    loading,
    isFirebaseEnabled,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
