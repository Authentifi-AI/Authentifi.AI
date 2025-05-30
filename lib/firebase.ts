// Import Firebase core functionality
import { initializeApp } from "firebase/app"

// Define Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Export the Firebase app instance
export default app

// Export Firebase services lazily to avoid initialization issues
export const getFirebaseAuth = () => import("firebase/auth").then(({ getAuth }) => getAuth(app))
export const getFirebaseFirestore = () => import("firebase/firestore").then(({ getFirestore }) => getFirestore(app))
export const getFirebaseStorage = () => import("firebase/storage").then(({ getStorage }) => getStorage(app))
