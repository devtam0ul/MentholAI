'use client'
import { useEffect, useState } from 'react'

export function useNetworkAware() {
  const [connection, setConnection] = useState({
    downlink: 10,
    effectiveType: '4g',
    saveData: false
  })

  useEffect(() => {
    if ('connection' in navigator) {
      const network = (navigator as any).connection

      const updateConnection = () => {
        setConnection({
          downlink: network.downlink,
          effectiveType: network.effectiveType,
          saveData: network.saveData
        })
      }

      network.addEventListener('change', updateConnection)
      updateConnection()
      
      return () => network.removeEventListener('change', updateConnection)
    }
  }, [])

  return connection
} 