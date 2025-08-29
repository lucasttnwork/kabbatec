import { SlideTemplate } from '@/components/SlideTemplate'
import { GlassContainer } from '@/components/GlassContainer'

export const VisaoGeralSlide = () => (
  <SlideTemplate>
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-7xl font-extrabold text-white mb-5 tracking-tight">
          Demonstração de Planejamento de Execução — Kabbatec
        </h2>
        <p className="text-white/80 text-2xl">(com explicações do porquê e do impacto de cada passo)</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Card Objetivo */}
        <GlassContainer intensity="heavy" className="p-8 w-full max-w-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">Objetivo</h3>
            <p className="text-blue-300 text-base">Construir base sólida para crescimento</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                O que faremos
              </h4>
              <p className="text-white/80 text-base pl-4">Criar infraestrutura digital e comercial completa para campanhas eficazes.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Por que é crucial
              </h4>
              <p className="text-white/80 text-base pl-4">Sem essa base, investimentos em mídia “vazam” e os leads chegam sem qualificação.</p>
            </div>
            <div className="pt-3 border-t border-white/10">
              <h4 className="text-green-300 font-semibold text-sm mb-1">Resultado esperado:</h4>
              <p className="text-green-300 text-base">Funil previsível + respostas rápidas + dados precisos</p>
            </div>
          </div>
        </GlassContainer>

        {/* Card Abordagem */}
        <GlassContainer intensity="heavy" className="p-8 w-full max-w-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">Nossa Abordagem</h3>
            <p className="text-purple-300 text-base">3 fases integradas e eficazes</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">1</div>
              <div>
                <h4 className="text-white font-medium text-base">Fundação técnica</h4>
                <p className="text-white/60 text-sm">Infraestrutura digital e de dados pronta.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">2</div>
              <div>
                <h4 className="text-white font-medium text-base">Execução + IA</h4>
                <p className="text-white/60 text-sm">Agentes inteligentes operando no funil.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">3</div>
              <div>
                <h4 className="text-white font-medium text-base">Otimização</h4>
                <p className="text-white/60 text-sm">Métricas e melhorias contínuas.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="text-green-300 text-sm"><strong>Exemplo prático:</strong> Semana 2 → Primeira campanha + assistente WhatsApp</p>
          </div>
        </GlassContainer>

        {/* Card Resultados Esperados */}
        <GlassContainer intensity="heavy" className="p-8 w-full max-w-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-white mb-2">Resultados</h3>
            <p className="text-green-300 text-base">Metas claras e mensuráveis</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                Primeiras 4 semanas
              </h4>
              <ul className="text-white/80 text-base space-y-1 pl-4">
                <li>• 15–25 leads qualificados/mês</li>
                <li>• Resposta em menos de 15 minutos</li>
                <li>• 8–12 reuniões comerciais/semana</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Até 8 semanas
              </h4>
              <ul className="text-white/80 text-base space-y-1 pl-4">
                <li>• 1–2 obras em negociação/mês</li>
                <li>• Propostas enviadas em 72h</li>
                <li>• Taxa de fechamento &gt; 25%</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-center">
            <p className="text-2xl font-bold text-green-400 mb-1">ROI 450%</p>
            <p className="text-green-300 text-sm">Retorno projetado em 6 meses</p>
          </div>
        </GlassContainer>
      </div>
    </div>
  </SlideTemplate>
)


