'use client'
import { motion } from 'framer-motion'

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <motion.div
          className="w-8 h-8 border-2 border-[#00FFD1]/20 border-t-[#00FFD1] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[#00FFD1]/10 blur-xl" />
      </div>
    </div>
  )
} 