'use client'
import { motion } from 'framer-motion'

export default function QuantumEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Quantum particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00FFD1]/20 rounded-full blur-sm"
            animate={{
              x: ['0%', '100%', '0%'],
              y: ['0%', '100%', '0%'],
              scale: [1, 2, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Quantum grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FFD1/5_1px,transparent_1px),linear-gradient(to_bottom,#00FFD1/5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#00FFD1]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#00FFD1]/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Quantum waves */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, #00FFD1 0%, transparent 60%)',
            'radial-gradient(circle at 70% 70%, #00FFD1 0%, transparent 60%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
} 