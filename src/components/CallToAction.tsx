'use client'
import { motion } from 'framer-motion'

export function CallToAction() {
  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6">
      {/* Background gradient effect with lower z-index */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 -z-10" />
      
      <div className="relative max-w-4xl mx-auto text-center z-20">
        {/* Title with white text and text shadow */}
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white"
          style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
          }}
        >
          Join the Neural Creative Revolution
        </motion.h2>

        {/* Subtitle with white text */}
        <motion.p 
          className="text-lg md:text-xl text-white mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Transform your creative process with AI-powered NFT generation
        </motion.p>

        {/* Buttons with improved contrast */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          {/* BUY $MENTHOL Button */}
          <motion.button 
            className="w-full md:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/20 
                      px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            BUY $MENTHOL
          </motion.button>

          {/* Try Menthol Button */}
          <motion.a 
            className="w-full md:w-auto border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 
                     rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Try Menthol
          </motion.a>
        </div>
      </div>
    </section>
  )
} 