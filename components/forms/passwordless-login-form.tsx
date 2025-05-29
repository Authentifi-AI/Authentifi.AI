"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { auth } from "@/lib/firebase"
import { sendSignInLinkToEmail, signOut } from "firebase/auth"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  })
})

export function PasswordLessLoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    const actionCodeSettings = {
      url: "http://autthentifi-ai.vercel.app/finishsignin", // redirect after click
      handleCodeInApp: true,
    }

    try {
      await sendSignInLinkToEmail(auth, values.email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", values.email);
      toast({
        title: "Success",
        description: "Magic link sent to your email!"
      });
    }
    catch (error: any) {
      console.error("Login error:", error)
    
      // Handle specific Firebase auth errors
      let errorMessage = "Something went wrong. Please try again."
    
      if (error.code === "auth/user-not-found") {
        errorMessage = "Invalid email."
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many failed login attempts. Please try again later."
      }
      else if (error.message === "auth/email-not-verified") {
        errorMessage = "Please verify your email before logging in."
      }
    
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }



return (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  placeholder="name@example.com"
                  {...field}
                  className="border-primary/20 focus-visible:ring-primary/50"
                  required
                  //Disabeling the pattern for testing
                  //pattern="[a-zA-Z0-9.]+@+[a-zA-Z0-9.]+.edu"
                  onInvalid={(e: any) => e.target.setCustomValidity("Please enter a valid .edu email address.")}
                  onInput={(e: any) => e.target.setCustomValidity("")}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  </Form>
)
}
