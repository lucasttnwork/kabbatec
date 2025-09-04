import React from 'react'

export const Glossario = ({ termos = [] }) => {
  if (!termos || termos.length === 0) return null;

  return (
    <div className="mt-8 pt-6 border-t border-white/10 mb-8">
      <h4 className="text-white/70 text-lg font-medium mb-3 text-center">💡 Glossário Rápido</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        {termos.map((termo, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-3">
            <span className={`${termo.cor || 'text-blue-300'} font-medium text-base`}>{termo.termo}</span>
            <p className="text-white/60 text-sm">{termo.definicao}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Glossários predefinidos para diferentes slides
export const glossarioFundacao = [
  { termo: "SPF/DKIM", definicao: "Certificados que provam legitimidade dos e-mails", cor: "text-blue-300" },
  { termo: "GA4", definicao: "Google Analytics 4 - ferramenta de análise web", cor: "text-green-300" },
  { termo: "UTM", definicao: "Código para rastrear origem do tráfego", cor: "text-purple-300" },
  { termo: "CTA", definicao: "Call-to-Action - botão de ação no site", cor: "text-yellow-300" },
  { termo: "MQL", definicao: "Marketing Qualified Lead - lead com perfil ideal", cor: "text-red-300" },
  { termo: "SQL", definicao: "Sales Qualified Lead - lead pronto para venda", cor: "text-cyan-300" },
  { termo: "CRM", definicao: "Sistema de gestão de relacionamento com clientes", cor: "text-pink-300" },
  { termo: "LCP", definicao: "Largest Contentful Paint - velocidade de carregamento", cor: "text-orange-300" }
]

export const glossarioSprints = [
  { termo: "Sprint", definicao: "Período de trabalho focado (1-2 semanas)", cor: "text-blue-300" },
  { termo: "Retargeting", definicao: "Anúncios para quem já visitou seu site", cor: "text-green-300" },
  { termo: "A/B Test", definicao: "Comparar duas versões para ver qual funciona melhor", cor: "text-purple-300" },
  { termo: "ABM", definicao: "Account-Based Marketing - marketing direcionado", cor: "text-yellow-300" },
  { termo: "Landing Page", definicao: "Página específica para conversão de visitantes", cor: "text-red-300" },
  { termo: "UX/SEO", definicao: "Experiência do usuário + otimização para Google", cor: "text-cyan-300" }
]

export const glossarioAgentes = [
  { termo: "IA", definicao: "Inteligência Artificial - computador que aprende", cor: "text-blue-300" },
  { termo: "Bot", definicao: "Robô virtual que executa tarefas automaticamente", cor: "text-green-300" },
  { termo: "Briefing", definicao: "Reunião para entender necessidades do cliente", cor: "text-purple-300" },
  { termo: "Follow-up", definicao: "Mensagem de acompanhamento após contato inicial", cor: "text-yellow-300" },
  { termo: "Lead", definicao: "Pessoa interessada em contratar seus serviços", cor: "text-red-300" },
  { termo: "Prospect", definicao: "Cliente em potencial identificado", cor: "text-cyan-300" }
]

export const glossarioEntregaveis = [
  { termo: "ROI", definicao: "Return on Investment - retorno do investimento", cor: "text-blue-300" },
  { termo: "One-pager", definicao: "Apresentação resumida em uma página", cor: "text-green-300" },
  { termo: "Deck", definicao: "Apresentação em slides para reuniões", cor: "text-purple-300" },
  { termo: "ICP", definicao: "Ideal Customer Profile - perfil do cliente ideal", cor: "text-yellow-300" },
  { termo: "Google Ads", definicao: "Anúncios pagos que aparecem no Google", cor: "text-red-300" },
  { termo: "Conversão", definicao: "Visitante que se torna lead ou cliente", cor: "text-cyan-300" }
]
