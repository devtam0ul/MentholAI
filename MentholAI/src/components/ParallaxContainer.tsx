'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, ReactNode } from 'react'

interface ParallaxContainerProps {
  children: ReactNode
  intensity?: number
}

export function ParallaxContainer({ children, intensity = 20 }: ParallaxContainerProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const translateX = useSpring(mouseX, springConfig)
  const translateY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const x = (clientX - innerWidth / 2) / intensity
      const y = (clientY - innerHeight / 2) / intensity
      
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [intensity, mouseX, mouseY])

  return (
    <motion.div
      style={{
        translateX,
        translateY,
      }}
    >
      {children}
    </motion.div>
  )
} 