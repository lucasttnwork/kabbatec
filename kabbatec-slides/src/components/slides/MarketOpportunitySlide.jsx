import { motion } from 'framer-motion'
import { SlideTemplate } from '@/components/SlideTemplate'
import { GlassContainer } from '@/components/GlassContainer'
import { Interactive3DChart } from '@/components/slides/Interactive3DChart'

export const MarketOpportunitySlide = () => {
  const marketData = [{ value: 20 }, { value: 40 }, { value: 60 }, { value: 80 }]
  return (
    <SlideTemplate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2 className="text-6xl font-bold text-white mb-8">
            Oportunidade
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Inexplorada</span>
          </motion.h2>
          <div className="space-y-6">
            <OpportunityPoint icon="📈" title="Crescimento de 300%" description="No segmento digital nos últimos 2 anos" />
            <OpportunityPoint icon="🎯" title="Audiência Qualificada" description="85% do público-alvo ainda não foi impactado" />
            <OpportunityPoint icon="💰" title="ROI Projetado" description="450% de retorno sobre investimento" />
          </div>
        </div>
        <div>
          <Interactive3DChart data={marketData} type="growth" />
        </div>
      </div>
    </SlideTemplate>
  )
}

const OpportunityPoint = ({ icon, title, description }) => (
  <GlassContainer>
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl">{icon}</div>
      <div>
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  </GlassContainer>
)


