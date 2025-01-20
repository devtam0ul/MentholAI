'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TokenomicsChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="relative aspect-square w-full max-w-md mx-auto">
        <div className="absolute inset-0 rounded-full bg-[#00FFD1]" />
        <div className="absolute inset-[10%] rounded-full bg-black" />
      </div>
    )
  }

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      {/* Animated ring effects */}
      <motion.div 
        className="absolute inset-[-10%] rounded-full border-2 border-[#00FFD1]/20"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute inset-[-5%] rounded-full border-2 border-[#00FFD1]/30"
        animate={{ 
          rotate: -360,
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* Main chart */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-[#00FFD1]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      />
      <motion.div 
        className="absolute inset-[10%] rounded-full bg-black"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
      />
      
      {/* Center content */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-center">
          <motion.div 
            className="text-[#00FFD1] text-6xl font-bold"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            90%
          </motion.div>
          <motion.div 
            className="text-gray-400 text-sm mt-2"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            Public Sale
          </motion.div>
        </div>
      </motion.div>
      
      {/* Quantum particle effects */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00FFD1] rounded-full"
          style={{
            left: `${50 + 35 * Math.cos(i * Math.PI / 4)}%`,
            top: `${50 + 35 * Math.sin(i * Math.PI / 4)}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
} 