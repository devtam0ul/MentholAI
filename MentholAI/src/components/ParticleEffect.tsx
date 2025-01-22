'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const nftData = [
  {
    image: "/nft1.png",
    wallet: "0x7C...3Ae9",
    rating: 5,
    prompt: "await menthol.generate({prompt: \"cyberpunk s"
  },
  {
    image: "/nft2.png",
    wallet: "0x4F...8Bd2",
    rating: 5,
    prompt: "const entity = await menthol.create({base: \""
  },
  {
    image: "/nft3.png",
    wallet: "0x2A...9Cf5",
    rating: 5,
    prompt: "// Generate cybernetic entities\nconst result = await menthol.compose({subjec"
  }
]

export function ParticleEffect() {
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 }) // Default values

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })

      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00FFD1]/20 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
} 