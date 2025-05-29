// src/lib/auth-store.ts
import { create } from "zustand";
import { User } from "firebase/auth";
import { retrieveUserDetails } from "./AuthProvider";

// User type definition
export type UserDetails = {
  name: string;
  email: string;
  nickname: string;
  location: string;
  joined: string;
  website: string;
  bio: string;
  id: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  user_details: UserDetails | null;
  setUserDetails: (user_details: UserDetails | null) => void;
  refreshUserDetails: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  user_details: null,
  setUserDetails: (user_details) => set({ user_details }),

  // Add this new function to refresh user details from your data source
  refreshUserDetails: async () => {
    const {user} = get();
    if (!user) return

    try {
      const new_details = await retrieveUserDetails(user.email || "")
      if (new_details) {
        // Update the store with fresh user details
        set({ user_details: new_details })
      } else {
        console.error("Failed to refresh user details")
      }
    } catch (error) {
      console.error("Failed to refresh user details:", error)
    }
  }
}));
