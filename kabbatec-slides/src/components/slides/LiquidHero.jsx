import { motion } from 'framer-motion'

export const LiquidHero = ({ title, subtitle }) => (
  <div className="relative min-h-screen flex items-center justify-center pb-20 sm:pb-24">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/20" />
    {/* Responsive floating elements */}
    <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-liquid" />
    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-liquid-float-reverse" />
    <div className="relative z-10 text-center max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
      <motion.h1 className="text-4xl sm:text-6xl lg:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 sm:mb-6" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }}>
        {title}
      </motion.h1>
      <motion.p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
        {subtitle}
      </motion.p>
    </div>
  </div>
)


