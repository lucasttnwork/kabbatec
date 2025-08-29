import { SlideTemplate } from '@/components/SlideTemplate'
import { GlassContainer } from '@/components/GlassContainer'
import { Glossario } from '@/components/Glossario'

export const ExpansaoSlide = () => (
  <SlideTemplate>
    <div className="space-y-10">
      <div className="text-center mb-6">
        <h2 className="text-6xl font-extrabold text-white tracking-tight">Fase de Expansão (90 dias em diante)</h2>
        <p className="text-white/80 text-xl">Consolidar o que funciona, escalar resultados e expandir para novos processos</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassContainer intensity="heavy" className="p-8">
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-xl flex items-center justify-center text-3xl mb-3">🚀</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Prioridade: Marketing e Vendas</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-green-300 font-bold text-xl mb-3">Manter e Evoluir Assistentes Atuais</h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-white/80 text-lg">Atendente Virtual (WhatsApp 24/7)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-white/80 text-lg">Criador de Cases Automático</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-white/80 text-lg">Redator de Mensagens Personalizadas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-white/80 text-lg">Classificador de Oportunidades</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-white/80 text-lg">Gerador de Propostas Rápidas</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10">
              <span className="text-green-300 text-base italic">Foco: Otimizar e escalar o que já está funcionando</span>
            </div>
          </div>
        </GlassContainer>
        <GlassContainer intensity="heavy" className="p-8">
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-xl flex items-center justify-center text-3xl mb-3">🏢</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Próxima Fase: Processos Internos</h3>
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="text-blue-300 font-bold text-xl mb-3">Novos Assistentes Especializados</h4>
              <div className="space-y-3">
                <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                  <h5 className="text-white font-medium text-lg mb-1">📊 Cotador Automático</h5>
                  <p className="text-white/70 text-base">Solicitação e comparação de orçamentos de fornecedores</p>
                </div>
                <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                  <h5 className="text-white font-medium text-lg mb-1">💰 Controlador Financeiro</h5>
                  <p className="text-white/70 text-base">Acompanhamento de custos e orçamento das obras</p>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                  <h5 className="text-white font-medium text-lg mb-1">📅 Planejador de Cronogramas</h5>
                  <p className="text-white/70 text-base">Gestão inteligente de prazos e etapas da obra</p>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
                  <h5 className="text-white font-medium text-lg mb-1">🎆 Pesquisador de Satisfação</h5>
                  <p className="text-white/70 text-base">Coleta feedback pós-obra e gera novos cases</p>
                </div>
              </div>
            </div>
          </div>
        </GlassContainer>
        <GlassContainer intensity="heavy" className="p-8">
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-xl flex items-center justify-center text-3xl mb-3">🎆</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Escala e Autoridade de Mercado</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-purple-300 font-bold text-xl mb-3">Estratégias de Crescimento</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-3 h-3 bg-purple-400 rounded-full mt-2"></span>
                  <div>
                    <h5 className="text-white font-medium text-lg">Duplicar Campanhas Vencedoras</h5>
                    <p className="text-white/70 text-base">Replicar estratégias que funcionaram em maior escala</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mt-2"></span>
                  <div>
                    <h5 className="text-white font-medium text-lg">Conteúdo em Vídeo e PR</h5>
                    <p className="text-white/70 text-base">Expansão para YouTube, podcast e mídia especializada</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full mt-2"></span>
                  <div>
                    <h5 className="text-white font-medium text-lg">Parcerias Estratégicas</h5>
                    <p className="text-white/70 text-base">Alianças com fornecedores e profissionais complementares</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mt-2"></span>
                  <div>
                    <h5 className="text-white font-medium text-lg">Novos Nichos de Mercado</h5>
                    <p className="text-white/70 text-base">Expansão para segmentos adjacentes com alta demanda</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10">
              <span className="text-purple-300 text-base italic">Objetivo: Tornar-se referência absoluta no mercado</span>
            </div>
          </div>
        </GlassContainer>
      </div>

      <Glossario termos={glossarioExpansao} />
    </div>
  </SlideTemplate>
)

// Glossário específico para expansão
const glossarioExpansao = [
  { termo: "Backoffice", definicao: "Processos internos e administrativos da empresa", cor: "text-blue-300" },
  { termo: "NPS", definicao: "Net Promoter Score - índice de satisfação do cliente", cor: "text-green-300" },
  { termo: "Compliance", definicao: "Conformidade com normas e regulamentações", cor: "text-purple-300" },
  { termo: "PR", definicao: "Public Relations - relações públicas e imprensa", cor: "text-yellow-300" },
  { termo: "Nichos", definicao: "Segmentos específicos de mercado", cor: "text-red-300" },
  { termo: "Escalabilidade", definicao: "Capacidade de crescer mantendo eficiência", cor: "text-cyan-300" }
]


