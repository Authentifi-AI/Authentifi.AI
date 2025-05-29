"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/lib/firebase"

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const registerNewUser = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      const docRef = await addDoc(collection(db, "EarlyAccessUsers"), {
        FullName: name,
        Email: email,
        Telephone: phone,
      })
      setSuccess("Registered successfully!")
      console.log("Document written with ID: ", docRef.id)
    } catch (e) {
      console.error("Error adding document: ", e)
      setError("Something failed, please try again later.")
    }
  }

  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" })

  const rightSectionVariants = isDesktop
    ? {
        initial: { opacity: 0, x: -75 },
        whileInView: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
        viewport: { once: false, amount: 0.1 },
      }
    : {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
        viewport: { once: false, amount: 0.1 },
      }

  const leftSectionVariants = {
    initial: { opacity: 0.33, x: -50 },
    whileInView: { opacity: 1, x: 0, transition: { delay: 0.15, duration: 0.3 } },
    viewport: { once: false, amount: 0.3 },
  }

  return (
    <>
      <section className="grid text-center md:grid-cols-2 md:h-screen md:pb-30 md:mb-30 lg:items-start">
        <motion.div
          initial={rightSectionVariants.initial}
          whileInView={rightSectionVariants.whileInView}
          viewport={rightSectionVariants.viewport as any}
          className="content-center pt-20 md:content-center md:pt-10 md:text-left justify-items-center lg:justify-items-start lg:pt-20 lg:pl-10 lg:text-left lg:content-baseline"
        >
          <div className="inline-flex items-center text-left w-screen justify-center md:w-full md:justify-baseline">
            <img src="/logo.png" alt="Company Logo" className="h-auto w-15 2xl:w-20" />
            <h1 className="text-5xl text-white font-bold lg:text-6xl lg:ml-2 2xl:text-8xl">Authentifi AI</h1>
          </div>
          <p
            style={{ color: "#5E17EB" }}
            className="text-xl lg:text-3xl text-center lg:text-left lg:ml-2 font-bold 2xl:text-4xl 2xl:mt-2"
          >
            AI Authorship Verification
          </p>
          <p className="text-lg font-semibold text-white mt-10 pl-5 pr-5 lg:pl-0 lg:text-3xl lg:mt-15 2xl:mt-30">
            Use Authentifi AI to create your work, record your progress, and publish with confidence.
          </p>

          <div className="flex justify-center w-full p-3 lg:p-0">
            <div className="flex justify-center w-full">
              <div className="bg-gray-100 w-fit p-4 rounded-2xl border-gray-900 border mt-5 lg:mt-15 2xl:mt-32 justify-items-center lg:p-7">
                <p
                  style={{ color: "#273B96" }}
                  className="text-3xl font-bold md:text-center lg:justify-self-center lg:text-4xl 2xl:text-5xl"
                >
                  Sign up early for free
                </p>
                <button
                  onClick={togglePopup}
                  className="bg-blue-400 rounded-xl text-xl text-white font-bold pt-2 pb-2 pr-4 pl-4 shadow-xl border-1 border-gray-600 hover:bg-green-700 hover:cursor-pointer mt-5 lg:text-2xl 2xl:text-3xl"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={leftSectionVariants.initial}
          whileInView={leftSectionVariants.whileInView}
          viewport={leftSectionVariants.viewport as any}
          className="text-left p-5 h-screen content-center mt-10 mb-10 md:h-auto lg:mt-0 lg:mb-0 lg:pt-20"
        >
          <h1 className="text-white text-3xl font-bold xl:text-4xl xl:mb-3">See how it works &rarr;</h1>
          <h2 style={{ color: "#5E17EB" }} className="font-medium text-2xl xl:text-4xl xl:mb-3">
            Meet Alice, our student...
          </h2>
          <video controls className="rounded-xl bg-white h-auto w-max 2xl:h-[37rem]">
            <source src="/HeroLandingPageVideo.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={togglePopup}></div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 w-11/12 max-w-md z-10 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Register for Authentifi AI</h2>
              <button onClick={togglePopup} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
                &times;
              </button>
            </div>

            <form className="space-y-4" onSubmit={registerNewUser}>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Full Name*
                </label>
                <input
                  id="name"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="John Doe"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="john@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tel">
                  Phone Number
                </label>
                <input
                  id="tel"
                  type="tel"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="(___) - ___ - ____"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-700">
                  I agree to the Terms and Privacy Policy
                </label>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl focus:outline-none focus:shadow-outline w-full"
                >
                  Create Account
                </button>
              </div>

              {error && <p style={{ color: "red", fontSize: "15px" }}>{error}</p>}
              {success && <p style={{ color: "green", fontSize: "15px" }}>{success}</p>}
            </form>
          </motion.div>
        </div>
      )}
    </>
  )
}
