"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { submitEarlyAccessForm, type EarlyAccessFormData } from "@/app/actions/early-access"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  role: z.string().min(1, { message: "Please select a role" }),
  interest: z.string().optional(),
})

export function EarlyAccessForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<EarlyAccessFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      interest: "",
    },
  })

  async function onSubmit(data: EarlyAccessFormData) {
    setStatus("loading")

    try {
      const result = await submitEarlyAccessForm(data)

      if (result.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
        setErrorMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  {...field}
                  className="border-primary/20 focus-visible:ring-primary/50"
                  disabled={status === "loading" || status === "success"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work or .edu Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  {...field}
                  className="border-primary/20 focus-visible:ring-primary/50"
                  disabled={status === "loading" || status === "success"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Role</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={status === "loading" || status === "success"}
              >
                <FormControl>
                  <SelectTrigger className="border-primary/20 focus-visible:ring-primary/50">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="researcher">Researcher</SelectItem>
                  <SelectItem value="professor">Professor</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="academic">Independent Academic</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Research Interest</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., AI Ethics, Climate Science, etc."
                  {...field}
                  className="border-primary/20 focus-visible:ring-primary/50"
                  disabled={status === "loading" || status === "success"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {status === "success" && <CheckCircle className="mr-2 h-4 w-4" />}
          {status === "loading" ? "Submitting..." : status === "success" ? "Request Submitted" : "Request Early Access"}
        </Button>

        {status === "success" && (
          <div className="flex items-center gap-2 p-3 text-sm rounded-md bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">
            <CheckCircle className="h-4 w-4" />
            <p>Thank you! We'll be in touch soon about early access.</p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 p-3 text-sm rounded-md bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400">
            <AlertCircle className="h-4 w-4" />
            <p>{errorMessage || "Something went wrong. Please try again."}</p>
          </div>
        )}
      </form>
    </Form>
  )
}
