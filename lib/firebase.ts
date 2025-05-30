import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth" // For authentication
import { getFirestore } from "firebase/firestore" // For Firestore Database
import { getStorage } from "firebase/storage" // For File Storage

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Add validation to ensure Firebase is properly configured
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
  console.error("Firebase configuration is incomplete. Please check your environment variables.")
}

const app = initializeApp(firebaseConfig)

// Export services for use in other files
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
