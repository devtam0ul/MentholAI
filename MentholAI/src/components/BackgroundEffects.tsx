'use client'
import { motion } from 'framer-motion'

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
                      from-[#00FFD1]/5 via-transparent to-transparent animate-pulse"
           style={{ animationDuration: '3s' }} 
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] animate-float" />
      
      {/* Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 
                   bg-[#00FFD1]/5 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 
                   bg-[#00FFD1]/5 blur-[120px] rounded-full"
      />
    </div>
  )
} 