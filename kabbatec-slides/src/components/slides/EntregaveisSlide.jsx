import { SlideTemplate } from '@/components/SlideTemplate'
import { GlassContainer } from '@/components/GlassContainer'
import { Glossario, glossarioEntregaveis } from '@/components/Glossario'

export const EntregaveisSlide = () => (
  <SlideTemplate>
    <div className="space-y-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white">O Que Você Recebe na Primeira Fase</h2>
        <p className="text-white/80 text-xl">Tudo que será entregue pronto e funcionando</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassContainer className="p-8">
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">🌐</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Site Profissional Funcional</h3>
          </div>
          <div className="space-y-2">
            <p className="text-white/60 text-sm">• Página "/fitness" otimizada para conversão</p>
            <p className="text-white/60 text-sm">• Rastreamento GA4 completo funcionando</p>
            <p className="text-white/60 text-sm">• Botões de ação bem posicionados</p>
            <p className="text-white/60 text-sm">• Cases de sucesso publicados</p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10">
            <span className="text-blue-300 text-sm italic">Resultado: Site que gera leads automaticamente</span>
          </div>
        </GlassContainer>
        <GlassContainer className="p-8">
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">📄</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Materiais de Apresentação</h3>
          </div>
          <div className="space-y-2">
            <p className="text-white/60 text-sm">• Apresentação de 1 página da empresa</p>
            <p className="text-white/60 text-sm">• Deck comercial de 6-8 slides</p>
            <p className="text-white/60 text-sm">• História da empresa e cases de sucesso</p>
            <p className="text-white/60 text-sm">• Definição clara do cliente ideal</p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10">
            <span className="text-green-300 text-sm italic">Resultado: Reuniões mais convincentes e profissionais</span>
          </div>
        </GlassContainer>
        <GlassContainer className="p-8">
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">📸</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Cases de Sucesso Publicados</h3>
          </div>
          <div className="space-y-2">
            <p className="text-white/60 text-sm">• 3 projetos antes/depois bem documentados</p>
            <p className="text-white/60 text-sm">• Métricas reais dos resultados obtidos</p>
            <p className="text-white/60 text-sm">• Depoimentos dos clientes atendidos</p>
            <p className="text-white/60 text-sm">• Fotos profissionais dos projetos</p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10">
            <span className="text-purple-300 text-sm italic">Resultado: Credibilidade instantânea e confiança do cliente</span>
          </div>
        </GlassContainer>
        <GlassContainer className="p-8">
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-red-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">🎯</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Estratégia de Anúncios Online</h3>
          </div>
          <div className="space-y-2">
            <p className="text-white/60 text-sm">• Lista de palavras-chave que geram vendas</p>
            <p className="text-white/60 text-sm">• Campanhas estruturadas no Google Ads</p>
            <p className="text-white/60 text-sm">• Público-alvo bem definido</p>
            <p className="text-white/60 text-sm">• Orçamento otimizado para ROI</p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10">
            <span className="text-red-300 text-sm italic">Resultado: Tráfego qualificado e leads com intenção de compra</span>
          </div>
        </GlassContainer>
        <GlassContainer className="p-8">
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-yellow-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">📝</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Documentação Jurídica</h3>
          </div>
          <div className="space-y-2">
            <p className="text-white/60 text-sm">• Contrato padrão de 3 meses iniciais</p>
            <p className="text-white/60 text-sm">• Cláusulas de continuidade definidas</p>
            <p className="text-white/60 text-sm">• Escopo de trabalho detalhado</p>
            <p className="text-white/60 text-sm">• Termos de pagamento claros</p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10">
            <span className="text-yellow-300 text-sm italic">Resultado: Segurança jurídica e expectativas alinhadas</span>
          </div>
        </GlassContainer>
        <GlassContainer className="p-8">
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-cyan-500/20 rounded-xl flex items-center justify-center text-2xl mb-2">🤖</div>
            <h3 className="text-3xl font-semibold text-white mb-3">Assistentes Virtuais Ativos</h3>
          </div>
          <div className="space-y-2">
            <p className="text-white/60 text-sm">• Atendente WhatsApp 24/7 funcionando</p>
            <p className="text-white/60 text-sm">• Criador automático de conteúdo</p>
            <p className="text-white/60 text-sm">• Redator de mensagens personalizadas</p>
            <p className="text-white/60 text-sm">• Classificador de oportunidades</p>
            <p className="text-white/60 text-sm">• Gerador de propostas rápidas</p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10">
            <span className="text-cyan-300 text-sm italic">Resultado: Operação comercial automatizada e eficiente</span>
          </div>
        </GlassContainer>
      </div>

      <Glossario termos={glossarioEntregaveis} />
    </div>
  </SlideTemplate>
)


