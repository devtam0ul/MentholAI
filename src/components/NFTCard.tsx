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
    <div className="group relative">
      {/* Animated glow effects container */}
      <div className="absolute -inset-[8px] z-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {/* Base glow */}
        <div className="absolute inset-0 bg-[#00FFD1] rounded-xl blur-2xl opacity-40" />
        
        {/* Animated glow ring */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-conic from-[#00FFD1] via-[#00FFD1]/10 to-[#00FFD1] rounded-xl blur-xl opacity-70"
        />
      </div>
      
      {/* Card content */}
      <motion.div
        className="relative rounded-xl overflow-hidden bg-black border border-[#00FFD1]/10
                   group-hover:border-[#00FFD1] transition-all duration-300 z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                      bg-gradient-to-t from-[#00FFD1]/30 via-transparent to-transparent 
                      transition-opacity duration-300" />

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
            <span key={i} className="text-[#00FFD1] text-sm 
                                   group-hover:animate-pulse 
                                   group-hover:text-[#00FFD1]">★</span>
          ))}
        </div>

        {/* Code prompt */}
        <div className="bg-black/90 p-2 group-hover:bg-black/95 transition-colors">
          <code className="text-xs text-[#00FFD1]/80 font-mono block overflow-hidden 
                         text-ellipsis whitespace-nowrap group-hover:text-[#00FFD1]">
            {prompt}
          </code>
        </div>

        {/* Wallet info */}
        <div className="p-2 bg-black/80 backdrop-blur-sm flex justify-between items-center 
                      group-hover:bg-black/90 transition-colors">
          <p className="font-mono text-xs text-[#00FFD1] group-hover:text-[#00FFD1]">{wallet}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs bg-[#00FFD1]/10 hover:bg-[#00FFD1]/30 text-[#00FFD1] 
                     px-2 py-0.5 rounded-full font-medium transition-colors
                     hover:shadow-[0_0_15px_rgba(0,255,209,0.4)]"
          >
            View NFT
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
} 