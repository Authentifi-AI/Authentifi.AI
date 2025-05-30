"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle } from "lucide-react"
import { submitEarlyAccess } from "@/app/actions/submit-early-access"

export function EarlyAccessFormSimple() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    interest: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData()
    formData.append("name", formData.name)
    formData.append("email", formData.email)
    formData.append("role", formData.role)
    formData.append("interest", formData.interest)

    const result = await submitEarlyAccess(formData)

    if (result.success) {
      setStatus("success")
      setFormData({
        name: "",
        email: "",
        role: "",
        interest: "",
      })
    } else {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-center">
      <div>
        <Label htmlFor="name" className="sr-only">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Full Name"
          className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
          disabled={status === "loading" || status === "success"}
        />
      </div>

      <div>
        <Label htmlFor="email" className="sr-only">
          Work or .edu Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Work or .edu Email"
          className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
          disabled={status === "loading" || status === "success"}
        />
      </div>

      <div>
        <Label htmlFor="role" className="sr-only">
          Select Role
        </Label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
          disabled={status === "loading" || status === "success"}
        >
          <option value="" className="bg-secondary text-white">
            Select Role
          </option>
          <option value="Researcher" className="bg-secondary text-white">
            Researcher
          </option>
          <option value="Professor" className="bg-secondary text-white">
            Professor
          </option>
          <option value="Student" className="bg-secondary text-white">
            Student
          </option>
          <option value="Independent Academic" className="bg-secondary text-white">
            Independent Academic
          </option>
          <option value="Other" className="bg-secondary text-white">
            Other
          </option>
        </select>
      </div>

      <div>
        <Label htmlFor="interest" className="sr-only">
          Interest area
        </Label>
        <Input
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          placeholder="Interest area (e.g., LLM Evaluation)"
          className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
          disabled={status === "loading" || status === "success"}
        />
      </div>

      <Button
        type="submit"
        className="w-full authentifi-button"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {status === "success" && <CheckCircle className="mr-2 h-4 w-4" />}
        {status === "loading" ? "Submitting..." : status === "success" ? "Request Submitted" : "Register"}
      </Button>

      {status === "success" && (
        <div className="text-green-300 mt-2 text-center">You're in! We'll be in touch soon.</div>
      )}

      {status === "error" && <div className="text-red-300 mt-2 text-center">Oops, something went wrong.</div>}
    </form>
  )
}
