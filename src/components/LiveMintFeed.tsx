'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

// Helper function to generate random wallet address
function generateRandomWallet() {
  const chars = '0123456789abcdef'
  let wallet = '0x'
  // Generate 4 random characters
  for (let i = 0; i < 4; i++) {
    wallet += chars[Math.floor(Math.random() * chars.length)]
  }
  wallet += '...'
  // Generate 4 more random characters
  for (let i = 0; i < 4; i++) {
    wallet += chars[Math.floor(Math.random() * chars.length)]
  }
  return wallet
}

// Sample mint data with just images
const INITIAL_IMAGES = [
  "/nfts/nft1.png",
  "/nfts/nft2.png",
  "/nfts/nft3.png",
]

export function LiveMintFeed() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mints, setMints] = useState<Array<{ id: number; image: string; wallet: string; timestamp?: number }>>([])
  const [lastMintTime, setLastMintTime] = useState<number | null>(null)

  // Initialize mints after mount with random wallets
  useEffect(() => {
    setMounted(true)
    setMints(INITIAL_IMAGES.map(image => ({
      id: Date.now() + Math.random(),
      image,
      wallet: generateRandomWallet(),
      timestamp: Date.now(),
    })))
  }, [])

  // Simulate new mints coming in with random wallets
  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      const randomImage = INITIAL_IMAGES[Math.floor(Math.random() * INITIAL_IMAGES.length)]
      const newMint = {
        id: Date.now(),
        image: randomImage,
        wallet: generateRandomWallet(),
        timestamp: Date.now(),
      }
      
      setMints(prev => [newMint, ...prev].slice(0, 10))
      setLastMintTime(Date.now())
    }, 800) // Better balance of speed and readability

    return () => clearInterval(interval)
  }, [mounted])

  // Don't render anything until mounted
  if (!mounted) return null

  const toggleFeed = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Overlay for closing when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
          onClick={toggleFeed}
        />
      )}

      {/* Feed panel */}
      <motion.div
        className="fixed left-0 top-0 h-full w-[85vw] sm:w-[280px] md:w-[320px] bg-black/95 border-r border-[#00FFD1]/20 
                   backdrop-blur-md z-50 overflow-hidden"
        initial={{ x: -320 }}
        animate={{ 
          x: isOpen ? 0 : -320,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
          }
        }}
      >
        <div className="relative h-full" onClick={(e) => e.stopPropagation()}>
          {/* Header with close button */}
          <div className="h-20 bg-black border-b border-[#00FFD1]/10 flex items-center justify-between px-4">
            <span className="text-[#00FFD1] font-medium"></span>
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-80px)] pt-8 px-2 sm:px-4 pb-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {mints.map((mint) => (
                <motion.div
                  key={mint.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }} // Smoother animation
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
                  <div className="flex items-center justify-between text-[11px] sm:text-xs">
                    <span className="font-mono text-gray-400 truncate max-w-[120px] sm:max-w-none">{mint.wallet}</span>
                    <span className="text-[#00FFD1]">
                      {mint.timestamp ? `${Math.floor((Date.now() - mint.timestamp) / 1000)}s ago` : ''}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Toggle button */}
      <motion.button
        className="fixed left-[280px] md:left-[320px] top-1/2 -translate-y-1/2 bg-black/80 text-[#00FFD1] 
                   px-2 md:px-3 py-4 md:py-6 rounded-r-lg border border-[#00FFD1]/20 
                   backdrop-blur-sm hover:bg-black/90 transition-colors z-[60] cursor-pointer select-none
                   min-w-[40px] min-h-[120px] flex items-center justify-center"
        onClick={toggleFeed}
        animate={{
          x: isOpen ? 0 : -320,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
          }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff0000] animate-[blink_0.8s_ease-in-out_infinite] 
                          shadow-[0_0_12px_rgba(255,0,0,0.8)] relative">
            <div className="absolute inset-0 rounded-full bg-[#ff0000]/60 blur-[3px]" />
          </div>
          <span className="vertical-text text-xs font-medium text-white">LIVE MINTS</span>
        </div>
      </motion.button>
    </>
  )
} 