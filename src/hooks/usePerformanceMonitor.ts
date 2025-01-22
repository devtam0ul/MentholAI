'use client'
import { useEffect } from 'react'

export function usePerformanceMonitor() {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Only log poor performance on mobile
        if (window.innerWidth <= 768 && entry.duration > 100) {
          console.warn(`Slow ${entry.name} performance: ${entry.duration}ms`)
        }
      })
    })

    observer.observe({ entryTypes: ['longtask', 'paint', 'layout-shift'] })
    return () => observer.disconnect()
  }, [])
} 