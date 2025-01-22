'use client'
import { HeroSection } from '@/components/HeroSection'
import { CallToAction } from '@/components/CallToAction'
import { Icons } from '@/components/Icons'
import { FeatureCard } from '@/components/FeatureCard'
import { TokenomicsCard } from '@/components/TokenomicsCard'
import { Header } from '@/components/Header'
import { DynamicElements } from '@/components/DynamicElements'
import { ClientLayout } from '@/components/ClientLayout'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { AnimatedRustCode } from '@/components/AnimatedRustCode'
import Image from 'next/image'
import { NFTCard } from '@/components/NFTCard'
import { AudioPlayer } from '@/components/AudioPlayer'
import { Sparkles, Globe } from 'lucide-react'
import { NFTShowcase } from '@/components/NFTShowcase'
import { LiveMintFeed } from '@/components/LiveMintFeed'

const FEATURES = [
  {
    title: "Quantum Neural Processing",
    description: "Harness the power of quantum computing to generate unique, context-aware NFTs. Our advanced neural networks analyze patterns across multiple dimensions, ensuring each creation is truly one-of-a-kind and deeply meaningful to its owner."
  },
  {
    title: "AI-Driven Creativity",
    description: "Experience the next evolution in digital art creation. Our sophisticated AI algorithms transform your text prompts into stunning visual masterpieces, combining elements from millions of data points to generate unprecedented artistic expressions."
  },
  {
    title: "Blockchain Integration",
    description: "Seamlessly mint and verify your digital assets on the Solana blockchain. Enjoy lightning-fast transactions, minimal environmental impact, and bulletproof security while maintaining full ownership of your unique creations."
  }
]

const TOKENOMICS = {
  publicSale: {
    percentage: 90,
    title: "Public Sale",
    description: "Freely tradable on the open market"
  },
  teamAllocation: {
    percentage: 10,
    title: "Team Allocation", 
    description: "8% locked for 6 months, vested carefully"
  },
  fairLaunch: [
    "Launching on pump.fun",
    "100% fair launch",
    "No private sale",
    "Transparent token distribution"
  ]
}

const CODE_EXAMPLE = `
// Quantum NFT Generation
async fn generate_nft(prompt: &str) -> NFT {
    let thought_vector = neural_processor.process_input(prompt);
    let quantum_vector = quantum_processor.transform(thought_vector);
    let image = image_generator.create(quantum_vector);
    
    NFT {
        image,
        metadata: generate_metadata(prompt),
        blockchain_proof: mint_on_solana()
    }
}
`

const FEATURE_CARDS = [
  {
    icon: <Icons.Lightning />,
    title: "Quantum Neural Processing",
    description: "Advanced AI that generates unique, context-aware NFTs using quantum computing principles.",
    borderColor: "border-cyan-500/20"
  },
  {
    icon: <Icons.Chip />,
    title: "AI-Driven Creativity",
    description: "Intelligent algorithms that transform text prompts into stunning digital artworks.",
    borderColor: "border-emerald-500/20"
  },
  {
    icon: <Icons.Stack />,
    title: "Blockchain Integration",
    description: "Seamless Solana blockchain minting and verification of your unique digital assets.",
    borderColor: "border-purple-500/20"
  }
]

const TokenomicsChart = dynamic(() => import('@/components/TokenomicsChart'), {
  loading: () => <div className="w-full aspect-square bg-black/30 rounded-full animate-pulse" />
})

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const STATS = [
  {
    value: "8,888+",
    label: "Global Artists",
  },
  {
    value: "INFINITE",
    label: "AI Models",
  }
]

export default function Home() {
  return (
    <main className="relative">
      <ClientLayout>
        <LiveMintFeed />
        <Header />

        <HeroSection />

        {/* Revolutionary Features Section */}
        <section id="features" className="h-screen relative flex items-center justify-center overflow-hidden">
          {/* Dynamic background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#004D40]/20 to-black" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 relative"
            >
              <motion.div className="flex items-center justify-center gap-4">
                <motion.h2 
                  className="text-6xl font-bold mb-6 tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-[#00FFD1] to-white bg-clip-text text-transparent">
                    Revolutionary
                  </span>{" "}
                  Features
                </motion.h2>

                {/* Menthol Avatar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative w-24 h-24 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [-3, 3, -3],
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Image
                      src="/menthol-avatar.png"
                      alt="Menthol Mascot"
                      width={96}
                      height={96}
                      className="relative z-50"
                      style={{ 
                        filter: 'drop-shadow(0 0 10px rgba(0, 255, 209, 0.3))'
                      }}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.p 
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Experience the convergence of quantum computing, artificial intelligence, and blockchain technology 
                as we revolutionize the future of digital art creation and ownership.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {FEATURES.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group h-full"
                >
                  {/* Glowing background effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFD1]/0 via-[#00FFD1]/10 to-[#00FFD1]/0 
                                 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Card content */}
                  <div className="relative bg-black/40 border border-[#00FFD1]/10 rounded-xl p-8 
                                 backdrop-blur-sm hover:bg-black/50 transition-all h-full flex flex-col">
                    {/* Icon with animation */}
                    <motion.div
                      className="w-12 h-12 mb-6 text-[#00FFD1] shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {feature.title === "Quantum Neural Processing" ? (
                        <Icons.Lightning className="w-full h-full" />
                      ) : feature.title === "AI-Driven Creativity" ? (
                        <Icons.Chip className="w-full h-full" />
                      ) : (
                        <Icons.Stack className="w-full h-full" />
                      )}
                    </motion.div>

                    {/* Title with hover effect */}
                    <motion.h3 
                      className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 
                                 bg-clip-text text-transparent group-hover:from-[#00FFD1] group-hover:to-white
                                 transition-all duration-300 shrink-0"
                    >
                      {feature.title}
                    </motion.h3>

                    {/* Description with code-writing effect */}
                    <motion.p 
                      className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow font-mono text-xs"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                    >
                      <motion.span
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.3 + 0.5,
                          ease: "easeInOut"
                        }}
                        className="inline-block whitespace-pre-wrap"
                      >
                        {`> ${feature.description}`}
                      </motion.span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="inline-block w-1.5 h-3 bg-[#00FFD1] ml-1 align-middle"
                      />
                    </motion.p>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 border border-[#00FFD1]/5 rounded-full overflow-hidden group-hover:border-[#00FFD1]/20 transition-all duration-500">
                      {/* Animated circular gradient */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          background: [
                            "conic-gradient(from 0deg, rgba(0,255,209,0.05) 0%, transparent 60%)",
                            "conic-gradient(from 360deg, rgba(0,255,209,0.05) 0%, transparent 60%)"
                          ],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Pulsing dot */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#00FFD1]/50 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    </div>

                    <div className="absolute bottom-4 left-4 w-16 h-16 border border-[#00FFD1]/5 rounded-full overflow-hidden group-hover:border-[#00FFD1]/20 transition-all duration-500">
                      {/* Scanning line effect */}
                      <motion.div
                        className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FFD1]/20 to-transparent"
                        animate={{
                          top: ["-10%", "110%"]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Rotating segments */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute top-0 left-1/2 h-1/2 w-[1px] bg-[#00FFD1]/10 origin-bottom"
                            style={{
                              transform: `rotate(${i * 90}deg)`
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Particle effects on hover */}
                  <motion.div
                    className="absolute -inset-4 pointer-events-none"
                    animate={{
                      background: [
                        "radial-gradient(circle at center, rgba(0,255,209,0) 0%, rgba(0,255,209,0) 100%)",
                        "radial-gradient(circle at center, rgba(0,255,209,0.1) 0%, rgba(0,255,209,0) 100%)",
                        "radial-gradient(circle at center, rgba(0,255,209,0) 0%, rgba(0,255,209,0) 100%)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Interactive floating elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#00FFD1]/20 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="h-screen px-6 flex items-center justify-center relative">
          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-6xl font-bold mb-4 flex items-center justify-center tracking-tight">
                <motion.span 
                  className="text-[#00FFD1] mr-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  $
                </motion.span>
                <span className="font-extrabold bg-gradient-to-r from-[#00FFD1] via-white to-white bg-clip-text text-transparent">MENTHOL</span>
                <span className="ml-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">Tokenomics</span>
              </h2>
              <motion.p 
                className="text-lg text-gray-400 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Fair launch with transparent token distribution
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left side - Information */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Public Sale Card */}
                <motion.div 
                  className="bg-black/40 rounded-lg p-3 border border-[#00FFD1]/10 backdrop-blur-sm hover:bg-black/50 transition-all"
                  whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 209, 0.2)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icons.Wallet className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-medium text-white">Public Sale</h3>
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-bold text-[#00FFD1]">90%</span>
                    <span className="text-gray-400 text-sm pb-1 font-mono">
                      market.tradable = true;
                      restrictions = "none";
                    </span>
                  </div>
                </motion.div>

                {/* Team Allocation Card */}
                <motion.div 
                  className="bg-black/40 rounded-lg p-3 border border-[#00FFD1]/10 backdrop-blur-sm hover:bg-black/50 transition-all"
                  whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 209, 0.2)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icons.Stack className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-medium text-white">Team Allocation</h3>
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-bold text-[#00FFD1]">10%</span>
                    <span className="text-gray-400 text-sm pb-1 font-mono">
                      lock(tokens: 8%, duration: "6_months");
                    </span>
                  </div>
                </motion.div>

                {/* Fair Launch Details Card */}
                <motion.div 
                  className="bg-black/40 rounded-lg p-3 border border-[#00FFD1]/10 backdrop-blur-sm hover:bg-black/50 transition-all"
                  whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 209, 0.2)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icons.Clipboard className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-medium text-white">Fair Launch Details</h3>
                  </div>
                  <ul className="space-y-2 font-mono">
                    {[
                      'platform.launch("pump.fun");',
                      'fairness.set(100);',
                      'privateSale.enabled = false;',
                      'distribution.mode = "transparent";'
                    ].map((item) => (
                      <motion.li 
                        key={item} 
                        className="flex items-center gap-2 text-gray-400 text-sm"
                        whileHover={{ x: 5, color: '#fff' }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-[#00FFD1] text-base">></span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Move Buy button here with adjusted positioning */}
                <Link
                  href="/buy"
                  className="mt-24 relative group inline-block w-full"
                >
                  {/* Center container */}
                  <div className="flex justify-center">
                    {/* Main button with dark theme - removed bg-black/80 */}
                    <div className="relative backdrop-blur-sm px-8 py-3 rounded-full font-semibold text-[#00FFD1] text-base hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-2 z-20 border border-[#00FFD1]/50">
                      BUY $MENTHOL 
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>

                    {/* Glow effects */}
                    <div className="absolute inset-0 rounded-full border border-[#00FFD1]/50" />
                    <div className="absolute -inset-0.5 rounded-full border border-[#00FFD1]/30 blur-[1px]" />
                    <div className="absolute -inset-1 rounded-full border border-[#00FFD1]/10 blur-[2px]" />

                    <motion.div
                      className="absolute -inset-2 bg-[#00FFD1]/10 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <motion.div
                      className="absolute -inset-4 bg-[#00FFD1]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#00FFD1]/0 via-[#00FFD1]/10 to-[#00FFD1]/0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />
                  </div>
                </Link>
              </motion.div>

              {/* Right side - Chart */}
              <motion.div 
                className="flex flex-col items-center justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="max-w-[400px] aspect-square w-full mt-10">
                  <TokenomicsChart />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advanced Technology Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24 px-6 relative bg-black"
        >
          {/* Glow effect background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#00FFD1]/5 blur-[100px] opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#004D40]/20 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {/* Title without Avatar */}
              <div className="flex items-center justify-center gap-4">
                <h2 className="text-7xl font-bold bg-gradient-to-r from-[#00FFD1] to-white bg-clip-text text-transparent leading-normal">
                  Advanced Technology
                </h2>
              </div>

              {/* Enhanced description with animated reveal */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-4xl mx-auto space-y-4 mt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                  <motion.div 
                    className="p-3 rounded-lg bg-black/20 border border-[#00FFD1]/10"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 209, 0.3)' }}
                  >
                    <h3 className="text-[#00FFD1] font-semibold mb-1 text-sm">Rust-Powered Core</h3>
                    <p className="text-gray-400 text-xs">
                      Built with blazing-fast, memory-safe Rust for maximum performance and security
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="p-3 rounded-lg bg-black/20 border border-[#00FFD1]/10"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 209, 0.3)' }}
                  >
                    <h3 className="text-[#00FFD1] font-semibold mb-1 text-sm">Quantum Computing</h3>
                    <p className="text-gray-400 text-xs">
                      Leveraging quantum algorithms to unlock limitless creative possibilities
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="p-3 rounded-lg bg-black/20 border border-[#00FFD1]/10"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 209, 0.3)' }}
                  >
                    <h3 className="text-[#00FFD1] font-semibold mb-1 text-sm">AI Models</h3>
                    <p className="text-gray-400 text-xs">
                      Neural networks trained on vast datasets for next-gen art creation
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Code block with enhanced styling and avatar */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow effect behind code block */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFD1]/30 to-[#004D40]/30 rounded-lg blur-lg opacity-75" />
              
              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <AnimatedRustCode />
                </div>
                
                {/* Avatar next to code */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative w-32 h-32 flex-shrink-0 hidden lg:flex items-center justify-center"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [-5, 365, -5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      rotate: {
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        times: [0, 0.5, 1]
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-[#00FFD1]/20 blur-2xl rounded-full" />
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(0, 255, 209, 0.2)",
                          "0 0 60px rgba(0, 255, 209, 0.4)",
                          "0 0 20px rgba(0, 255, 209, 0.2)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <Image
                        src="/menthol-avatar.png"
                        alt="Menthol Mascot"
                        width={128}
                        height={128}
                        className="relative z-50"
                        style={{ 
                          filter: 'drop-shadow(0 0 10px rgba(0, 255, 209, 0.3))'
                        }}
                        priority
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Community Generations Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-[#004D40]/5 blur-3xl" />
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-[#00FFD1]">Community</span> Generations
              </h2>
              <p className="text-gray-400 text-xl">
                Explore the incredible creations from our community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  image: "/nft1.png",
                  prompt: `await menthol.generate({
  prompt: "cyberpunk samurai warriors",
  style: "cinematic",
  parameters: {
    armor: "metallic chrome",
    energy: "neon mint",
    detail_level: "ultra",
    lighting: "volumetric",
    atmosphere: "cyber dystopian"
  },
  enhancers: ["quantum", "highDetail", "stableDiffusion"],
  seed: 1337,
  quantum_params: {
    entanglement_depth: 24,
    superposition_layers: 8
  }
})`,
                  wallet: "0x7C3F...9Ae4",
                  pseudoname: "QuantumSamurai",
                  rating: 5
                },
                {
                  image: "/nft2.png",
                  prompt: `const entity = await menthol.create({
  base: "ethereal being",
  attributes: {
    form: "energy manifestation",
    colors: ["cyan", "white"],
    environment: "cosmic void"
  },
  quantum: true,
  dimensions: {
    space: 4,
    time: 1
  },
  physics: {
    particle_effects: true,
    light_scattering: "volumetric",
    energy_flow: "dynamic"
  },
  neural_params: {
    creativity: 0.95,
    coherence: 0.85
  }
})`,
                  wallet: "0x4F2B...8Bd5",
                  pseudoname: "EtherealMind",
                  rating: 5
                },
                {
                  image: "/nft3.png",
                  prompt: `// Generate cybernetic entities
const result = await menthol.compose({
  subjects: ["human", "android"],
  style: "futuristic samurai",
  mergeParams: {
    blendMode: "quantum",
    intensity: 0.8,
    harmony: 0.9
  },
  equipment: {
    armor: "neo-feudal",
    weapons: "energy katana",
    tech_level: "advanced"
  },
  quantum_settings: {
    superposition: true,
    entanglement: "high",
    wave_function: "custom"
  },
  neural_enhancement: {
    detail_boost: 1.2,
    style_strength: 0.95
  }
})`,
                  wallet: "0x2A9D...9Cf7",
                  pseudoname: "CyberShogun",
                  rating: 5
                }
              ].map((nft) => (
                <div className="relative" key={nft.wallet}>
                  {/* Outer glow effects - positioned behind the card */}
                  <div className="absolute -inset-[10px] z-0">
                    {/* Base glow */}
                    <div className="absolute inset-0 bg-[#00FFD1]/20 rounded-2xl blur-xl" />
                    {/* Animated glow ring */}
                    <div className="absolute inset-0 bg-gradient-conic from-[#00FFD1]/40 via-transparent to-[#00FFD1]/40 rounded-2xl blur-lg animate-spin-slow" />
                    {/* Extra glow layers */}
                    <div className="absolute inset-0 bg-gradient-radial from-[#00FFD1]/20 to-transparent rounded-2xl blur-xl" />
                  </div>

                  {/* Card */}
                  <motion.div
                    className="relative z-10 rounded-xl overflow-hidden bg-black border border-[#00FFD1]/10 hover:border-[#00FFD1]/30 transition-all duration-300 w-full h-[500px] flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Card content container */}
                    <div className="relative w-full h-full flex flex-col bg-black rounded-xl overflow-hidden">
                      {/* Image container with reduced height */}
                      <div className="relative h-[250px]">
                        <Image 
                          src={nft.image}
                          alt={`NFT by ${nft.wallet}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Rating stars with glow effect */}
                        <div className="absolute top-3 right-3 flex gap-0.5 z-10">
                          {[...Array(nft.rating)].map((_, i) => (
                            <motion.span 
                              key={i} 
                              className="text-[#00FFD1] text-sm drop-shadow-[0_0_3px_rgba(0,255,209,0.5)]"
                              initial={{ opacity: 0.5 }}
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.1 
                              }}
                            >
                              ★
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Code prompt section with terminal-like styling */}
                      <div className="bg-black p-4 border-t border-[#00FFD1]/10 flex-grow">
                        {/* Terminal header */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                            <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                          </div>
                          <span className="text-[#00FFD1]/50 text-xs font-mono">menthol.generate</span>
                        </div>
                        
                        {/* Code content with scrolling effect - reduced height */}
                        <div className="h-[150px] overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-[#00FFD1]/20 scrollbar-track-black">
                          <code className="text-xs text-[#00FFD1]/80 font-mono block whitespace-pre">
                            {nft.prompt}
                          </code>
                        </div>
                      </div>

                      {/* Updated wallet info with white text */}
                      <div className="p-3 bg-black border-t border-[#00FFD1]/10">
                        <motion.div 
                          className="flex items-center justify-between"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {/* Left side - Wallet address with white text */}
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse" />
                            <motion.p 
                              className="font-mono text-xs text-white hover:text-[#00FFD1] transition-colors"
                              whileHover={{ letterSpacing: '0.05em' }}
                              transition={{ duration: 0.3 }}
                            >
                              {nft.wallet}
                            </motion.p>
                          </motion.div>

                          {/* Right side - Pseudoname with white text */}
                          <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0.7 }}
                            whileHover={{ 
                              opacity: 1,
                              scale: 1.05,
                              x: -3
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-xs text-[#00FFD1]/60">|</span>
                            <motion.span 
                              className="text-xs font-medium text-white drop-shadow-[0_0_3px_rgba(0,255,209,0.5)]"
                              whileHover={{
                                textShadow: [
                                  "0 0 4px rgba(0,255,209,0.5)",
                                  "0 0 8px rgba(0,255,209,0.5)",
                                  "0 0 4px rgba(0,255,209,0.5)"
                                ]
                              }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              {nft.pseudoname}
                            </motion.span>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />

        {/* Footer */}
        <footer className="py-12 px-6 bg-black/90 border-t border-[#00FFD1]/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex gap-8 items-center">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('tokenomics')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tokenomics
                </button>
                <a 
                  href="https://github.com/mentholai/menthol"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Docs
                </a>
                <Link 
                  href="https://github.com/mentholai" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="text-center text-gray-500 text-sm">
              © 2025 Menthol. All rights reserved.
            </div>
          </div>
        </footer>
      </ClientLayout>

      <AudioPlayer />
    </main>
  )
} 