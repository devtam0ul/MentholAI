'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function EnhancedStatsBar() {
  const [artistCount, setArtistCount] = useState(9899)
  const [modelCount, setModelCount] = useState(100)

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

    return () => {
      clearInterval(artistInterval)
    }
  }, [])

  return (
    <div className="w-full flex justify-center pt-20">
      <div className="flex items-center justify-center gap-32 bg-black/20 backdrop-blur-sm px-16 py-3 rounded-xl border border-[#00FFD1]/10 min-w-[500px]">
        {/* Global Artists Stats */}
        <div className="flex items-center gap-3">
          <div className="text-[#00FFD1]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
              <path d="M12 6a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 6zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 11z" />
            </svg>
          </div>
          <div>
            <motion.h3 
              key={artistCount}
              className="text-white font-bold text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {artistCount.toLocaleString()}+
            </motion.h3>
            <p className="text-[#00FFD1] text-xs">Global Artists</p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-[#00FFD1]/20 to-transparent" />

        {/* AI Models Stats */}
        <div className="flex items-center gap-3">
          <div className="text-[#00FFD1]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
          <div>
            <motion.h3 
              key={modelCount}
              className="text-white font-bold text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {modelCount}M+
            </motion.h3>
            <p className="text-[#00FFD1] text-xs">AI Models</p>
          </div>
        </div>
      </div>
    </div>
  )
} 