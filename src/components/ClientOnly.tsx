'use client'
import { useEffect, useState, type ReactNode, Suspense } from 'react'

export function ClientOnly({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <Suspense fallback={null}>{children}</Suspense>
} 