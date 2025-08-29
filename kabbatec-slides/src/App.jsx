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
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

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

  // Touch swipe handling
  const minSwipeDistance = 50

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    // Apenas muda slide se for um swipe horizontal claro
    if (isLeftSwipe && currentSlide < slides.length - 1) {
      go(1)
    } else if (isRightSwipe && currentSlide > 0) {
      go(-1)
    }
  }

  // Prevenir troca de slide por scroll ou outras interações indesejadas
  useEffect(() => {
    const preventSpaceScroll = (e) => {
      if ((e.key === ' ' || e.key === 'Spacebar')) {
        e.preventDefault()
      }
    }

    // Prevenir troca de slide por scroll wheel
    const preventWheelNavigation = (e) => {
      // Apenas impede que o scroll cause navegação de slides
      // O scroll normal dentro do conteúdo ainda funciona
      e.stopPropagation()
    }

    // Prevenir qualquer comportamento automático de slide
    const preventAutoSlideChange = (e) => {
      // Impede mudanças automáticas de slide por momentum scrolling ou outros eventos
      if (e.type === 'scroll' && e.target === window) {
        e.stopPropagation()
      }
    }

    window.addEventListener('keydown', preventSpaceScroll)
    window.addEventListener('wheel', preventWheelNavigation, { passive: true })
    window.addEventListener('scroll', preventAutoSlideChange, { passive: true })
    
    return () => {
      window.removeEventListener('keydown', preventSpaceScroll)
      window.removeEventListener('wheel', preventWheelNavigation)
      window.removeEventListener('scroll', preventAutoSlideChange)
    }
  }, [])

  return (
    <div
      onKeyDown={(e) => (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? go(1) : (e.key === 'ArrowUp' || e.key === 'ArrowLeft') ? go(-1) : null}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      className="focus:outline-none min-h-screen relative overflow-x-hidden no-scroll-nav"
    >
      {/* Fundo estático para todos os slides */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/background.jpeg)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80" />
        <div className="absolute inset-0 opacity-[0.02] bg-noise" />
      </div>
      {slides[currentSlide]}
      
      {/* Mobile-optimized navigation */}
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-sm">
        <div className="glass-card rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl px-4 sm:px-6 py-3 flex items-center justify-between gap-2 sm:gap-4 shadow-2xl">
          <Button 
            variant="outline" 
            onClick={() => go(-1)} 
            disabled={currentSlide === 0}
            className="text-xs sm:text-sm px-3 sm:px-4"
          >
            Anterior
          </Button>
          <span className="text-white text-xs sm:text-sm font-medium text-center flex-1">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button 
            variant="outline" 
            onClick={() => go(1)} 
            disabled={currentSlide === slides.length - 1}
            className="text-xs sm:text-sm px-3 sm:px-4"
          >
            Próximo
          </Button>
        </div>
      </div>

      {/* Desktop navigation dots - hidden on mobile */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-20 flex-col space-y-6">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir ao slide ${i + 1}`}
            onClick={() => setCurrentSlide(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/80 hover:scale-110'}`}
          />
        ))}
      </div>

      {/* Mobile slide indicators */}
      <div className="flex lg:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4">
        <div className="flex space-x-2 bg-black/40 backdrop-blur-xl rounded-full px-4 py-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir ao slide ${i + 1}`}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
