import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // For Firestore Database
import { getStorage } from "firebase/storage"; // For File Storage

const firebaseConfig = {
  apiKey: "AIzaSyBFhrIWfEuxS-NiKkjbOj84LJWqZ_yul_s",
  authDomain: "authentifiai-5d90a.firebaseapp.com",
  projectId: "authentifiai-5d90a",
  storageBucket: "authentifiai-5d90a.firebasestorage.app",
  messagingSenderId: "958175657043",
  appId: "1:958175657043:web:89a02e4dfce33ff6bfdaa6",
  measurementId: "G-3TH9ZP1FMC"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Export services for use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
