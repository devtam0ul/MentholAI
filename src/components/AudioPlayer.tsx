'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export function AudioPlayer() {
  const [mounted, setMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      try {
        audioRef.current = new Audio('/music/background.mp3')
        audioRef.current.loop = true
        audioRef.current.volume = 0.1
        
        // Add error handling
        audioRef.current.addEventListener('error', (e) => {
          console.error('Audio error:', e)
          setError('Failed to load audio')
        })
      } catch (err) {
        console.error('Audio initialization error:', err)
        setError('Failed to initialize audio')
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          await audioRef.current.pause()
        } else {
          await audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
      } catch (err) {
        console.error('Playback error:', err)
        setError('Failed to play audio')
      }
    }
  }

  if (!mounted) return null

  return (
    <motion.button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-[100] p-4 rounded-full bg-black/40 backdrop-blur-md border-2 border-[#00FFD1]/30 hover:bg-black/60 transition-all duration-300 group shadow-lg shadow-[#00FFD1]/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {error ? (
          <div className="text-red-500 text-xs absolute -top-8 whitespace-nowrap">
            {error}
          </div>
        ) : null}
        
        {/* Speaker icon */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-[#00FFD1]"
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </motion.div>

        {/* Enhanced glow effect */}
        <motion.div
          className="absolute inset-0 bg-[#00FFD1]/20 blur-xl rounded-full"
          animate={isPlaying ? {
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          } : {
            scale: 1,
            opacity: 0
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.button>
  )
}