"use client"

import Link from "next/link"

import { useEffect, useState } from "react"
import { auth } from "@/lib/firebase"
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function FinishSignInPage() {
  const [userInfo, setUserInfo] = useState<any>(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const completeSignIn = async () => {
      const storedEmail = window.localStorage.getItem("emailForSignIn") || window.prompt("Enter your email to confirm:")

      if (storedEmail && isSignInWithEmailLink(auth, window.location.href)) {
        try {
          const result = await signInWithEmailLink(auth, storedEmail, window.location.href)
          window.localStorage.removeItem("emailForSignIn")

          const user = result.user
          setUserInfo({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            emailVerified: user.emailVerified,
          })
        } catch (err: any) {
          console.error("Sign-in failed:", err)
          setError("Login failed: " + err.message)
        }
      } else {
        setError("Invalid or expired sign-in link")
      }
      setLoading(false)
    }

    completeSignIn()
  }, [])

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">Sign In Completion</h1>

          {loading && <p className="text-center">Logging you in...</p>}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>{error}</p>
            </div>
          )}

          {userInfo && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <p className="text-green-600 font-semibold text-lg">Successfully signed in!</p>
              </div>
              <div className="border-t pt-4">
                <p>
                  <strong>Email:</strong> {userInfo.email}
                </p>
                <p>
                  <strong>Email Verified:</strong> {userInfo.emailVerified ? "Yes" : "No"}
                </p>
              </div>
              <div className="text-center mt-6">
                <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Go to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
