import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-10 max-w-4xl mx-auto"
      >
        <div className="relative">
          <h1 className="text-[#00FFD1] text-8xl font-extrabold mb-6 tracking-tight leading-tight">
            Menthol
            <div className="absolute -inset-1 bg-[#00FFD1]/20 blur-3xl -z-10" />
          </h1>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl font-bold mb-8 tracking-tight leading-tight bg-gradient-to-r from-white via-white to-gray-400 text-transparent bg-clip-text"
        >
          Quantum-Powered AI NFT Genesis Platform
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Revolutionizing digital creativity through quantum-powered AI and 
          blockchain technology
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-6 justify-center"
        >
          <button className="bg-[#00FFD1] text-black px-8 py-4 rounded-lg hover:bg-[#00E6BD] transition-all flex items-center gap-2 font-medium group shadow-lg shadow-[#00FFD1]/20">
            Get Started
            <motion.svg 
              className="w-5 h-5"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </button>
          <button className="border border-[#00FFD1]/20 text-white px-8 py-4 rounded-lg hover:bg-[#00FFD1]/5 transition-all font-medium backdrop-blur-sm">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
} 