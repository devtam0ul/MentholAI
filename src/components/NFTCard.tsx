'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface NFTCardProps {
  image: string
  wallet: string
  prompt: string
  rating: number
}

const formatQuantumCode = (prompt: string) => {
  // Add line breaks and indentation for better code presentation
  if (prompt.includes("menthol.generate")) {
    return `const result = await menthol.generate({
  prompt: "cyberpunk samurai warriors",
  style: "cinematic",
  enhancers: [
    "quantum",
    "highDetail",
    "neuralUpscale"
  ],
  params: {
    quantum: {
      entanglement: 0.8,
      superposition: true
    },
    resolution: "8K",
    seed: 1337
  }
})`
  } else if (prompt.includes("menthol.create")) {
    return `const entity = await menthol.create({
  base: "ethereal being",
  attributes: {
    form: "energy manifestation",
    colors: ["cyan", "white"],
    environment: "cosmic void"
  },
  quantum: {
    waveFn: "psi",
    collapse: false
  }
})`
  } else {
    return `// Generate cybernetic entities
const result = await menthol.compose({
  subjects: ["human", "android"],
  style: "futuristic",
  mergeParams: {
    blendMode: "quantum",
    intensity: 0.8,
    neuralNet: "v2.5"
  },
  quantumParams: {
    superposition: true,
    entanglement: 0.9
  }
})`
  }
}

export function NFTCard({ image, wallet, prompt, rating }: NFTCardProps) {
  const formattedCode = formatQuantumCode(prompt)
  
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-black border border-[#00FFD1]/10 hover:border-[#00FFD1]/30 h-full flex flex-col"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image Container - Fixed height */}
      <div className="relative w-full h-[300px]">
        <Image 
          src={image}
          alt={`NFT by ${wallet}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating stars */}
        <div className="absolute top-4 right-4 flex gap-1 backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
          {[...Array(rating)].map((_, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-[#00FFD1]"
            >
              ★
            </motion.span>
          ))}
        </div>
      </div>

      {/* Content Container - Flex grow to fill space */}
      <div className="flex-1 flex flex-col bg-black">
        {/* Code prompt */}
        <div className="flex-1 p-4 bg-black border-t border-[#00FFD1]/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <span className="text-[#00FFD1]/50 text-xs font-mono">menthol.generate</span>
          </div>
          <div className="h-[80px] overflow-y-auto">
            <code className="text-sm text-[#00FFD1]/80 font-mono block overflow-x-auto whitespace-pre scrollbar-thin scrollbar-thumb-[#00FFD1]/20 scrollbar-track-transparent">
              {formattedCode}
            </code>
          </div>
        </div>

        {/* Wallet address - Fixed height */}
        <div className="h-[60px] p-4 bg-black border-t border-[#00FFD1]/10">
          <div className="flex items-center justify-between">
            <p className="font-mono text-sm text-[#00FFD1]/80">{wallet}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs bg-[#00FFD1]/10 hover:bg-[#00FFD1]/20 text-[#00FFD1] px-3 py-1 rounded-full font-medium transition-colors"
            >
              View NFT
            </motion.button>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-[#00FFD1]/0 via-[#00FFD1]/10 to-[#00FFD1]/0 opacity-0 group-hover:opacity-100 transition-opacity blur pointer-events-none" />
      </div>
    </motion.div>
  )
} 