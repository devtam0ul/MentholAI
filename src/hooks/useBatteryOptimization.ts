'use client'
import { useEffect, useState } from 'react'

export function useBatteryOptimization() {
  const [isBatteryLow, setIsBatteryLow] = useState(false)

  useEffect(() => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        const handleChange = () => {
          setIsBatteryLow(battery.level <= 0.2)
        }
        
        battery.addEventListener('levelchange', handleChange)
        handleChange()
        
        return () => battery.removeEventListener('levelchange', handleChange)
      })
    }
  }, [])

  return isBatteryLow
} 