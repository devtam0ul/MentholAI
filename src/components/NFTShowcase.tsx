'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const nftData = [
  {
    image: "/nft1.png",
    wallet: "0x7C3F...9Ae4",
    role: "Genesis Creator",
    rating: 5,
    prompt: "await menthol.generate({prompt: \"cyberpunk s"
  },
  {
    image: "/nft2.png",
    wallet: "0x4F2B...8Bd5",
    role: "NFT Artist",
    rating: 5,
    prompt: "const entity = await menthol.create({base: \""
  },
  {
    image: "/nft3.png",
    wallet: "0x2A9D...9Cf7",
    role: "Tech Builder",
    rating: 5,
    prompt: "// Generate cybernetic entities\nconst result = await menthol.compose({subjec"
  }
]

export function NFTShowcase() {
  return (
    <section className="py-24 px-6 bg-[#004D40]/10 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-[#00FFD1]">Community</span> Generations
          </h2>
          <p className="text-gray-400 text-xl">
            Explore the incredible creations from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nftData.map((nft) => (
            <motion.div
              key={nft.wallet}
              className="group relative rounded-2xl overflow-hidden bg-black/40 border border-[#00FFD1]/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image 
                src={nft.image}
                alt={`NFT by ${nft.wallet}`}
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              
              {/* Rating stars */}
              <div className="absolute top-4 right-4 flex gap-1">
                {[...Array(nft.rating)].map((_, i) => (
                  <span key={i} className="text-[#00FFD1]">★</span>
                ))}
              </div>

              {/* Code prompt */}
              <div className="bg-black/80 p-3">
                <code className="text-sm text-[#00FFD1]/80 font-mono">
                  {nft.prompt}
                </code>
              </div>

              {/* Wallet info */}
              <div className="p-4 bg-black/60 backdrop-blur-sm">
                <p className="font-mono text-sm text-[#00FFD1]">{nft.wallet}</p>
                <p className="text-gray-400 text-sm mt-1">{nft.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 