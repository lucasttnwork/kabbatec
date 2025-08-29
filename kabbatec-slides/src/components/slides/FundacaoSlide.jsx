import { SlideTemplate } from '@/components/SlideTemplate'
import { GlassContainer } from '@/components/GlassContainer'
import { Glossario, glossarioFundacao } from '@/components/Glossario'

export const FundacaoSlide = () => (
  <SlideTemplate>
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white">Fase de Fundação (semana 0–1)</h2>
        <p className="text-white/80 text-xl">Objetivo: base técnica, comercial e digital pronta para captar e medir.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Card Infraestrutura */}
        <GlassContainer intensity="heavy" className="p-8 w-full max-w-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl mb-3">🔧</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Infraestrutura</h3>
            <p className="text-blue-300 text-base">Base técnica para entregabilidade</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-white font-medium text-lg mb-2 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                E-mails profissionais blindados
              </h4>
              <p className="text-white/70 text-base pl-4 mb-1">
                Configuração SPF/DKIM/DMARC para que seus e-mails sempre cheguem na caixa de entrada (nunca no spam)
              </p>
              <span className="text-blue-300 text-sm pl-4 italic">Impacto: 95% dos seus e-mails serão entregues corretamente</span>
            </div>

            <div>
              <h4 className="text-white font-medium text-lg mb-2 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Rastreamento inteligente completo
              </h4>
              <p className="text-white/70 text-base pl-4 mb-1">
                Sistema GA4 + GTM + GSC que monitora cada clique, visita e conversão do seu site
              </p>
              <span className="text-green-300 text-sm pl-4 italic">Impacto: Você saberá exatamente o que gera resultados</span>
            </div>

            <div>
              <h4 className="text-white font-medium text-lg mb-2 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Identificação da origem de cada lead
              </h4>
              <p className="text-white/70 text-sm pl-4 mb-1">
                UTMs padronizadas para saber se o lead veio do LinkedIn, Google, Instagram ou outra fonte
              </p>
              <span className="text-purple-300 text-xs pl-4 italic">Impacto: Investir apenas no que realmente funciona</span>
            </div>
          </div>
        </GlassContainer>

        {/* Card CRM */}
        <GlassContainer intensity="heavy" className="p-8 w-full max-w-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl mb-3">📊</div>
            <h3 className="text-3xl font-semibold text-white mb-3">CRM Operacional</h3>
            <p className="text-purple-300 text-base">Pipeline e qualificação</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-white font-medium text-lg mb-2 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Funil de vendas estruturado
              </h4>
              <p className="text-white/70 text-base pl-4 mb-2">
                Cada lead passa por etapas claras: Contato inicial → Lead qualificado → Interessado real → Briefing → Proposta → Negociação → Fechamento
              </p>
              <div className="pl-4">
                <div className="bg-white/5 rounded-lg p-2 text-sm">
                  <span className="text-blue-300">MQL</span> = Lead com perfil ideal | 
                  <span className="text-green-300 ml-2">SQL</span> = Lead com orçamento e urgência
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium text-lg mb-2 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Informações essenciais de cada cliente
              </h4>
              <p className="text-white/70 text-base pl-4 mb-1">
                Cadastro completo: Tipo de negócio, localização, quem decide, tamanho do projeto, quando quer fazer, quanto quer investir
              </p>
              <span className="text-green-300 text-sm pl-4 italic">Impacto: Propostas certeiras e priorizadas</span>
            </div>

            <div>
              <h4 className="text-white font-medium text-lg mb-2 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Roteiro de reunião padronizado
              </h4>
              <p className="text-white/70 text-sm pl-4 mb-1">
                Script estruturado para descobrir necessidades, orçamento e urgência do cliente
              </p>
              <span className="text-purple-300 text-xs pl-4 italic">Impacto: Propostas mais assertivas e maior taxa de fechamento</span>
            </div>
          </div>
        </GlassContainer>

        {/* Card Ativos */}
        <GlassContainer intensity="heavy" className="p-8 w-full max-w-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-3xl mb-3">🎯</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Ativos de Venda</h3>
            <p className="text-green-300 text-base">Prova social e conversão</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-white font-medium text-lg mb-2 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Página de conversão profissional
              </h4>
              <p className="text-white/70 text-sm pl-4 mb-1">
                Site "/fitness" conectado ao sistema comercial com formulários que capturam leads automaticamente
              </p>
              <span className="text-blue-300 text-xs pl-4 italic">Impacto: Cada visitante vira lead no sistema</span>
            </div>

            <div>
              <h4 className="text-white font-medium text-lg mb-2 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Cases de sucesso publicados
              </h4>
              <p className="text-white/70 text-sm pl-4 mb-1">
                Primeiro case antes/depois + apresentação da empresa para reduzir desconfiança inicial
              </p>
              <span className="text-green-300 text-xs pl-4 italic">Impacto: Cliente vê que você entrega resultados reais</span>
            </div>

            <div>
              <h4 className="text-white font-medium text-lg mb-2 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Instagram profissional configurado
              </h4>
              <p className="text-white/70 text-sm pl-4 mb-1">
                Perfil organizado com destaques, biografia clara e link rastreável para medir origens
              </p>
              <span className="text-purple-300 text-xs pl-4 italic">Impacto: Credibilidade profissional + mensuração de resultados</span>
            </div>
          </div>
        </GlassContainer>
      </div>

      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-white/10">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">
          ✅ Entregas Garantidas da Fase 1
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">🌐</div>
            <h4 className="text-blue-300 font-semibold mb-1">Site Funcional</h4>
            <ul className="text-white/70 text-base space-y-1">
              <li>• Página /fitness com 2 botões de ação visíveis</li>
              <li>• 3 cases de sucesso publicados</li>
              <li>• Site carregando em menos de 2,5 segundos</li>
              <li>• Rastreamento completo funcionando</li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">📊</div>
            <h4 className="text-purple-300 font-semibold mb-1">Sistema Comercial</h4>
            <ul className="text-white/70 text-base space-y-1">
              <li>• CRM configurado com funil de vendas</li>
              <li>• Campos de cadastro organizados</li>
              <li>• Primeiro lote de contatos importado</li>
              <li>• Roteiro de briefing pronto</li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">📄</div>
            <h4 className="text-green-300 font-semibold mb-1">Materiais de Prova</h4>
            <ul className="text-white/70 text-base space-y-1">
              <li>• Apresentação da empresa (1 página)</li>
              <li>• Primeiro case antes/depois</li>
              <li>• Instagram profissional otimizado</li>
              <li>• Templates de proposta</li>
            </ul>
          </div>
        </div>
      </div>

      <Glossario termos={glossarioFundacao} />
    </div>
  </SlideTemplate>
)


