import { SlideTemplate } from '@/components/SlideTemplate'
import { GlassContainer } from '@/components/GlassContainer'
import { Glossario } from '@/components/Glossario'

export const MetricasSucessoSlide = () => (
  <SlideTemplate>
    <div className="space-y-10">
      <div className="text-center mb-6">
        <h2 className="text-6xl font-extrabold text-white">Como Medir e Garantir o Sucesso</h2>
        <p className="text-white/80 text-xl">Métricas claras, acompanhamento semanal e definição de resultados</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <GlassContainer className="p-8">
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-xl flex items-center justify-center text-3xl mb-3">🎯</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Métrica Principal de Sucesso</h3>
          </div>
          <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
            <h4 className="text-green-300 font-bold text-xl mb-2">Obras Fechadas por Mês</h4>
            <p className="text-white/80 text-lg mb-3">Esta é a única métrica que realmente importa - quantos projetos você consegue fechar mensalmente</p>
            <span className="text-green-300 text-sm italic">Objetivo: Medir o valor real capturado pelo negócio</span>
          </div>
        </GlassContainer>
        <GlassContainer className="p-8">
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-xl flex items-center justify-center text-3xl mb-3">📊</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Indicadores de Performance</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
              <div>
                <h4 className="text-white font-medium text-lg">Leads qualificados por mês</h4>
                <p className="text-white/60 text-sm">Quantos prospects reais conseguimos captar</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <div>
                <h4 className="text-white font-medium text-lg">Tempo de resposta</h4>
                <p className="text-white/60 text-sm">Velocidade para responder interessados</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
              <div>
                <h4 className="text-white font-medium text-lg">Taxa de conversão de interesse</h4>
                <p className="text-white/60 text-sm">Quantos leads viram clientes reais</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <div>
                <h4 className="text-white font-medium text-lg">Reuniões por semana</h4>
                <p className="text-white/60 text-sm">Volume de oportunidades em andamento</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <div>
                <h4 className="text-white font-medium text-lg">Taxa de fechamento</h4>
                <p className="text-white/60 text-sm">Quantas propostas viram contratos</p>
              </div>
            </div>
          </div>
        </GlassContainer>
        <GlassContainer className="p-8">
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-xl flex items-center justify-center text-3xl mb-3">📅</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Reuniões de Acompanhamento</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
              <h4 className="text-purple-300 font-bold text-lg mb-2">🗺️ Reunião Semanal (30-45 min)</h4>
              <p className="text-white/80 text-base mb-2">Revisão do status de prospecção e funcionamento dos assistentes virtuais</p>
              <span className="text-purple-300 text-sm italic">Foco: Resolver gargalos e otimizar processos</span>
            </div>
            
            <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
              <h4 className="text-blue-300 font-bold text-lg mb-2">📊 Reunião Quinzenal</h4>
              <p className="text-white/80 text-base mb-2">Análise de metas, orçamento, testes A/B e planejamento de novos assistentes</p>
              <span className="text-blue-300 text-sm italic">Foco: Estratégia e crescimento</span>
            </div>
            
            <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
              <h4 className="text-green-300 font-bold text-lg mb-2">🎯 Revisão Mensal</h4>
              <p className="text-white/80 text-base mb-2">Análise completa do funil de vendas e projeções para o próximo mês</p>
              <span className="text-green-300 text-sm italic">Foco: Resultados e planejamento estratégico</span>
            </div>
          </div>
        </GlassContainer>
      </div>

      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-white/10 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">
          ✅ Definição de Sucesso até a Semana 6-8
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">🌐</div>
            <h4 className="text-blue-300 font-semibold mb-1">Site Performando</h4>
            <p className="text-white/70 text-sm">Página /fitness com performance acima do benchmark do mercado</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">📧</div>
            <h4 className="text-green-300 font-semibold mb-1">E-mails Eficazes</h4>
            <p className="text-white/70 text-sm">Taxa de resposta dos e-mails acima da média do mercado</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">⏱️</div>
            <h4 className="text-purple-300 font-semibold mb-1">Propostas Rápidas</h4>
            <p className="text-white/70 text-sm">Tempo para enviar proposta menor que 72 horas</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-yellow-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">💼</div>
            <h4 className="text-yellow-300 font-semibold mb-1">Pipeline Ativo</h4>
            <p className="text-white/70 text-sm">1-2 obras viáveis por mês em negociação</p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-green-300 text-lg font-medium">Atingindo esses 4 marcos, o sistema estará funcionando perfeitamente!</p>
        </div>
      </div>

      <Glossario termos={glossarioMetricas} />
    </div>
  </SlideTemplate>
)

// Glossário específico para métricas
const glossarioMetricas = [
  { termo: "NSM", definicao: "North Star Metric - métrica principal de sucesso", cor: "text-green-300" },
  { termo: "Leading Metrics", definicao: "Indicadores que antecipam resultados futuros", cor: "text-blue-300" },
  { termo: "MQL→SQL", definicao: "Conversão de lead qualificado para vendas", cor: "text-purple-300" },
  { termo: "TAT", definicao: "Turn Around Time - tempo de resposta", cor: "text-yellow-300" },
  { termo: "Benchmark", definicao: "Padrão de referência do mercado", cor: "text-red-300" },
  { termo: "Pipeline", definicao: "Funil de oportunidades em andamento", cor: "text-cyan-300" }
]


