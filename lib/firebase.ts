import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { firebaseConfig } from "./firebase-config"

// Initialize Firebase only on the client side
let app
let auth

// Check if we're in the browser environment
if (typeof window !== "undefined") {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig)
  } else {
    app = getApps()[0]
  }

  // Initialize auth
  auth = getAuth(app)
}

export { app, auth }
