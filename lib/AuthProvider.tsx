// src/components/AuthProvider.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuthStore, UserDetails } from "@/lib/auth-store";
import Cookies from "js-cookie";


export async function retrieveUserDetails(email: string) {
  //retrieve user_details and update them globally
  try {
    if (email) {
      // API call to get user data from Teable
      const tableID = "tblF6SSt4HAv2NNsXDQ"
      const encodedEmail = encodeURIComponent(email)
      const url = `https://app.teable.io/api/table/${tableID}/record?filter=%7B%22conjunction%22%3A%22and%22%2C%22filterSet%22%3A%5B%7B%22fieldId%22%3A%22Email%22%2C%22operator%22%3A%22is%22%2C%22value%22%3A%22${encodedEmail}%22%7D%5D%7D`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TEABLE_GET_USER_KEY}`,
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        const data = await response.json()
        console.error(data.message || 'Something went wrong while trying to retrieve user details')
        throw new Error(data.message || 'Failed to fetch user data')
      }

      // Success
      const data = await response.json()
      if (data.records && data.records.length > 0) {
        const userDetails: UserDetails = {
          name: data.records[0].fields.Name || "",
          email: data.records[0].fields.Email || "",
          nickname: data.records[0].fields.Nickname || "", // Default nickname or get from API if available
          location: data.records[0].fields.Location || "",
          joined: data.records[0].fields.Joined || "", // Default or get from API if available
          website: data.records[0].fields.Website || "",
          bio: data.records[0].fields.Bio || "",
          id: data.records[0].id || "",
        }

        //return the user details settings
        return userDetails;
      }
      else {
        throw new Error('No user data found')
      }
    }

    else {
      throw new Error('No email provided')
    }
  }
  catch (error: any) {
    console.error('Error fetching user data:', error)
    return null
  }
}


export default function AuthProvider({ children }: { children: ReactNode }) {
  const setUser = useAuthStore((state: any) => state.setUser);
  const setUserDetails = useAuthStore((state: any) => state.setUserDetails);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      //Handel new user login 
      if (user) {
        const token = await user.getIdToken();
        Cookies.set("session", token, { expires: 1 });
        setUser(user);
        try {
          const user_details = await retrieveUserDetails(user.email || "");
          if(user_details) setUserDetails(user_details);
        }
        catch (error) {
          console.log("Error while trying to receive user data: ", error);
        }
      }

      //Handle signout 
      else {
        Cookies.remove("session");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  return <>{children}</>;
}
