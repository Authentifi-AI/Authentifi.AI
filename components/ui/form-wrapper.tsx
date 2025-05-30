"use client"

import type React from "react"
import type { FieldValues, UseFormReturn } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

interface FormWrapperProps<T extends FieldValues> {
  form: UseFormReturn<T>
  onSubmit: (values: T) => Promise<void> | void
  children: React.ReactNode
  className?: string
  isSubmitting?: boolean
  error?: string | null
  success?: string | null
}

export function FormWrapper<T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
  isSubmitting,
  error,
  success,
}: FormWrapperProps<T>) {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-4", className)}>
      {children}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}
    </form>
  )
}
