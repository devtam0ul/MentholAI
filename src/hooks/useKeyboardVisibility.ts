'use client'
import { useState, useEffect } from 'react'

export function useKeyboardVisibility() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      // On iOS, when keyboard shows, window.innerHeight becomes smaller
      const isKeyboard = window.screen.height > window.innerHeight
      setIsKeyboardVisible(isKeyboard)
      
      // Adjust viewport when keyboard shows/hides
      if (isKeyboard) {
        document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`)
      } else {
        document.documentElement.style.setProperty('--viewport-height', '100vh')
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isKeyboardVisible
} 