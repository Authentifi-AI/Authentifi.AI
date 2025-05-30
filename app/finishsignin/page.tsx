'use client'

import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast"
import { useEffect } from "react"
import { useRouter } from "next/navigation"


//Handle a magilogin redirect 
const FinishSignIn = () => {
    const { toast } = useToast()
    const router = useRouter()
    
    useEffect(() => {
      const completeSignIn = async () => {
  
        if (isSignInWithEmailLink(auth, window.location.href)) {
          // Handle case where email might be null
          let storedEmail = window.localStorage.getItem("emailForSignIn");
  
          if (!storedEmail) {
            storedEmail = window.prompt("Enter your email to confirm:");
            if (!storedEmail) {
              toast({
                title: "Login",
                description: "Email is required to complete sign-in"
              });
              return;
            }
          }
          try {
            const result = await signInWithEmailLink(auth, storedEmail, window.location.href);
            window.localStorage.removeItem("emailForSignIn");
            router.push("/dashboard")
          }
          catch (err: any) {
            toast({
              title: "Error",
              description: "Something went wrong. Please try again."
            })
          }
        }
      };
  
      completeSignIn();
    }, []);
  
  };

  export default FinishSignIn;
