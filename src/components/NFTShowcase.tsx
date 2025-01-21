'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const nftData = [
  {
    image: "/nft1.png",
    wallet: "0x7C...3Ae9",
    pseudonym: "CyberAlchemist",
    rating: 5,
    prompt: "await menthol.generate({prompt: \"cyberpunk s"
  },
  {
    image: "/nft2.png",
    wallet: "0x4F...8Bd2",
    pseudonym: "QuantumDreamer",
    rating: 5,
    prompt: "const entity = await menthol.create({base: \""
  },
  {
    image: "/nft3.png",
    wallet: "0x2A...9Cf5",
    pseudonym: "NeonSamurai",
    rating: 5,
    prompt: "// Generate cybernetic entities\nconst result = await menthol.compose({subjec"
  }
]

export function NFTShowcase() {
  return (
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
            alt={`NFT by ${nft.pseudonym}`}
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
          <div className="mt-4 bg-black/80 p-3 font-mono text-sm text-[#00FFD1]">
            <code>{nft.prompt}</code>
          </div>

          {/* Creator info */}
          <div className="p-4 bg-black/60">
            <p className="font-mono text-sm text-[#00FFD1]/60">{nft.wallet}</p>
            <h3 className="text-white font-medium mt-1">{nft.pseudonym}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 