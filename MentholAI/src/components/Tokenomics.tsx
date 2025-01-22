'use client'
import { motion } from 'framer-motion'
import { Wallet, Cpu, Users, Sparkles } from 'lucide-react'

const tokenomicsData = [
  {
    title: "Public Sale",
    percentage: "40%",
    description: "Available for community participation",
    icon: <Wallet className="text-[#00FFD1] w-6 h-6" />
  },
  {
    title: "Development",
    percentage: "30%",
    description: "Platform development and improvements",
    icon: <Cpu className="text-[#00FFD1] w-6 h-6" />
  },
  {
    title: "Community",
    percentage: "20%",
    description: "Rewards and ecosystem growth",
    icon: <Users className="text-[#00FFD1] w-6 h-6" />
  },
  {
    title: "Team",
    percentage: "10%",
    description: "Core team allocation",
    icon: <Sparkles className="text-[#00FFD1] w-6 h-6" />
  }
]

interface TokenomicsProps {
  id?: string
}

export function Tokenomics({ id }: TokenomicsProps) {
  return (
    <section id={id} className="py-24 px-6 bg-black relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[#004D40]/20 blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#00FFD1]">Token</span> Economics
          </h2>
          <p className="text-gray-400">
            A balanced distribution ensuring sustainable growth and community participation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tokenomicsData.map((item) => (
            <motion.div
              key={item.title}
              className="relative p-6 rounded-2xl bg-black/40 border border-[#00FFD1]/10 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-5xl font-bold text-white">{item.percentage}</span>
                <span className="text-gray-400 text-right max-w-[200px]">{item.description}</span>
              </div>
              
              {/* Card glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00FFD1]/0 via-[#00FFD1]/10 to-[#00FFD1]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 