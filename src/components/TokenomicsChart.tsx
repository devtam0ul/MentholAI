'use client'
import { motion } from 'framer-motion'

export default function TokenomicsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full aspect-square max-w-md mx-auto"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-[#00FFD1]/5 blur-[100px] animate-pulse" />
      
      {/* Dynamic outer rings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            border: `${1 + i * 0.5}px solid rgba(0, 255, 209, ${0.1 - i * 0.02})`,
            borderRadius: '50%',
            transform: `scale(${1 + i * 0.08})`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1 + i * 0.08, 1 + i * 0.1, 1 + i * 0.08],
          }}
          transition={{
            rotate: {
              duration: 30 + i * 5,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }
          }}
        />
      ))}

      {/* Main circle with enhanced effects */}
      <motion.div
        className="absolute inset-0 rounded-full bg-black/80 backdrop-blur-xl"
        initial={{ borderWidth: 0 }}
        animate={{ 
          borderWidth: [3, 4, 3],
          borderColor: ['rgba(0, 255, 209, 0.8)', 'rgba(0, 255, 209, 0.4)', 'rgba(0, 255, 209, 0.8)'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          border: '4px solid rgba(0, 255, 209, 0.6)',
          boxShadow: `
            0 0 20px rgba(0, 255, 209, 0.2),
            0 0 40px rgba(0, 255, 209, 0.1),
            inset 0 0 30px rgba(0, 255, 209, 0.1)
          `
        }}
      >
        {/* Enhanced content with better animations */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
            className="relative"
          >
            <span className="text-7xl font-bold text-[#00FFD1] tracking-tighter">
              90%
            </span>
            {/* Subtle glow behind text */}
            <div className="absolute inset-0 blur-md bg-[#00FFD1]/20 -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="mt-2 text-gray-400 font-medium tracking-wide"
          >
            Public Sale
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive hover effect for the entire component */}
      <motion.div
        className="absolute inset-0 rounded-full"
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      />

      {/* Ambient particle effects */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-[#00FFD1]"
          style={{
            top: '50%',
            left: '50%',
            transform: `rotate(${i * 30}deg) translateX(${140 + Math.random() * 20}px)`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>
  )
} 