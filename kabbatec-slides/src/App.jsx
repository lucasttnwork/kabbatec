import { useEffect, useMemo, useRef, useState } from 'react'
import { LiquidHero } from '@/components/slides/LiquidHero'
import { CanaisAquisicaoSlide } from '@/components/slides/CanaisAquisicaoSlide'
import { AgentesIASlide } from '@/components/slides/AgentesIASlide'
import { StatsShowcase } from '@/components/slides/StatsShowcase'
import { Interactive3DChart } from '@/components/slides/Interactive3DChart'
import { TimelineStrategy } from '@/components/slides/TimelineStrategy'
import { MarketOpportunitySlide } from '@/components/slides/MarketOpportunitySlide'
import { StrategySolutionSlide } from '@/components/slides/StrategySolutionSlide'
import { VisaoGeralSlide } from '@/components/slides/VisaoGeralSlide'
import { FundacaoSlide } from '@/components/slides/FundacaoSlide'
import { PrimeirosSprintsSlide } from '@/components/slides/PrimeirosSprintsSlide'
import { ExpansaoSlide } from '@/components/slides/ExpansaoSlide'
import { EntregaveisSlide } from '@/components/slides/EntregaveisSlide'
import { MetricasSucessoSlide } from '@/components/slides/MetricasSucessoSlide'
import { TimelineProximosPassosSlide } from '@/components/slides/TimelineProximosPassosSlide'
import './index.css'
import { Button } from '@/components/ui/button'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = useMemo(() => [
    <LiquidHero key="1-hero" title="Kabbatec" subtitle="Estratégia de Marketing Digital" />,
    <VisaoGeralSlide key="2-visao" />,
    <FundacaoSlide key="3-fundacao" />,
    <PrimeirosSprintsSlide key="4-sprints" />,
    <CanaisAquisicaoSlide key="5-canais" />,
    <AgentesIASlide key="6-agentes" />,
    <MetricasSucessoSlide key="7-metricas" />,
    <ExpansaoSlide key="8-expansao" />,
    <EntregaveisSlide key="9-entregaveis" />,
    <TimelineProximosPassosSlide key="10-timeline" />,
  ], [])

  const go = (delta) => setCurrentSlide((s) => Math.max(0, Math.min(slides.length - 1, s + delta)))

  // Remover troca de slide por scroll para permitir conteúdo longo por slide
  useEffect(() => {
    const preventSpaceScroll = (e) => {
      if ((e.key === ' ' || e.key === 'Spacebar')) {
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', preventSpaceScroll)
    return () => window.removeEventListener('keydown', preventSpaceScroll)
  }, [])

  return (
    <div
      onKeyDown={(e) => (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? go(1) : (e.key === 'ArrowUp' || e.key === 'ArrowLeft') ? go(-1) : null}
      tabIndex={0}
      className="focus:outline-none min-h-screen relative"
    >
      {/* Fundo estático para todos os slides */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/estrategia/images/background.jpeg)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80" />
        <div className="absolute inset-0 opacity-[0.02] bg-noise" />
      </div>
      {slides[currentSlide]}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-card rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl px-6 py-3 flex items-center gap-4 shadow-2xl">
          <Button variant="outline" onClick={() => go(-1)} disabled={currentSlide === 0}>Anterior</Button>
          <span className="text-white text-sm min-w-[90px] text-center font-medium">{currentSlide + 1} / {slides.length}</span>
          <Button variant="outline" onClick={() => go(1)} disabled={currentSlide === slides.length - 1}>Próximo</Button>
        </div>
      </div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-6">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir ao slide ${i + 1}`}
            onClick={() => setCurrentSlide(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/80 hover:scale-110'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
