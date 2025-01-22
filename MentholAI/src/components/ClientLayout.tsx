'use client'
import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { ParticleEffect } from './ParticleEffect'

const QuantumEffect = dynamic(() => import('./QuantumEffect'), {
  loading: () => null,
  ssr: false
})

interface ClientLayoutProps {
  children: ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#004D40] z-0" />
      
      {/* Quantum effects layer */}
      <div className="relative">
        <QuantumEffect />
      </div>
      
      {/* Glow effects layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FFD1]/10 via-transparent to-transparent animate-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#004D40]/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#00FFD1]/5 via-transparent to-transparent" />
      </div>

      {/* Particle effect */}
      <ParticleEffect />

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
} 