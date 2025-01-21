'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { NFTModal } from './NFTModal'
import { NFTCard } from './NFTCard'

const nftData = [
  {
    image: "/images/nft1.jpg",
    wallet: "0x7C3F...9Ae4",
    role: "Genesis Creator",
    rating: 5,
    prompt: "await menthol.generate({prompt: \"cyberpunk samurai warriors\", style: \"cinematic\", enhancers: [\"neon\", \"detailed\"]});"
  },
  {
    image: "/images/nft2.jpg",
    wallet: "0x4F2B...8Bd5",
    role: "NFT Artist",
    rating: 5,
    prompt: "const entity = await menthol.create({base: \"ethereal being\", attributes: {form: \"energy manifestation\", power: \"cosmic\"}});"
  },
  {
    image: "/images/nft3.jpg",
    wallet: "0x2A9D...9Cf7",
    role: "Tech Builder",
    rating: 5,
    prompt: "// Generate cybernetic entities\nconst result = await menthol.compose({subjects: [\"human\", \"android\"], style: \"futuristic\"});"
  }
]

export function NFTShowcase() {
  const [selectedNFT, setSelectedNFT] = useState<typeof nftData[0] | null>(null)

  const handleViewNFT = (nft: typeof nftData[0]) => {
    console.log('Opening modal for:', nft) // Debug log
    setSelectedNFT(nft)
  }

  return (
    <section className="py-16 px-6 bg-[#004D40]/10 relative">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            <span className="text-[#00FFD1]">Community</span> Generations
          </h2>
          <p className="text-gray-400 text-lg">
            Explore the incredible creations from our community
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {nftData.map((nft) => (
            <NFTCard
              key={nft.wallet}
              {...nft}
            />
          ))}
        </div>
      </div>

      {/* Debug log for modal state */}
      {console.log('Modal state:', { isOpen: !!selectedNFT, selectedNFT })}
      
      <NFTModal
        isOpen={!!selectedNFT}
        onClose={() => setSelectedNFT(null)}
        image={selectedNFT?.image || ''}
        prompt={selectedNFT?.prompt || ''}
        wallet={selectedNFT?.wallet || ''}
      />
    </section>
  )
} 