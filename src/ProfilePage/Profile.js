"use client"

import { useState, useEffect } from "react"
import { auth } from "../Firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import Navbar from "../Public/Navbar"
import Footer from "../Public/Footer"
import "./Profile.css"

function ProfilePage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="text-white text-xl">Loading...</div>
        </div>
        <Footer />
      </>
    )
  }

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Sign In</h2>
            <p className="text-gray-600 mb-4">You need to be signed in to view your profile.</p>
            <a href="/Login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Sign In
            </a>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">User Profile</h1>
            <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {user.email ? user.email.charAt(0).toUpperCase() : "U"}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-gray-900">{user.email}</p>
            </div>

            <div className="border-b pb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
              <p className="text-gray-600 text-sm font-mono">{user.uid}</p>
            </div>

            <div className="border-b pb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Verified</label>
              <p className={`text-sm ${user.emailVerified ? "text-green-600" : "text-red-600"}`}>
                {user.emailVerified ? "Verified" : "Not Verified"}
              </p>
            </div>

            <div className="border-b pb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Account Created</label>
              <p className="text-gray-600 text-sm">
                {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "Unknown"}
              </p>
            </div>

            <div className="border-b pb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Sign In</label>
              <p className="text-gray-600 text-sm">
                {user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : "Unknown"}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProfilePage
