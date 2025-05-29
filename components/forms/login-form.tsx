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
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { Eye } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password)
      const user = userCredential.user;
      if (user.emailVerified) {
        //user succesfully signed in so redirect to the dashboard
      router.push("/dashboard")
    }
    else{
      await signOut(auth);
      throw new Error("auth/email-not-verified")
    }
  }
     catch (error: any) {
      console.error("Login error:", error)

      // Handle specific Firebase auth errors
      let errorMessage = "Something went wrong. Please try again."
      
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        errorMessage = "Invalid email or password."
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                    className="border-primary/20 focus-visible:ring-primary/50"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Eye size={18} />
                  </button>
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
