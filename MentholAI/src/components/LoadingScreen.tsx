export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/menthol-avatar.png"
          alt="Loading..."
          width={100}
          height={100}
          className="relative z-10"
        />
        <div className="absolute inset-0 bg-[#00FFD1]/20 blur-xl" />
      </motion.div>
    </div>
  )
} 