"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useAuthStore } from "@/lib/auth-store"
import { auth } from "@/lib/firebase"



const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  bio: z.string().max(160, { message: "Bio must not be longer than 160 characters." }).optional(),
  website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>


export default function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  // This would typically come from your authentication system
  const { user_details: user, setUser, refreshUserDetails } = useAuthStore()
  
  

  const defaultValues: Partial<ProfileFormValues> = {
    name: user?.name,
    bio: user?.bio,
    website: user?.website,
  }

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  async function onSubmit(data: ProfileFormValues) {
    setIsLoading(true)
        

    try {
      //API call for teable to add the new user
      const TableID = "tblF6SSt4HAv2NNsXDQ"
      const RecordID = user?.id;
      const response = await fetch(`https://app.teable.io/api/table/${TableID}/record/${RecordID}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TEABLE_UPDATE_USER_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          record: 
            {
              fields: {
                Name: data.name,
                Bio: data.bio,
                Website: data.website
              }
            } 
        })
      });

      const res = await response.json();
      if (!response.ok) {
        throw new Error(res.message || 'Something went wrong');
      }
      
      // Update the auth store with new user details
      setUser(auth.currentUser)
      
      // Force refresh user details to update the profile display

        refreshUserDetails()

      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    }

    catch (error) {
      toast({
        title: "Profile update failed",
        description: "Please try again later.",
      })
      console.log(error)
    }
    finally
    {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us a little bit about yourself" className="resize-none" {...field} />
                  </FormControl>
                  <FormDescription>You can use up to 160 characters.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input placeholder="https://yourwebsite.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update profile"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
