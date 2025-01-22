'use client'
import { useEffect } from 'react'

export function useTouchFeedback(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    
    const addTouchClass = (e: TouchEvent) => {
      const target = e.currentTarget as HTMLElement
      target.classList.add('touch-active')
    }
    
    const removeTouchClass = (e: TouchEvent) => {
      const target = e.currentTarget as HTMLElement
      target.classList.remove('touch-active')
    }

    elements.forEach(el => {
      el.addEventListener('touchstart', addTouchClass, { passive: true })
      el.addEventListener('touchend', removeTouchClass, { passive: true })
    })

    return () => {
      elements.forEach(el => {
        el.removeEventListener('touchstart', addTouchClass)
        el.removeEventListener('touchend', removeTouchClass)
      })
    }
  }, [selector])
} 