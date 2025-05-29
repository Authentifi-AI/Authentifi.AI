// Common types used across the application

export interface User {
  id: string
  name: string
  email: string
  role: string
}

export interface ResearchProject {
  id: string
  name: string
  description: string
  updatedAt: string
  status: "Draft" | "In Progress" | "Completed"
}

export interface AIMessage {
  role: "user" | "assistant"
  content: string
}

export interface EarlyAccessFormData {
  name: string
  email: string
  role: string
  interest?: string
}
