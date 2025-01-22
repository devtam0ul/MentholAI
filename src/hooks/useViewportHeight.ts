'use client'
import { useEffect } from 'react'

export function useViewportHeight() {
  useEffect(() => {
    const setVH = () => {
      // First get viewport height and multiply by 1% to get vh unit value
      const vh = window.innerHeight * 0.01
      // Set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVH() // Set initial value
    
    // Update on resize and orientation change
    window.addEventListener('resize', setVH)
    window.addEventListener('orientationchange', () => {
      // Small delay to ensure new dimensions
      setTimeout(setVH, 100)
    })

    return () => {
      window.removeEventListener('resize', setVH)
      window.removeEventListener('orientationchange', setVH)
    }
  }, [])
} 