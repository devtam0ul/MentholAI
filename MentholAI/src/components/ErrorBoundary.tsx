'use client'
import { useEffect } from 'react'

export function ErrorBoundary({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#00FFD1] mb-4">
          Something went wrong!
        </h2>
        <button
          onClick={reset}
          className="px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1] rounded-lg"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 