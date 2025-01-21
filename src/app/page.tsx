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
import { SocialProof } from '@/components/SocialProof'

const FEATURES = [
  {
    title: "Quantum Neural Processing",
    description: "Advanced AI that generates unique, context-aware NFTs using quantum computing principles."
  },
  {
    title: "AI-Driven Creativity",
    description: "Intelligent algorithms that transform text prompts into stunning digital artworks."
  },
  {
    title: "Blockchain Integration",
    description: "Seamless Solana blockchain minting and verification of your unique digital assets."
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
  ssr: false,
  loading: () => <div className="w-full aspect-square bg-black/30 rounded-full animate-pulse" />
})

export default function Home() {
  return (
    <ClientLayout>
      <Header />
      <HeroSection />

      {/* Revolutionary Features Section */}
      <section className="min-h-screen py-24 px-6 flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Revolutionary Features
          </h2>
          <p className="text-gray-400 text-xl text-center mb-16">
            Menthol combines cutting-edge AI, quantum computing, and blockchain to redefine digital creativity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                iconType={feature.title === "Quantum Neural Processing" ? "zap" : 
                          feature.title === "AI-Driven Creativity" ? "cpu" : "layers"}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="min-h-screen py-24 px-6 flex items-center justify-center relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FFD1]/5 via-transparent to-transparent" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-white text-5xl font-bold mb-4 flex items-center justify-center gap-2">
              <span className="text-[#00FFD1] inline-block transform hover:scale-110 transition-transform">$</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                MENTHOL
              </span>
              <span className="text-white">Tokenomics</span>
            </h2>
            <p className="text-gray-400 text-xl">
              Fair launch with transparent token distribution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <TokenomicsCard
                title="Public Sale"
                percentage={90}
                description="Freely tradable on the open market"
                icon={<Icons.Wallet />}
              />
              <TokenomicsCard
                title="Team Allocation"
                percentage={10}
                description="8% locked for 6 months, vested carefully"
                icon={<Icons.Stack />}
              />
              <div className="bg-black/30 rounded-lg p-6 border border-[#00FFD1]/10">
                <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                  <span className="text-[#00FFD1]">📋</span> Fair Launch Details
                </h3>
                <ul className="space-y-2 text-gray-400">
                  {TOKENOMICS.fairLaunch.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-[#00FFD1]">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <TokenomicsChart />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Advanced Technology</h2>
          <p className="text-gray-400 text-xl text-center mb-16">
            Powered by Rust, quantum computing, and intelligent AI models
          </p>
          <DynamicElements code={CODE_EXAMPLE} />
        </div>
      </section>

      <SocialProof />
      <CallToAction />

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/90 border-t border-[#00FFD1]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex gap-8 items-center">
              <Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              <Link href="/tokenomics" className="text-gray-400 hover:text-white transition-colors">Tokenomics</Link>
              <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link>
              <Link href="https://github.com/mentholai" className="text-gray-400 hover:text-white transition-colors">GitHub</Link>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            © 2025 Menthol. All rights reserved.
          </div>
        </div>
      </footer>
    </ClientLayout>
  )
} 