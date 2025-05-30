"use client"

import { useState } from "react"

interface FormSubmitOptions<T, R> {
  onSubmit: (data: T) => Promise<R>
  onSuccess?: (result: R) => void
  onError?: (error: Error) => void
}

export function useFormSubmit<T, R>({ onSubmit, onSuccess, onError }: FormSubmitOptions<T, R>) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (data: T) => {
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      const result = await onSubmit(data)
      setSuccess(true)
      onSuccess?.(result)
      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred"
      setError(errorMessage)
      onError?.(err as Error)
      throw err
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isSubmitting,
    error,
    success,
    handleSubmit,
    setError,
    setSuccess,
  }
}
