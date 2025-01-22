'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface AvatarProps {
  className?: string
  size?: number
  animate?: boolean
}

export default function Avatar({ className = '', size = 120, animate = true }: AvatarProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src="/menthol-avatar.png"
          alt="Menthol AI Avatar"
          width={size}
          height={size}
          className="rounded-2xl"
          priority
        />
      </div>
    )
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial={animate ? { scale: 0.9, y: 20 } : undefined}
      animate={animate ? { scale: 1, y: 0 } : undefined}
      transition={{ 
        duration: 0.5,
        repeat: animate ? Infinity : undefined,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <Image
        src="/menthol-avatar.png"
        alt="Menthol AI Avatar"
        width={size}
        height={size}
        className="rounded-2xl"
        priority
      />
      <motion.div
        className="absolute -inset-1 bg-[#00FFD1]/20 blur-xl -z-10"
        animate={animate ? { 
          opacity: [0.2, 0.4, 0.2],
          scale: [0.9, 1.1, 0.9]
        } : undefined}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </motion.div>
  )
} 