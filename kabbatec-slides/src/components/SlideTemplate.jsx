import { GlassContainer } from '@/components/GlassContainer'
import { motion } from 'framer-motion'

const DEFAULT_BG = 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1600&auto=format&fit=crop'

export const SlideTemplate = ({ children, showDots = false }) => (
  <div className="min-h-screen relative overflow-hidden">
    <div className="relative z-10 min-h-screen flex items-center justify-center p-8 pb-24">
      <GlassContainer className="w-full max-w-7xl my-8">{children}</GlassContainer>
    </div>
    {showDots && <NavigationDots />}
  </div>
)

const NavigationDots = () => (
  <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 space-y-3">
    {Array.from({ length: 10 }).map((_, i) => (
      <motion.button key={i} className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white/80 transition" />
    ))}
  </div>
)


