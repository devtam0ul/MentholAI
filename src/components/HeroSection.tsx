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
import Link from 'next/link'
import { useTypewriter } from '@/hooks/useTypewriter'
import { Poppins } from 'next/font/google'
import { LiveMintFeed } from './LiveMintFeed'

const poppins = Poppins({
  weight: ['900'],  // Extra Bold weight
  subsets: ['latin'],
  display: 'swap',
})

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

const facts = [
  "Hi! I'm Menthol, your creative AI companion!",
  "Did you know quantum computers can process NFT data across infinite parallel universes?",
  "I dream in quantum-entangled pixels and create art beyond dimensions",
  "Each NFT is like a unique fingerprint of the digital multiverse",
  "Our quantum-secured NFTs are virtually impenetrable",
  "I see art in dimensions that humans haven't discovered yet",
  "Your creations exist in multiple quantum states simultaneously",
  "Together, we'll revolutionize digital art through quantum computing",
  "I'm constantly learning from artists across the quantum network",
  "Let's push the boundaries of what's possible in digital creation"
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dimensions, setDimensions] = useState({ width: '100%', height: '100%' })

  const typedText = useTypewriter(facts, 40, 3000)

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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/50" />
      
      <div className="absolute inset-0 overflow-hidden -z-10">
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
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#00FFD1]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#00FFD1]/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
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

      {/* Add LiveMintFeed back on the left side */}
      <div className="fixed left-0 top-0 h-full z-50">
        <LiveMintFeed />
      </div>

      {/* Main content with mascot and chat bubble */}
      <motion.div 
        className="text-center space-y-8 max-w-4xl mx-auto relative z-50 mt-[80px] md:mt-[100px]"
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

            {/* Main text with white outline */}
            <span className="relative block text-6xl md:text-9xl tracking-tight leading-none">
              <span 
                className={`relative text-black ${poppins.className} font-black`}
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                  WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)',
                  letterSpacing: '-0.02em',
                  fontWeight: 900
                }}
              >
                Menthol
              </span>
            </span>
          </motion.h1>

          {/* Mascot and chat bubble */}
          <div className="relative">
            <Image
              src="/mascot.png"
              alt="Menthol Mascot"
              width={72}
              height={72}
              className="animate-float"
            />
            <div className="absolute -right-4 -top-4 bg-black/80 text-white text-sm px-3 py-1 rounded-lg">
              Let's create!
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Quantum-Powered NFT Platform
        </h2>

        {/* Description */}
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Menthol integrates machine learning with decentralized networks, empowering 
          creators with powerful tools for artistic expression and global collaboration.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-12">
          {/* BUY $MENTHOL Button */}
          <Link href="/buy" className="group relative w-full md:w-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/0 via-white/50 to-white/0 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
              
              <div className="relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-bold text-lg text-center hover:bg-white/20 transition-all">
                BUY $MENTHOL
                <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </motion.div>
          </Link>

          {/* Try Menthol Button */}
          <Link 
            href="https://github.com/mentholai/menthol"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/0 via-white/50 to-white/0 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
              
              <div className="relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-bold text-lg text-center hover:bg-white/20 transition-all">
                Try Menthol
                <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </motion.div>
          </Link>
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

      {/* Keep only ONE instance of EnhancedStatsBar here */}
      <div className="absolute top-[120px] md:top-[140px] left-1/2 -translate-x-1/2 w-full z-10">
        <EnhancedStatsBar />
      </div>
    </div>
  )
} 