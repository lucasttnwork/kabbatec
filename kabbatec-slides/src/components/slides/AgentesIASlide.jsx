import { motion } from 'framer-motion'
import { SlideTemplate } from '@/components/SlideTemplate'
import { GlassContainer } from '@/components/GlassContainer'
import { Glossario, glossarioAgentes } from '@/components/Glossario'

export const AgentesIASlide = () => (
  <SlideTemplate>
    <div className="space-y-10">
      <motion.div className="text-center mb-8 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4">
          Assistentes Inteligentes para Marketing e Vendas
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-5xl mx-auto">5 assistentes virtuais especializados que trabalham 24/7 para gerar e converter leads automaticamente.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <AgentCard
          name="ATENDENTE VIRTUAL"
          avatar="🤖"
          role="Recepcionista WhatsApp 24/7"
          startWeek="Semana 2"
          functions={[
            'Responde mensagens a qualquer hora',
            'Pergunta: tamanho da obra, localização, prazo',
            'Salva tudo no sistema automaticamente',
            'Agenda reunião em 15 minutos',
          ]}
          impact="Resposta imediata + mais reuniões marcadas + zero leads perdidos"
          color="from-green-400 to-emerald-500"
          delay={0.1}
        />
        <AgentCard
          name="CRIADOR DE CASES"
          avatar="📸"
          role="Produtor de Conteúdo Automático"
          startWeek="Semana 2"
          functions={['Transforma fotos simples em cases profissionais', 'Adiciona números e depoimentos dos clientes', 'Cria posts prontos para Instagram e LinkedIn', 'Publica conteúdo constantemente']}
          impact="Conteúdo profissional constante + mais credibilidade + economia de tempo"
          color="from-blue-500 to-cyan-500"
          delay={0.15}
        />
        <AgentCard
          name="REDATOR PERSONALIZADO"
          avatar="✍️"
          role="Especialista em Mensagens"
          startWeek="Semana 3"
          functions={[
            'Escreve e-mails e mensagens únicas para cada prospect',
            'Adapta tom conforme tipo de cliente e região',
            'Cria sequência de 3 mensagens de follow-up',
            'Melhora taxa de resposta continuamente',
          ]}
          impact="Mais respostas + mais reuniões + zero trabalho manual de escrita"
          color="from-purple-500 to-pink-500"
          delay={0.2}
        />
        <AgentCard
          name="CLASSIFICADOR DE OPORTUNIDADES"
          avatar="🎯"
          role="Analista de Prioridades"
          startWeek="Semana 4"
          functions={['Classifica leads por tamanho e urgência do projeto', 'Identifica quem tem maior potencial de fechamento', 'Sugere qual lead abordar primeiro', 'Otimiza uso do tempo da equipe']}
          impact="Foco nos clientes que realmente vão fechar + maior eficiência"
          color="from-orange-400 to-red-500"
          delay={0.25}
        />
        <AgentCard
          name="GERADOR DE PROPOSTAS"
          avatar="📋"
          role="Especialista em Orçamentos"
          startWeek="Semana 5"
          functions={[
            'Cria proposta automaticamente após a reunião',
            'Inclui cases similares ao projeto do cliente',
            'Define escopo detalhado e cronograma',
            'Entrega proposta em 24 horas',
          ]}
          impact="Propostas super rápidas + maior chance de fechamento"
          color="from-indigo-500 to-blue-600"
          delay={0.3}
        />

        <motion.div className="lg:col-span-1 flex items-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
          <GlassContainer className="h-full w-full bg-gradient-to-br from-slate-800/40 to-slate-700/40">
            <div className="text-center h-full flex flex-col justify-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Próximas Funcionalidades</h3>
              <p className="text-white/70 text-sm mb-4">Assistentes futuros (meses 2-4):</p>
              <div className="text-left text-sm text-white/60 space-y-1">
                <p>• Cotador Automático de Materiais</p>
                <p>• Controlador Financeiro de Projetos</p>
                <p>• Planejador Inteligente de Cronogramas</p>
                <p>• Pesquisador de Satisfação Pós-Obra</p>
                <p>• Monitor de Qualidade e Aprendizado</p>
              </div>
            </div>
          </GlassContainer>
        </motion.div>
      </div>

      <motion.div className="mt-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <GlassContainer intensity="heavy">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Controle de Qualidade e Supervisão</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-3xl mb-4">👥</div>
              <h4 className="text-white font-medium mb-2 text-lg">Supervisão Humana</h4>
              <p className="text-white/60 text-sm">Você aprova mensagens importantes e propostas antes do envio</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-3xl mb-4">📊</div>
              <h4 className="text-white font-medium mb-2 text-lg">Relatórios Detalhados</h4>
              <p className="text-white/60 text-sm">Tempo de resposta, automatização e taxa de sucesso de cada assistente</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-3xl mb-4">🎯</div>
              <h4 className="text-white font-medium mb-2 text-lg">Controle de Qualidade</h4>
              <p className="text-white/60 text-sm">Sistema mantém padrão de comunicação e precisão das respostas</p>
            </div>
          </div>
        </GlassContainer>
      </motion.div>

      <Glossario termos={glossarioAgentes} />
    </div>
  </SlideTemplate>
)

const AgentCard = ({ name, avatar, role, startWeek, functions, impact, color, delay }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay }} whileHover={{ scale: 1.05, rotateY: 5 }} className="group">
    <GlassContainer className="h-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <div className="text-center mb-4">
        <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-5xl mb-3 group-hover:scale-110 transition-transform duration-300`}>{avatar}</div>
        <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${color} bg-opacity-20 border border-white/20 mb-2`}>
          <span className="text-white font-bold text-base">{name}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{role}</h3>
        <p className="text-blue-300 text-sm font-medium">{startWeek}</p>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="text-white font-medium mb-2 text-lg">Funções</h4>
          <ul className="text-white/80 text-base space-y-1">
            {functions.map((func, index) => (
              <li key={index}>• {func}</li>
            ))}
          </ul>
        </div>
        <div className="pt-3 border-t border-white/10">
          <p className="text-green-300 font-medium text-base leading-relaxed">
            <strong>Impacto:</strong> {impact}
          </p>
        </div>
      </div>
    </GlassContainer>
  </motion.div>
)


