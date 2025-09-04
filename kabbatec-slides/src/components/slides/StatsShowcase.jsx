import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { GlassContainer } from '@/components/GlassContainer'

export const StatsShowcase = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {stats.map((stat, index) => (
      <motion.div key={index} className="group relative" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.05, z: 50 }}>
        <GlassContainer intensity="heavy" className="text-center">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl">{stat.icon}</div>
          </div>
          <CountUp end={stat.value} duration={2} className="text-5xl font-bold text-white mb-2" />
          <p className="text-white/70 text-lg">{stat.label}</p>
          {stat.trend && (
            <div className="mt-4 flex items-center justify-center text-green-400">
              <span className="mr-2">▲</span>
              <span>+{stat.trend}%</span>
            </div>
          )}
        </GlassContainer>
      </motion.div>
    ))}
  </div>
)


