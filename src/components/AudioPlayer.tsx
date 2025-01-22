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
        const audio = new Audio('/music/background.mp3')
        audio.loop = true
        audio.volume = 0.1
        
        // Add specific error handling
        audio.addEventListener('error', (e) => {
          const error = e.target as HTMLAudioElement
          let errorMessage = 'Failed to load audio'
          
          switch (error.error?.code) {
            case MediaError.MEDIA_ERR_ABORTED:
              errorMessage = 'Audio playback aborted'
              break
            case MediaError.MEDIA_ERR_NETWORK:
              errorMessage = 'Network error'
              break
            case MediaError.MEDIA_ERR_DECODE:
              errorMessage = 'Audio decode error'
              break
            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
              errorMessage = 'Audio format not supported'
              break
          }
          
          console.error('Audio error:', errorMessage)
          setError(errorMessage)
        })

        // Add loaded data handler
        audio.addEventListener('loadeddata', () => {
          setError(null) // Clear any previous errors
        })

        audioRef.current = audio
      } catch (err) {
        console.error('Audio initialization error:', err)
        setError('Failed to initialize audio')
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.remove() // Properly cleanup the audio element
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        await audioRef.current.pause()
      } else {
        // Reset the audio if it ended
        if (audioRef.current.ended) {
          audioRef.current.currentTime = 0
        }
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          await playPromise
        }
      }
      setIsPlaying(!isPlaying)
      setError(null) // Clear any previous errors on successful playback
    } catch (err) {
      console.error('Playback error:', err)
      setError('Click to play audio')
    }
  }

  if (!mounted) return null

  return (
    <motion.button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] p-3 md:p-4 rounded-full bg-black/40 backdrop-blur-md 
                 border-2 border-white/30 hover:bg-black/60 transition-all duration-300 
                 group shadow-lg shadow-white/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={error || (isPlaying ? 'Pause' : 'Play')}
    >
      <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
        {error && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-red-500 text-xs whitespace-nowrap bg-black/80 px-2 py-1 rounded">
            {error}
          </div>
        )}
        
        {/* Speaker icon */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-white"
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-white/20 blur-[8px] md:blur-xl rounded-full"
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