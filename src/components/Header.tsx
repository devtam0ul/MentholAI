'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-[#00FFD1]/10 shadow-[0_0_15px_0_rgba(0,255,209,0.1)]' 
          : 'bg-transparent'
      }`}
    >
      {/* Add quantum glow effect */}
      <div className="absolute inset-x-0 -bottom-[2px] h-[1px] bg-gradient-to-r from-transparent via-[#00FFD1]/50 to-transparent" />
      <div className="absolute inset-x-0 -bottom-[2px] h-[1px] bg-gradient-to-r from-transparent via-[#00FFD1]/20 to-transparent blur-sm" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between py-4 px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-20">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-[#00FFD1] font-bold text-xl md:text-2xl">Menthol</span>
              <span className="text-white font-bold text-xl md:text-2xl">.AI</span>
            </motion.div>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden relative z-20 p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>

          {/* Mobile menu with larger touch targets */}
          <motion.div
            className={`fixed inset-0 bg-black/95 backdrop-blur-md md:hidden ${
              mobileMenuOpen ? 'flex' : 'hidden'
            } flex-col items-center justify-center gap-8`}
          >
            {['Features', 'Tokenomics', 'Docs', 'GitHub'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`}
                className="py-3 px-8 text-lg touch-target w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="relative text-gray-300 hover:text-white transition-colors group py-2"
            >
              <span className="relative z-10">Features</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-[#00FFD1] w-0 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
              <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#00FFD1]/0 group-hover:bg-[#00FFD1]/20 blur-sm transition-all duration-300" />
            </a>
            <a 
              href="#tokenomics"
              onClick={(e) => scrollToSection(e, 'tokenomics')}
              className="relative text-gray-300 hover:text-white transition-colors group py-2"
            >
              <span className="relative z-10">Tokenomics</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-[#00FFD1] w-0 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
              <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#00FFD1]/0 group-hover:bg-[#00FFD1]/20 blur-sm transition-all duration-300" />
            </a>
            <a 
              href="https://github.com/mentholai/menthol"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-300 hover:text-white transition-colors group py-2"
            >
              <span className="relative z-10">Docs</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-[#00FFD1] w-0 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
              <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#00FFD1]/0 group-hover:bg-[#00FFD1]/20 blur-sm transition-all duration-300" />
            </a>
            <Link 
              href="https://github.com/mentholai/menthol"
              className="relative text-gray-300 hover:text-white transition-colors group py-2"
            >
              <span className="relative z-10">GitHub</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-[#00FFD1] w-0 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
              <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#00FFD1]/0 group-hover:bg-[#00FFD1]/20 blur-sm transition-all duration-300" />
            </Link>

            {/* Social Links with enhanced glow */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://twitter.com/mentholai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00FFD1]/70 hover:text-[#00FFD1] transition-colors relative group"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <div className="absolute inset-0 bg-[#00FFD1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="https://github.com/mentholai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00FFD1]/70 hover:text-[#00FFD1] transition-colors relative group"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
                <div className="absolute inset-0 bg-[#00FFD1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  )
} 