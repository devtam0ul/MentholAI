'use client'
import { motion } from 'framer-motion'
import { Sparkles, Globe2 } from 'lucide-react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useSpring, animated } from '@react-spring/web'

interface StatItemProps {
  icon: React.ReactNode
  value: string
  label: string
  description: string
}

const StatItem = ({ icon, value, label, description }: StatItemProps) => {
  const [props, api] = useSpring(() => ({
    from: { number: 0 },
    to: { number: parseInt(value.replace(/[^0-9]/g, '')) },
    delay: 1000,
    config: { mass: 1, tension: 20, friction: 10 },
  }))

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="text-[#00FFD1] w-5 h-5 group-hover:scale-110 transition-transform">
              {icon}
            </div>
            <div>
              <animated.p className="text-white font-bold text-2xl group-hover:text-[#00FFD1] transition-colors">
                {props.number.to((n: number) => `${Math.floor(n)}+`)}
              </animated.p>
              <p className="text-[#00FFD1]/80 text-xs font-medium tracking-wide">
                {label}
              </p>
            </div>
          </motion.div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-black/90 px-4 py-2 rounded-lg border border-[#00FFD1]/20 backdrop-blur-sm text-sm"
            sideOffset={5}
          >
            {description}
            <Tooltip.Arrow className="fill-[#00FFD1]/20" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export function EnhancedStatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex gap-12 bg-black/20 backdrop-blur-sm px-16 py-2 mt-24 w-[600px] border-t border-[#00FFD1]/10 hover:bg-black/30 transition-all duration-300"
    >
      <div className="flex items-center justify-between w-full">
        <StatItem
          icon={<Sparkles />}
          value="1.2M"
          label="AI Models"
          description="Trained on diverse datasets for optimal performance"
        />
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#00FFD1]/10 to-transparent" />
        <StatItem
          icon={<Globe2 />}
          value="500K"
          label="Global Artists"
          description="Creative professionals using Menthol worldwide"
        />
      </div>
    </motion.div>
  )
} 