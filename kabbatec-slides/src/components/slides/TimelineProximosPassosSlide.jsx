import { SlideTemplate } from '@/components/SlideTemplate'
import { TimelineStrategy } from '@/components/slides/TimelineStrategy'

export const TimelineProximosPassosSlide = () => (
  <SlideTemplate>
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-5xl font-bold text-white">Timeline & Próximos Passos</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <TimelineStrategy
          phases={[
            { 
              title: 'Kick-off & Alinhamento Estratégico', 
              description: 'Estabelecimento da base operacional e estratégica para o projeto',
              duration: 'Semana 0',
              details: [
                'Reunião de alinhamento com stakeholders e definição de objetivos',
                'Configuração de acessos e ferramentas necessárias',
                'Definição de KPIs e métricas de sucesso',
                'Mapeamento da jornada do cliente atual',
                'Configuração do ambiente de desenvolvimento e staging'
              ],
              deliverables: ['Documento de requisitos', 'Cronograma detalhado', 'Setup completo'],
              impact: 'Base sólida para execução eficiente'
            },
            { 
              title: 'Fundação Tecnológica', 
              description: 'Construção da infraestrutura base e sistemas fundamentais',
              duration: 'Semanas 0-1',
              details: [
                'Desenvolvimento da landing page otimizada para conversão',
                'Implementação de sistema de tracking e analytics avançado',
                'Configuração de CRM e automações básicas',
                'Setup de ferramentas de monitoramento e relatórios',
                'Integração com sistemas existentes da Kabbatec'
              ],
              deliverables: ['Landing page funcional', 'CRM configurado', 'Analytics implementado'],
              impact: 'Infraestrutura robusta para crescimento escalável'
            },
            { 
              title: 'Sprints de IA & Automação', 
              description: 'Desenvolvimento e implementação dos agentes de IA especializados',
              duration: 'Semanas 2-5',
              details: [
                'Agente Concierge: IA para qualificação e direcionamento de leads',
                'Agente Case Study: Automação de criação de casos de sucesso',
                'Agente Cadence: Sistema de follow-up inteligente e personalizado',
                'Testes A/B para otimização de conversas e fluxos',
                'Treinamento da equipe para utilização dos agentes'
              ],
              deliverables: ['3 agentes IA funcionais', 'Documentação técnica', 'Equipe treinada'],
              impact: 'Automação inteligente que escala sem aumentar custos'
            },
            { 
              title: 'Canais de Aquisição Multicanal', 
              description: 'Ativação e otimização de múltiplos canais de geração de leads',
              duration: 'Contínuo a partir da Semana 3',
              details: [
                'LinkedIn Ads: Campanhas segmentadas para decisores B2B',
                'Google Ads: Captura de demanda ativa por soluções similares',
                'Instagram: Conteúdo visual para awareness e engajamento',
                'Content Marketing: Blog posts e materiais educativos',
                'Email Marketing: Nurturing sequences automatizadas'
              ],
              deliverables: ['Campanhas ativas', 'Conteúdo criado', 'Fluxos de nurturing'],
              impact: 'Geração consistente e previsível de leads qualificados'
            },
            { 
              title: 'Otimização & Crescimento Contínuo', 
              description: 'Monitoramento, análise e otimização baseada em dados reais',
              duration: 'Contínuo a partir da Semana 4',
              details: [
                'Análise semanal de performance e KPIs definidos',
                'Otimização contínua de campanhas baseada em ROI',
                'Ajustes nos agentes IA baseados no feedback real',
                'Expansão para novos canais conforme resultados',
                'Implementação de melhorias sugeridas pelos dados'
              ],
              deliverables: ['Relatórios semanais', 'Otimizações implementadas', 'ROI crescente'],
              impact: 'Crescimento sustentável e melhoria contínua dos resultados'
            }
          ]}
        />
      </div>
    </div>
  </SlideTemplate>
)


