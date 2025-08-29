import { motion } from 'framer-motion'
import { GlassContainer } from '@/components/GlassContainer'

export const TimelineStrategy = ({ phases }) => (
  <div className="relative">
    {/* Desktop timeline line - hidden on mobile */}
    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transform -translate-x-1/2" />
    
    {/* Mobile timeline line - left aligned */}
    <div className="lg:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />
    
    {phases.map((phase, index) => (
      <motion.div
        key={index}
        className={`flex items-start mb-12 lg:mb-20 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Mobile: Simple left-aligned layout, Desktop: Alternating layout */}
        <div className="flex-1 lg:flex-1 ml-12 lg:ml-0">
          <GlassContainer intensity="medium" className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-6">
              {/* Header com ícone e título */}
              <div className="flex items-start space-x-3 sm:space-x-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg sm:text-2xl shadow-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">{phase.title}</h3>
                  <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">{phase.description}</p>
                  <div className="mt-3 sm:mt-4 inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-blue-500/20 rounded-full">
                    <span className="text-blue-300 font-semibold text-xs sm:text-sm">{phase.duration}</span>
                  </div>
                </div>
              </div>
              
              {/* Detalhes das atividades */}
              {phase.details && (
                <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                  <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3"></span>
                    Atividades Principais
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {phase.details.map((detail, idx) => (
                      <li key={idx} className="text-white/70 flex items-start text-xs sm:text-sm">
                        <span className="text-blue-400 mr-2 sm:mr-3 mt-1 sm:mt-1.5">•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Entregáveis e Impacto */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {phase.deliverables && (
                  <div className="bg-green-500/10 rounded-xl p-4 sm:p-5">
                    <h4 className="text-green-300 font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                      <span className="mr-2">📦</span>
                      Entregáveis
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-white/70 text-xs sm:text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {phase.impact && (
                  <div className="bg-purple-500/10 rounded-xl p-4 sm:p-5">
                    <h4 className="text-purple-300 font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                      <span className="mr-2">🎤</span>
                      Impacto
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{phase.impact}</p>
                  </div>
                )}
              </div>
            </div>
          </GlassContainer>
        </div>
        
        {/* Timeline indicator dot */}
        <div className="hidden lg:block mx-8 mt-10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white shadow-lg" />
        </div>
        
        {/* Mobile timeline indicator - positioned absolutely */}
        <div className="lg:hidden absolute left-4 mt-8">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-3 border-white shadow-lg" />
        </div>
        
        <div className="hidden lg:block flex-1" />
      </motion.div>
    ))}
  </div>
)


