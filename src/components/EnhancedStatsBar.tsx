'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function EnhancedStatsBar() {
  const [artistCount, setArtistCount] = useState(9899)
  const [holderCount, setHolderCount] = useState(2499)
  const [nftsMinted, setNftsMinted] = useState(14999)  // New state for NFTs minted
  
  useEffect(() => {
    // Increment artist count
    const artistInterval = setInterval(() => {
      setArtistCount(prev => {
        if (prev >= 11000) {
          clearInterval(artistInterval)
          return 11000
        }
        return prev + 1
      })
    }, 1000)

    // Increment holder count
    const holderInterval = setInterval(() => {
      setHolderCount(prev => {
        if (prev >= 3000) {
          clearInterval(holderInterval)
          return 3000
        }
        return prev + 1
      })
    }, 1200)

    // Increment NFTs minted count
    const nftInterval = setInterval(() => {
      setNftsMinted(prev => {
        if (prev >= 16000) {
          clearInterval(nftInterval)
          return 16000
        }
        return prev + 1
      })
    }, 800)

    return () => {
      clearInterval(artistInterval)
      clearInterval(holderInterval)
      clearInterval(nftInterval)
    }
  }, [])

  // Calculate market cap (token price * total supply)
  const tokenPrice = 0.0042
  const totalSupply = 1000000000 // 1 billion tokens
  const marketCap = (tokenPrice * totalSupply).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  })

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Spotlight glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00FFD1]/10 via-transparent to-transparent blur-xl" />
      
      {/* Additional ambient glow */}
      <div className="absolute -inset-4 bg-[#00FFD1]/5 blur-3xl rounded-full" />

      <motion.div 
        className="relative flex items-center justify-between gap-4 md:gap-8 px-4 py-3 
                   bg-black/40 backdrop-blur-md rounded-xl border border-[#00FFD1]/20
                   shadow-[0_0_25px_0_rgba(0,255,209,0.1)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Spotlight beam effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div className="absolute inset-0 animate-spotlight bg-gradient-to-r from-transparent via-[#00FFD1]/10 to-transparent" />
        </div>

        {/* Stats content - only render once */}
        {[
          {
            icon: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                <path d="M12 6a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 6zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 11z" />
              </svg>
            ),
            value: `${artistCount.toLocaleString()}+`,
            label: "Global Artists"
          },
          {
            icon: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            ),
            value: "$0.0042",
            label: "Token Price"
          },
          {
            icon: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12V2L22 6l-2 4z" />
                <path d="M4 12v4h14a2 2 0 0 1 2 2c0 1.1-.9 2-2 2H6v2l-4-4 2-4z" />
              </svg>
            ),
            value: marketCap,
            label: "Market Cap"
          },
          {
            icon: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12V2L22 6l-2 4z" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
              </svg>
            ),
            value: `${nftsMinted.toLocaleString()}+`,
            label: "NFTs Minted"
          },
          {
            icon: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            ),
            value: `${holderCount.toLocaleString()}+`,
            label: "Total Holders"
          },
          {
            icon: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            ),
            value: "INFINITE",
            label: "AI Models"
          }
        ].map((stat, index) => (
          <>
            {index > 0 && (
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-[#00FFD1]/20 to-transparent hidden md:block" />
            )}
            <div key={stat.label} className="flex items-center gap-3">
              <div className="text-[#00FFD1]">
                {stat.icon}
              </div>
              <div className="flex flex-col items-start">
                <motion.h3 
                  key={stat.value}
                  className="text-white font-bold text-lg tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-[#00FFD1] text-xs font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          </>
        ))}
      </motion.div>
    </div>
  )
} 