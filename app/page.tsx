"use client"

import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Feature from "@/components/Feature"
import Footer from "@/components/Footer"

export default function HomePage() {
  useEffect(() => {
    document.body.id = "Home-page"
    return () => {
      document.body.id = ""
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Footer />
    </>
  )
}
