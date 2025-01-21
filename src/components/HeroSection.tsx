'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Avatar from '@/components/Avatar'
import Image from 'next/image'
import { ChevronDown, Sparkles, Globe2, Cpu, Zap, Layers } from 'lucide-react'
import { EnhancedStatsBar } from './EnhancedStatsBar'
import { AccessibleButton } from '@/components/AccessibleButton'
import { FeatureCard } from './FeatureCard'
import { LucideIcon } from 'lucide-react'

const words = [
  "Quantum-Powered NFT Platform",
  "Revolutionary Art Creation Suite",
  "Next-Gen NFT Minting Platform",
  "AI-Powered Creative Platform"
]

const features = [
  {
    iconType: 'zap',
    title: "Quantum Neural Processing",
    description: "Advanced AI that generates unique, context-aware NFTs using quantum computing principles."
  },
  {
    iconType: 'cpu',
    title: "AI-Driven Creativity",
    description: "Intelligent algorithms that transform text prompts into stunning digital artworks."
  },
  {
    iconType: 'layers',
    title: "Blockchain Integration",
    description: "Seamless Solana blockchain minting and verification of your unique digital assets."
  }
] as const

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dimensions, setDimensions] = useState({ width: '100%', height: '100%' })

  useEffect(() => {
    setMounted(true)
    // Set initial dimensions
    setDimensions({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`
    })

    const handleResize = () => {
      setDimensions({
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-24 overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/50" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FFD1]/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#00FFD1]/5 blur-[120px] rounded-full animate-orbit-1" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#00FFD1]/5 blur-[120px] rounded-full animate-orbit-2" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-float" />
      </div>

      {/* Stats bar - refined styling */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-center z-30">
        <EnhancedStatsBar />
      </div>

      {/* Tech indicator - moved to top left */}
      <div className="absolute left-24 top-24 hidden md:block">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-[#00FFD1]/20 w-16 h-16"
        >
          <Cpu className="w-full h-full" />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 max-w-4xl mx-auto relative z-10 mt-16"
      >
        <div className="relative inline-flex items-center justify-center gap-2">
          <motion.h1 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Deep background glow */}
            <div className="absolute -inset-8 bg-[#00FFD1]/5 blur-[100px]" />
            
            {/* Middle layer glow with animation */}
            <motion.div
              className="absolute -inset-6 bg-[#00FFD1]/10 blur-[50px]"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Closer glow for sharper edges */}
            <div className="absolute -inset-4 bg-[#00FFD1]/15 blur-2xl" />
            
            {/* Bright center glow */}
            <div className="absolute -inset-2 bg-[#00FFD1]/20 blur-xl" />

            {/* Main text stays clean */}
            <span className="relative block text-white text-9xl font-extrabold tracking-tight leading-none">
              Menthol
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0,
              y: [0, -8, 0]
            }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative w-32 h-32 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[#00FFD1]/10 rounded-full blur-xl animate-pulse" />
            
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00FFD1]/30 rounded-full blur-sm" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00FFD1]/30 rounded-full blur-sm" />
            </div>
            
            <Image
              src="/menthol-avatar.png"
              alt="Menthol Mascot"
              width={120}
              height={120}
              className="object-contain relative z-10 hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        </div>
        
        <div className="relative h-[72px]">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl font-bold mb-8 tracking-tight leading-tight bg-gradient-to-r from-white via-white to-gray-400 text-transparent bg-clip-text"
            >
              {words[currentIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>
        
        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-16 leading-relaxed font-light animate-fade-in [animation-delay:400ms]">
          Menthol integrates machine learning with decentralized networks, empowering creators with powerful tools for artistic expression and global collaboration.
        </p>
        
        <div className="flex gap-6 justify-center animate-fade-in [animation-delay:600ms]">
          {/* BUY $MENTHOL Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative"
          >
            {/* Enhanced outer glow effect */}
            <div className="absolute -inset-1 bg-[#00FFD1]/20 rounded-lg blur-2xl opacity-75 group-hover:opacity-100 animate-pulse transition duration-300" />
            
            {/* Main button */}
            <div className="relative px-8 py-4 bg-[#00FFD1] rounded-lg flex items-center gap-2 overflow-hidden">
              <span className="text-black font-bold text-lg z-10">
                BUY $MENTHOL
              </span>
              <motion.span
                className="text-black"
                animate={{
                  x: [0, 4, 0],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </div>

            {/* Hover ring effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00FFD1]/0 via-[#00FFD1]/10 to-[#00FFD1]/0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
          </motion.button>

          {/* Try Menthol Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative"
          >
            {/* Neon border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFD1]/0 via-[#00FFD1]/50 to-[#00FFD1]/0 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
            
            {/* Main button */}
            <div className="relative px-8 py-4 bg-black/40 backdrop-blur-sm border border-[#00FFD1]/50 rounded-lg text-[#00FFD1] font-bold text-lg">
              Try Menthol
              
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-lg bg-[#00FFD1]/5 opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Particles - adjusted for better distribution */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            y: [-20, 20],
            x: [-20, 20],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-2 h-2 bg-[#00FFD1]/30 rounded-full blur-sm left-[40%] top-[45%]"
        />
        <motion.div 
          animate={{
            y: [20, -20],
            x: [20, -20],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-2 h-2 bg-[#00FFD1]/30 rounded-full blur-sm right-[40%] bottom-[45%]"
        />
      </div>

      {/* Multiple scroll indicators with different positions and timings */}
      {/* Center bottom indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50"
      >
        <ChevronDown 
          className="w-8 h-8 text-[#00FFD1]/70 hover:text-[#00FFD1] transition-colors cursor-pointer"
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Left side indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute bottom-24 left-24 z-20"
      >
        <ChevronDown 
          className="w-6 h-6 text-[#00FFD1]/20 hover:text-[#00FFD1]/40 transition-colors cursor-pointer" 
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Right side indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-24 right-24"
      >
        <ChevronDown 
          className="w-6 h-6 text-[#00FFD1]/20 hover:text-[#00FFD1]/40 transition-colors cursor-pointer" 
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Bottom corners indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 6, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute bottom-8 left-8"
      >
        <ChevronDown 
          className="w-4 h-4 text-[#00FFD1]/10 hover:text-[#00FFD1]/30 transition-colors cursor-pointer" 
          strokeWidth={1.5}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 6, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.75
        }}
        className="absolute bottom-8 right-8"
      >
        <ChevronDown 
          className="w-4 h-4 text-[#00FFD1]/10 hover:text-[#00FFD1]/30 transition-colors cursor-pointer" 
          strokeWidth={1.5}
        />
      </motion.div>
    </div>
  )
} 