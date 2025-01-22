'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

// Sample mint data - in a real app this would come from your backend
const INITIAL_MINTS = [
  {
    id: 1,
    image: "/nfts/nft1.png",
    wallet: "0x7C3F...9Ae4",
  },
  {
    id: 2,
    image: "/nfts/nft2.png",
    wallet: "0x4F2B...8Bd5",
  },
  {
    id: 3,
    image: "/nfts/nft3.png",
    wallet: "0x2A9D...9Cf7",
  },
]

export function LiveMintFeed() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mints, setMints] = useState<Array<{ id: number; image: string; wallet: string; timestamp?: number }>>([])
  const [lastMintTime, setLastMintTime] = useState<number | null>(null)

  // Initialize mints after mount
  useEffect(() => {
    setMounted(true)
    setMints(INITIAL_MINTS.map(mint => ({
      ...mint,
      timestamp: Date.now(),
    })))
  }, [])

  // Simulate new mints coming in
  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      const randomMint = INITIAL_MINTS[Math.floor(Math.random() * INITIAL_MINTS.length)]
      const newMint = {
        ...randomMint,
        id: Date.now(),
        timestamp: Date.now(),
      }
      
      setMints(prev => [newMint, ...prev].slice(0, 10))
      setLastMintTime(Date.now())
    }, 5000)

    return () => clearInterval(interval)
  }, [mounted])

  // Don't render anything until mounted
  if (!mounted) return null

  return (
    <>
      {/* Toggle button - Simplified animation */}
      <motion.button
        className="fixed left-0 top-1/2 -translate-y-1/2 bg-black/80 text-[#00FFD1] 
                   px-3 py-6 rounded-r-lg border border-[#00FFD1]/20 backdrop-blur-sm
                   hover:bg-black/90 transition-colors z-50"
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          x: isOpen ? 280 : 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
          }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse" />
          <span className="vertical-text text-xs font-medium">LIVE MINTS</span>
        </div>
      </motion.button>

      {/* Feed panel */}
      <motion.div
        className="fixed left-0 top-0 h-full w-[280px] bg-black/95 border-r border-[#00FFD1]/20 
                   backdrop-blur-md z-40 overflow-hidden"
        initial={{ x: -280 }}
        animate={{ 
          x: isOpen ? 0 : -280,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
          }
        }}
      >
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        <div 
          className="relative h-full z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-20 bg-black border-b border-[#00FFD1]/10" />
          
          <div className="overflow-y-auto h-[calc(100vh-80px)] pt-3 px-4 pb-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {mints.map((mint) => (
                <motion.div
                  key={mint.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-black/50 rounded-lg p-2 border border-[#00FFD1]/10"
                >
                  <div className="relative aspect-square w-full mb-2 rounded-md overflow-hidden">
                    <Image
                      src={mint.image}
                      alt={`NFT by ${mint.wallet}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400">{mint.wallet}</span>
                    <span className="text-xs text-[#00FFD1]">
                      {mint.timestamp ? `${Math.floor((Date.now() - mint.timestamp) / 1000)}s ago` : ''}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  )
} 