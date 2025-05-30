"use client"

import { useState, useEffect, useRef } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  root?: Element | null
}

export function useIntersectionObserver({
  threshold = 0,
  rootMargin = "0px",
  root = null,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementRef = useRef<Element | null>(null)

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
    setIsIntersecting(entry.isIntersecting)
  }

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const observer = new IntersectionObserver(updateEntry, {
      threshold,
      rootMargin,
      root,
    })

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, root])

  return { ref: elementRef, entry, isIntersecting }
}
