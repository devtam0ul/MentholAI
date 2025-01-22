'use client'
import { useEffect } from 'react'

export function useResponsiveFontSize() {
  useEffect(() => {
    const setFontSize = () => {
      const width = window.innerWidth
      const baseFontSize = Math.min(Math.max(16, width / 50), 20)
      document.documentElement.style.fontSize = `${baseFontSize}px`
    }

    setFontSize()
    window.addEventListener('resize', setFontSize)
    window.addEventListener('orientationchange', setFontSize)

    return () => {
      window.removeEventListener('resize', setFontSize)
      window.removeEventListener('orientationchange', setFontSize)
    }
  }, [])
} 