"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  role: z.string().min(1, { message: "Please select a role" }),
  interest: z.string().optional(),
})

export type EarlyAccessFormData = z.infer<typeof formSchema>

export async function submitEarlyAccessForm(formData: EarlyAccessFormData) {
  // Validate form data
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  try {
    // In a real application, you would store this in a database
    // or send it to an email service, etc.
    console.log("Early access request:", result.data)

    // Simulate a delay for demo purposes
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Error submitting early access form:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

// Alternative function for form action
export async function submitEarlyAccess(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    role: formData.get("role") as string,
    interest: formData.get("interest") as string,
  }

  return await submitEarlyAccessForm(data)
}
