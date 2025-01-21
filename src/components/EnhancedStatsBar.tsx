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
  const [props] = useSpring(() => ({
    from: { number: 0 },
    to: { number: parseInt(value) },
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
    <div className="w-full flex justify-center pt-20">
      <div className="flex items-center justify-center gap-32 bg-black/20 backdrop-blur-sm px-16 py-3 rounded-xl border border-[#00FFD1]/10 min-w-[500px]">
        {/* AI Models Stats */}
        <div className="flex items-center gap-3">
          <div className="text-[#00FFD1]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">100M+</h3>
            <p className="text-[#00FFD1] text-xs">AI Models</p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-[#00FFD1]/20 to-transparent" />

        {/* Global Artists Stats */}
        <div className="flex items-center gap-3">
          <div className="text-[#00FFD1]">
            <Globe2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">11,000+</h3>
            <p className="text-[#00FFD1] text-xs">Global Artists</p>
          </div>
        </div>
      </div>
    </div>
  )
} 