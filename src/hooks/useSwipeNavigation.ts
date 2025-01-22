'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useSwipeNavigation() {
  const router = useRouter()
  
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    }
    
    const handleSwipe = () => {
      const swipeThreshold = 100
      const swipeLength = touchEndX - touchStartX
      
      if (Math.abs(swipeLength) > swipeThreshold) {
        if (swipeLength > 0) {
          router.back()
        }
      }
    }
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [router])
} 