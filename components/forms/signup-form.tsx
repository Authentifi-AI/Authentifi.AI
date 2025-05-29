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
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth"
import { Eye } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      //create a new row with the email in teable
      const TableID = "tblF6SSt4HAv2NNsXDQ"
      const response = await fetch(`https://app.teable.io/api/table/${TableID}/record`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TEABLE_NEW_RECORD_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Email: values.email,
                Name: values.name,
                Joined: new Date().toISOString()
              }
            }
          ]
        })
      });
      
      const res = await response.json();
      if (!response.ok) {
        throw new Error(res.message || 'Something went wrong');
      }

      // Create user with Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);


      toast({
        title: "Account created!",
        description: "Verification email sent! Please check your inbox.",
      })

      //signout the user before proceeding
      await signOut(auth);

      //redirect to login page
      router.push("/login")
    } catch (error: any) {
      console.error("Signup error:", error)

      // Handle specific Firebase auth errors
      let errorMessage = "Something went wrong. Please try again."

      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use. Please try another email or login."
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak. Please choose a stronger password."
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="border-primary/20 focus-visible:ring-primary/50" />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  {...field}
                  className="border-primary/20 focus-visible:ring-primary/50"
                  required
                  //diasbeling the pattern for testing
                  //pattern="[a-zA-Z0-9.]+@+[a-zA-Z0-9.]+.edu"
                  onInvalid={(e: any) => e.target.setCustomValidity("Please enter a valid .edu email address.")}
                  onInput={(e: any) => e.target.setCustomValidity("")}
                />
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
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </Form>
  )
}
