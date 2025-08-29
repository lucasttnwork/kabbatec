import { SlideTemplate } from '@/components/SlideTemplate'
import { GlassContainer } from '@/components/GlassContainer'
import { Glossario, glossarioSprints } from '@/components/Glossario'

export const PrimeirosSprintsSlide = () => (
  <SlideTemplate>
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-6xl font-extrabold text-white">Primeiros sprints (sem. 2–5)</h2>
        <p className="text-white/80 text-xl">Geração de demanda imediata + assistentes inteligentes operando</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassContainer intensity="heavy" className="p-8">
          <h3 className="text-3xl font-semibold text-white mb-3">Sprint 1 (sem. 2) — lançar e provar o básico</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">🎯 Primeira campanha de e-mail marketing</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Envio para 100-200 tomadores de decisão com mensagem personalizada para agendar reuniões</p>
              <span className="text-blue-300 text-sm pl-4 italic">Resultado esperado: 5-10 reuniões agendadas</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">📄 Distribuição de materiais de prova</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Primeiro case de sucesso + apresentação da empresa para reduzir tempo de confiança</p>
              <span className="text-green-300 text-sm pl-4 italic">Resultado esperado: Cliente entende rapidamente o que você faz</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">🤖 Assistente WhatsApp automático</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Bot que responde 24h, coleta informações básicas e registra no sistema comercial</p>
              <span className="text-purple-300 text-sm pl-4 italic">Resultado esperado: Nunca perder um lead por demora na resposta</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">📸 Criador automático de cases</h4>
              <p className="text-white/80 text-base pl-4 mb-2">IA que transforma fotos de obras em cases profissionais para redes sociais</p>
              <span className="text-orange-300 text-sm pl-4 italic">Resultado esperado: Conteúdo constante sem esforço manual</span>
            </div>
          </div>
        </GlassContainer>

        <GlassContainer intensity="heavy" className="p-8">
          <h3 className="text-3xl font-semibold text-white mb-3">Sprint 2 (sem. 3) — reforçar narrativa e recuperar interessados</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">📊 Apresentação comercial profissional</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Deck de 6-8 slides para usar em reuniões e enviar junto com propostas</p>
              <span className="text-blue-300 text-sm pl-4 italic">Resultado esperado: Reuniões mais estruturadas e convincentes</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">🔄 Otimização do site + remarketing</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Melhorias na experiência do usuário e anúncios para quem já visitou o site</p>
              <span className="text-green-300 text-sm pl-4 italic">Resultado esperado: Recuperar 30% dos visitantes que não converteram</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">📈 Segundo case publicado</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Mais uma prova social para aumentar credibilidade de forma cumulativa</p>
              <span className="text-purple-300 text-sm pl-4 italic">Resultado esperado: Dobrar a confiança demonstrada</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">✍️ Criador de mensagens personalizadas</h4>
              <p className="text-white/80 text-base pl-4 mb-2">IA que cria sequências de 3 mensagens adaptadas para cada tipo de cliente</p>
              <span className="text-orange-300 text-sm pl-4 italic">Resultado esperado: Mais respostas sem aumentar trabalho manual</span>
            </div>
          </div>
        </GlassContainer>

        <GlassContainer intensity="heavy" className="p-8">
          <h3 className="text-3xl font-semibold text-white mb-3">Sprint 3 (sem. 4) — expandir alcance com qualidade</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">📋 Expansão da lista de prospects</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Prospecção direcionada no LinkedIn para encontrar mais tomadores de decisão</p>
              <span className="text-blue-300 text-sm pl-4 italic">Resultado esperado: Dobrar o número de prospects qualificados</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">🧪 Testes de otimização do site</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Experimentos com títulos e botões para descobrir o que converte melhor</p>
              <span className="text-green-300 text-sm pl-4 italic">Resultado esperado: Aumentar taxa de conversão em 20-30%</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">📱 Terceiro case para anúncios</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Material adicional de prova social para usar em campanhas pagas</p>
              <span className="text-purple-300 text-sm pl-4 italic">Resultado esperado: Anúncios mais persuasivos e eficazes</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">🎯 Sistema de pontuação inteligente</h4>
              <p className="text-white/80 text-base pl-4 mb-2">IA que prioriza leads por tamanho do projeto, urgência, cargo e interesse demonstrado</p>
              <span className="text-orange-300 text-sm pl-4 italic">Resultado esperado: Focar energia nos leads que realmente vão fechar</span>
            </div>
          </div>
        </GlassContainer>

        <GlassContainer intensity="heavy" className="p-8">
          <h3 className="text-3xl font-semibold text-white mb-3">Sprint 4 (sem. 5) — eficiência e otimização</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">📊 Análise completa de resultados</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Revisão de todas as métricas: quantos leads viraram interessados, tempo até reunião, taxa de fechamento</p>
              <span className="text-blue-300 text-sm pl-4 italic">Resultado esperado: Identificar gargalos e oportunidades de melhoria</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">🔄 Atualização de materiais</h4>
              <p className="text-white/80 text-base pl-4 mb-2">Melhorias nos casos, apresentações e processos baseadas no aprendizado das primeiras semanas</p>
              <span className="text-green-300 text-sm pl-4 italic">Resultado esperado: Sistema cada vez mais eficaz</span>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2 text-lg">📝 Gerador automático de propostas</h4>
              <p className="text-white/80 text-base pl-4 mb-2">IA que cria minutas de proposta automaticamente a partir das informações coletadas na reunião</p>
              <span className="text-purple-300 text-sm pl-4 italic">Resultado esperado: Propostas enviadas em 24h ao invés de 1 semana</span>
            </div>
          </div>
        </GlassContainer>
      </div>

      <Glossario termos={glossarioSprints} />
    </div>
  </SlideTemplate>
)


