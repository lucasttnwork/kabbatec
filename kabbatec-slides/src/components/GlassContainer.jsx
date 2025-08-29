import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const GlassContainer = ({ children, intensity = 'medium', glow = false, className }) => {
  const intensityClasses = {
    light: 'bg-white/3 backdrop-blur-md border-white/10',
    medium: 'bg-white/5 backdrop-blur-xl border-white/12',
    heavy: 'bg-white/7 backdrop-blur-2xl border-white/16',
  }

  return (
    <motion.div
      className={cn(
        'relative rounded-3xl border transition-transform duration-300 will-change-transform',
        intensityClasses[intensity],
        glow && '',
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Subtle highlight line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="relative z-10 p-8">{children}</div>
    </motion.div>
  )
}


