'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface AnimatedCodeProps {
  code: string
  language?: string
  filename?: string
}

export function AnimatedCode({ code, language = 'rust', filename = 'quantum_nft_generation.rs' }: AnimatedCodeProps) {
  const [displayedCode, setDisplayedCode] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(prev => prev + code[currentIndex])
        setCurrentIndex(c => c + 1)
      }, 20) // Adjust speed here
      return () => clearTimeout(timeout)
    }
  }, [code, currentIndex])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg overflow-hidden shadow-2xl"
    >
      {/* Terminal header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-400 text-sm ml-2">{filename}</span>
      </div>

      {/* Code content with typing effect */}
      <div className="relative">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            background: '#1a1a1a',
          }}
        >
          {displayedCode}
        </SyntaxHighlighter>

        {/* Cursor effect */}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="absolute bottom-4 right-4 w-2 h-4 bg-[#00FFD1]"
        />
      </div>
    </motion.div>
  )
} 