export function LoadingState() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-2 border-[#00FFD1]/20 rounded-full animate-ping" />
        <div className="absolute inset-0 border-2 border-[#00FFD1]/40 rounded-full animate-pulse" />
      </div>
    </div>
  )
} 