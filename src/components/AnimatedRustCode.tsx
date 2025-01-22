'use client'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'

const CODE = `// Neural NFT Generation
async fn generate_nft(prompt: &str) -> NFT {
    let thought_vector = neural_processor.process_input(prompt);
    let neural_vector = neural_processor.transform(thought_vector);
    let image = image_generator.create(neural_vector);
    
    NFT {
        image,
        metadata: generate_metadata(prompt),
        blockchain_proof: mint_on_solana()
    }
}`

export function AnimatedRustCode() {
  const [displayedCode, setDisplayedCode] = useState('')
  const controls = useAnimationControls()

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= CODE.length) {
        setDisplayedCode(CODE.slice(0, index))
        index++
      } else {
        clearInterval(interval)
        controls.start({ opacity: [0.5, 1], transition: { duration: 2, repeat: Infinity } })
      }
    }, 30) // Adjust typing speed here

    return () => clearInterval(interval)
  }, [controls])

  return (
    <div className="relative bg-black/90 rounded-lg border border-[#00FFD1]/20 overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/90 border-b border-[#00FFD1]/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-[#00FFD1]/50 text-sm font-mono ml-2">neural_nft_generation.rs</span>
      </div>
      
      {/* Code content */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-[#00FFD1] font-mono text-sm">
          <motion.code animate={controls}>
            {displayedCode}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-[#00FFD1] ml-1"
            />
          </motion.code>
        </pre>
      </div>
    </div>
  )
} 