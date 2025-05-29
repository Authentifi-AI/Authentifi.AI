import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBFhrIWfEuxS-NiKkjbOj84LJWqZ_yul_s",
  authDomain: "authentifiai-5d90a.firebaseapp.com",
  projectId: "authentifiai-5d90a",
  storageBucket: "authentifiai-5d90a.firebasestorage.app",
  messagingSenderId: "958175657043",
  appId: "1:958175657043:web:89a02e4dfce33ff6bfdaa6",
  measurementId: "G-3TH9ZP1FMC",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Export services for use in other files
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
