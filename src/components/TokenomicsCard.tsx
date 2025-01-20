interface TokenomicsCardProps {
  title: string
  percentage: number
  description: string
  icon?: React.ReactNode
}

export function TokenomicsCard({ title, percentage, description, icon }: TokenomicsCardProps) {
  return (
    <div className="bg-black/30 rounded-lg p-6 border border-[#00FFD1]/10 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-4">
        {icon && <div className="text-[#00FFD1]">{icon}</div>}
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[#00FFD1] text-4xl font-bold">{percentage}%</span>
        <span className="text-gray-400">{description}</span>
      </div>
    </div>
  )
} 