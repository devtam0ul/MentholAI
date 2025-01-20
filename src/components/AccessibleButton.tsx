'use client'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'default' | 'lg'
  showArrow?: boolean
}

export const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ className, variant = 'primary', size = 'default', showArrow = false, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'relative inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-[#00FFD1]/50 focus:ring-offset-2 focus:ring-offset-black',
          // Size variations
          size === 'default' && 'px-6 py-3 text-sm',
          size === 'lg' && 'px-8 py-4 text-base',
          // Variant styles
          variant === 'primary' && [
            'bg-[#00FFD1] text-black',
            'shadow-[0_0_20px_rgba(0,255,209,0.3)]',
            'hover:shadow-[0_0_30px_rgba(0,255,209,0.4)]',
            'hover:bg-[#00FFD1]/90',
            'after:absolute after:inset-0 after:rounded-xl after:border after:border-[#00FFD1]/50',
          ],
          variant === 'secondary' && [
            'bg-black/20 text-white',
            'backdrop-blur-sm',
            'border border-[#00FFD1]/20',
            'hover:bg-black/30 hover:border-[#00FFD1]/30',
          ],
          variant === 'outline' && [
            'bg-transparent text-white',
            'border border-[#00FFD1]/30',
            'hover:bg-[#00FFD1]/5',
          ],
          className
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <ChevronRight 
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              "group-hover:translate-x-0.5"
            )}
          />
        )}
      </motion.button>
    )
  }
)

AccessibleButton.displayName = 'AccessibleButton' 