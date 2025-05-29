import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Check if we have the required environment variables
const requiredEnvVars = [
  "NEXT_PUBLIC_FIREBASE_apiKey",
  "NEXT_PUBLIC_FIREBASE_authDomain",
  "NEXT_PUBLIC_FIREBASE_projectId",
  "NEXT_PUBLIC_FIREBASE_storageBucket",
  "NEXT_PUBLIC_FIREBASE_messagingSenderId",
  "NEXT_PUBLIC_FIREBASE_appId",
]

const hasValidConfig = requiredEnvVars.every((envVar) => {
  const value = process.env[envVar]
  return value && value !== "undefined" && value.trim() !== ""
})

let app
let auth
let db
let storage

if (hasValidConfig) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId,
  }

  // Initialize Firebase only if it hasn't been initialized already
  if (!getApps().length) {
    app = initializeApp(firebaseConfig)
  } else {
    app = getApps()[0]
  }

  // Initialize services
  auth = getAuth(app)
  db = getFirestore(app)
  storage = getStorage(app)
} else {
  console.warn("Firebase configuration is incomplete. Some features may not work.")
  // Create mock objects to prevent errors
  app = null
  auth = null
  db = null
  storage = null
}

export { auth, db, storage }
export default app
