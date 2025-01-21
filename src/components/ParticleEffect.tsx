'use client'
import { motion } from 'framer-motion'

const nftData = [
  {
    image: "/nft1.png",
    wallet: "0x7C...3Ae9",
    pseudonym: "CyberAlchemist",
    rating: 5,
    prompt: "await menthol.generate({prompt: \"cyberpunk s"
  },
  {
    image: "/nft2.png",
    wallet: "0x4F...8Bd2",
    pseudonym: "QuantumDreamer",
    rating: 5,
    prompt: "const entity = await menthol.create({base: \""
  },
  {
    image: "/nft3.png",
    wallet: "0x2A...9Cf5",
    pseudonym: "NeonSamurai",
    rating: 5,
    prompt: "// Generate cybernetic entities\nconst result = await menthol.compose({subjec"
  }
]

export function ParticleEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00FFD1]/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
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