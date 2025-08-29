import { SlideTemplate } from '@/components/SlideTemplate'
import { GlassContainer } from '@/components/GlassContainer'

export const StrategySolutionSlide = () => (
  <SlideTemplate>
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-white mb-4">Nossa Abordagem</h2>
      <p className="text-xl text-white/70">Estratégia integrada para máximo impacto</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <StrategyPillar icon="🚀" title="Lançamento Estratégico" description="Entrada no mercado com campanha de alto impacto" color="from-blue-500 to-cyan-500" />
      <StrategyPillar icon="📊" title="Otimização Contínua" description="Análise de dados e ajustes em tempo real" color="from-purple-500 to-pink-500" />
      <StrategyPillar icon="🎯" title="Expansão Sustentável" description="Crescimento escalável e sustentável" color="from-green-400 to-blue-500" />
    </div>
  </SlideTemplate>
)

const StrategyPillar = ({ icon, title, description, color }) => (
  <GlassContainer>
    <div className="text-center">
      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-2xl mb-4`}>{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  </GlassContainer>
)


