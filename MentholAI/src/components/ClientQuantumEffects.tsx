'use client'
import dynamic from 'next/dynamic'
import { LoadingSpinner } from './LoadingSpinner'

const QuantumEffect = dynamic(() => import('./QuantumEffect'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})

export function ClientQuantumEffects() {
  return (
    <div className="relative">
      <QuantumEffect />
    </div>
  )
} 