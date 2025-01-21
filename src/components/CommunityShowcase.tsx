'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const nftShowcaseData = [
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

export function CommunityShowcase() {
  // ... existing component code ...
} 