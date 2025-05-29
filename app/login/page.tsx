"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import Navbar from "@/components/Navbar"
import { Mail, Eye } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    document.body.id = "Login-page"
    return () => {
      document.body.id = ""
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      if (user.emailVerified) {
        setSuccess("Login successful!")
      } else {
        setError("Please verify your email before logging in.")
        await signOut(auth)
      }
    } catch (error: any) {
      setError(error.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex grow shrink-1 basis-auto justify-center items-center min-h-screen">
        <div
          id="FormContainer"
          className="bg-white w-fit h-fit rounded-xl border-gray-300 border-1 text-center pl-5 pr-5 pt-10 pb-2 lg:pl-15 lg:pr-15 lg:pt-20 lg:pb-10"
        >
          <h3 className="text-gray-900 text-sm lg:text-base 2xl:text-lg">Start your journey</h3>
          <h2 className="text-black text-xl font-semibold mt-2 lg:text-xl 2xl:text-2xl">Sign in to AuthentifiAI</h2>
          <form className="flex flex-col justify-center items-center mt-15" onSubmit={handleLogin}>
            {error && <p style={{ color: "red", fontSize: "1vw" }}>{error}</p>}
            {success && <p style={{ color: "green", fontSize: "1vw" }}>{success}</p>}

            <div className="relative flex items-center">
              <input
                className="LoginInput border-1 rounded-sm text-base p-2 lg:text-lg 2xl:text-xl lg:w-xs 2xl:w-sm"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail size={20} className="absolute right-3 text-gray-600" />
            </div>

            <div className="relative flex items-center mt-5">
              <input
                className="LoginInput border-1 rounded-sm text-md p-2 lg:text-lg 2xl:text-xl lg:w-xs 2xl:w-sm"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Eye size={20} className="absolute right-3 text-gray-600" />
            </div>

            <button
              type="submit"
              className="mt-10 h-12 w-24 text-lg font-bold bg-white lg:text-xl 2xl:text-2xl lg:mt-15 2xl:h-15 2xl:w-30"
            >
              Login
            </button>
            <h5 className="text-sm mt-10 -ml-3 lg:text-base 2xl:text-lg">
              Dont have an account?{" "}
              <Link href="/register" className="underline text-blue-600">
                Register
              </Link>
            </h5>
            <h5 className="text-sm mt-2 -ml-3 lg:text-base 2xl:text-lg">
              For Password less Sign In{" "}
              <Link href="/magic-login" className="underline text-blue-600">
                Click here
              </Link>
            </h5>
          </form>
        </div>
      </div>
    </>
  )
}
