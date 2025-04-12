'use client'

import { useEffect, useState } from "react";
import { auth } from "@/lib/Firebase";
import { isSignInWithEmailLink, signInWithEmailLink, User } from "firebase/auth";

// Define a proper type for user info
interface UserInfo {
  email: string | null;
  uid: string;
  displayName: string | null;
  emailVerified: boolean;
}

const FinishSignIn = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const completeSignIn = async () => {
      // Handle case where email might be null
      let storedEmail = window.localStorage.getItem("emailForSignIn");
      
      if (!storedEmail) {
        storedEmail = window.prompt("Enter your email to confirm:");
        if (!storedEmail) {
          setError("Email is required to complete sign-in");
          return;
        }
      }

      if (isSignInWithEmailLink(auth, window.location.href)) {
        try {
          const result = await signInWithEmailLink(auth, storedEmail, window.location.href);
          window.localStorage.removeItem("emailForSignIn");

          const user = result.user;
          setUserInfo({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            emailVerified: user.emailVerified,
          });
        } catch (err) {
          console.error("Sign-in failed:", err);
          // Handle error safely regardless of structure
          const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
          setError("Login failed: " + errorMessage);
        }
      }
    };

    completeSignIn();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userInfo) {
    return <div>Logging you in...</div>;
  }

  return (
    <div>
      <h2>Welcome!</h2>
      <p><strong>Email:</strong> {userInfo.email || "Not available"}</p>
      <p><strong>Email Verified:</strong> {userInfo.emailVerified ? "Yes" : "No"}</p>
    </div>
  );
};

export default FinishSignIn;