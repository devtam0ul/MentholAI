'use client'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { LoadingSpinner } from './LoadingSpinner'

// Dynamically import components with proper loading states
const Terminal = dynamic(() => import('./Terminal'), {
  loading: () => <LoadingSpinner />,
  suspense: true
})

const QuantumEffect = dynamic(() => import('./QuantumEffect'), {
  loading: () => <LoadingSpinner />,
  suspense: true
})

const TokenomicsChart = dynamic(() => import('./TokenomicsChart').then(mod => mod.default), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

export function DynamicElements({ code }: { code: string }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="relative">
        <QuantumEffect />
        <div className="bg-black/30 rounded-lg p-8 border border-[#00FFD1]/20">
          <Terminal 
            filename="quantum_nft_generation.rs"
            code={code}
            language="rust"
          />
        </div>
      </div>
    </Suspense>
  )
} 