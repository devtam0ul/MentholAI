'use client'
import { motion } from 'framer-motion'
import { Zap, Cpu, Layers } from 'lucide-react'

interface FeatureCardProps {
  iconType: 'zap' | 'cpu' | 'layers'
  title: string
  description: string
}

export function FeatureCard({ iconType, title, description }: FeatureCardProps) {
  const renderIcon = () => {
    switch (iconType) {
      case 'zap':
        return <Zap className="text-[#00FFD1] w-8 h-8 group-hover:scale-110 transition-transform" aria-hidden="true" />
      case 'cpu':
        return <Cpu className="text-[#00FFD1] w-8 h-8 group-hover:scale-110 transition-transform" aria-hidden="true" />
      case 'layers':
        return <Layers className="text-[#00FFD1] w-8 h-8 group-hover:scale-110 transition-transform" aria-hidden="true" />
      default:
        return null
    }
  }
  
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-8 rounded-2xl bg-black/20 border border-[#00FFD1]/10 
                 backdrop-blur-sm hover:bg-black/30 transition-all duration-300
                 group hover:border-[#00FFD1]/20"
    >
      <div className="flex flex-col gap-4">
        {renderIcon()}
        <h3 className="text-xl font-bold text-white group-hover:text-[#00FFD1] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
} 