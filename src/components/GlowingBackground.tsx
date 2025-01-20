'use client'

export function GlowingBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#00FFD1]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#00FFD1]/20 blur-[120px] rounded-full" />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
} 