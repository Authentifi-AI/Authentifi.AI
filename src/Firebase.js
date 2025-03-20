import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // For Firestore Database
import { getStorage } from "firebase/storage"; // For File Storage

const firebaseConfig = {
  apiKey: "AIzaSyB0VY85DrxF9wkXWdrpf2MBi675JFh0CG4",
  authDomain: "authentifi-ai.firebaseapp.com",
  projectId: "authentifi-ai",
  storageBucket: "authentifi-ai.firebasestorage.app",
  messagingSenderId: "511695560513",
  appId: "1:511695560513:web:a27ceb0e228c42738d8bc0",
  measurementId: "G-XGJ5N3TYE0"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Export services for use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
