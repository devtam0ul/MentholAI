'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface NFTCardProps {
  image: string
  wallet: string
  prompt: string
  rating: number
}

export function NFTCard({ image, wallet, prompt, rating }: NFTCardProps) {
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-black/40 border border-[#00FFD1]/10"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image 
        src={image}
        alt={`NFT by ${wallet}`}
        width={300}
        height={300}
        className="w-full aspect-square object-cover"
      />
      
      {/* Rating stars */}
      <div className="absolute top-3 right-3 flex gap-0.5">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-[#00FFD1] text-sm">★</span>
        ))}
      </div>

      {/* Code prompt */}
      <div className="bg-black/80 p-2">
        <code className="text-xs text-[#00FFD1]/80 font-mono block overflow-hidden text-ellipsis whitespace-nowrap">
          {prompt}
        </code>
      </div>

      {/* Wallet info */}
      <div className="p-2 bg-black/60 backdrop-blur-sm flex justify-between items-center">
        <p className="font-mono text-xs text-[#00FFD1]">{wallet}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xs bg-[#00FFD1]/10 hover:bg-[#00FFD1]/20 text-[#00FFD1] 
                   px-2 py-0.5 rounded-full font-medium transition-colors"
        >
          View NFT
        </motion.button>
      </div>
    </motion.div>
  )
} 