'use client'
import { motion } from 'framer-motion'

export function CallToAction() {
  return (
    <section className="py-32 px-6 bg-[#004D40] relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold mb-6">
          Join the Quantum Creative Revolution
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Transform your creative process with AI-powered NFT generation
        </p>
        <div className="flex gap-6 justify-center">
          <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-medium">
            Get Started
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-medium">
            View Docs
          </button>
        </div>
      </div>
    </section>
  )
} 