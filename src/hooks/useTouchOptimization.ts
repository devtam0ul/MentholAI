import { useEffect } from 'react'

export function useTouchOptimization(element: HTMLElement | null) {
  useEffect(() => {
    if (!element) return
    
    element.style.webkitTapHighlightColor = 'transparent'
    element.style.touchAction = 'manipulation'
    
    const touchStartHandler = (e: TouchEvent) => {
      // Prevent double-tap zoom on mobile
      if (e.touches.length > 1) e.preventDefault()
    }
    
    element.addEventListener('touchstart', touchStartHandler, { passive: false })
    return () => element.removeEventListener('touchstart', touchStartHandler)
  }, [element])
} 