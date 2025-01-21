'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

interface NFTModalProps {
  isOpen: boolean
  onClose: () => void
  image: string
  prompt: string
  wallet: string
}

export function NFTModal({ isOpen, onClose, image, prompt, wallet }: NFTModalProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101]
                     w-[min(90vw,500px)] bg-black/40 backdrop-blur-md rounded-2xl border border-[#00FFD1]/20
                     overflow-hidden shadow-2xl shadow-[#00FFD1]/10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 text-[#00FFD1]/60 hover:text-[#00FFD1] 
                       bg-black/40 rounded-full z-10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col">
              {/* Image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image}
                  alt="NFT Preview"
                  fill
                  sizes="(max-width: 500px) 90vw, 500px"
                  quality={90}
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Details */}
              <div className="p-3 bg-black/60 backdrop-blur-sm border-t border-[#00FFD1]/10">
                {/* Code prompt */}
                <div className="bg-black/40 rounded-lg p-3 border border-[#00FFD1]/10 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                      <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-[#00FFD1]/50 text-xs font-mono">menthol.generate</span>
                  </div>
                  <code className="text-xs text-[#00FFD1]/80 font-mono block">
                    {prompt}
                  </code>
                </div>

                {/* Wallet */}
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xs text-[#00FFD1]/80">{wallet}</div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#00FFD1] text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 