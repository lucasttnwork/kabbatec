import { motion } from 'framer-motion'
import { SlideTemplate } from '@/components/SlideTemplate'
import { GlassContainer } from '@/components/GlassContainer'

export const CanaisAquisicaoSlide = () => (
  <SlideTemplate>
    <div className="space-y-10">
      <motion.div className="text-center mb-12">
        <h2 className="text-6xl font-extrabold text-white mb-3">
          Canais de aquisição — onde e como vamos ganhar
        </h2>
        <p className="text-white/80 text-xl">LinkedIn (prioridade #1), Google Ads (intenção alta) e Instagram (prova social)</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ChannelCard
          icon="💼"
          title="LinkedIn"
          priority="Prioridade #1"
          strategy="Company Page + perfis pessoais"
          flow="Conexão → Valor → Case → Call"
          tactics={['Company Page + perfis pessoais', 'Conexão → valor → case → call', 'Message Ads com formulários nativos']}
          impact="↑ reuniões qualificadas por semana"
          color="from-blue-600 to-blue-400"
          delay={0.1}
        />

        <ChannelCard
          icon="🔍"
          title="Google Ads"
          priority="Intenção Alta"
          strategy="Termos específicos de busca"
          flow="Busca → Landing → Conversão"
          tactics={['“obra academia SP”', '“reforma studio funcional”']}
          impact="Leads mais quentes e ciclos mais curtos"
          color="from-green-500 to-emerald-400"
          delay={0.2}
        />

        <ChannelCard
          icon="📸"
          title="Instagram"
          priority="Prova Social"
          strategy="1–3 posts/semana + Stories"
          flow="Conteúdo → Engajamento → Link Bio"
          tactics={['Stories com stickers (perguntas/enquetes)', 'Link para /fitness', 'Validação social + estética']}
          impact="↑ cliques no link da bio e DMs qualificadas"
          color="from-purple-500 to-pink-400"
          delay={0.3}
        />
      </div>

      <motion.div className="mt-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <GlassContainer intensity="heavy">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Matriz de Performance por Canal</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-white/70 pb-3">Canal</th>
                  <th className="text-center text-white/70 pb-3">Ticket Médio</th>
                  <th className="text-center text-white/70 pb-3">Tempo Ciclo</th>
                  <th className="text-center text-white/70 pb-3">Taxa Conversão</th>
                  <th className="text-center text-white/70 pb-3">CAC</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-white/10">
                  <td className="text-white font-medium py-3">LinkedIn</td>
                  <td className="text-center text-green-300 py-3">Alto</td>
                  <td className="text-center text-yellow-300 py-3">30-45 dias</td>
                  <td className="text-center text-green-300 py-3">8-12%</td>
                  <td className="text-center text-blue-300 py-3">R$ 450</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="text-white font-medium py-3">Google Ads</td>
                  <td className="text-center text-green-300 py-3">Médio-Alto</td>
                  <td className="text-center text-green-300 py-3">15-25 dias</td>
                  <td className="text-center text-yellow-300 py-3">4-6%</td>
                  <td className="text-center text-yellow-300 py-3">R$ 680</td>
                </tr>
                <tr>
                  <td className="text-white font-medium py-3">Instagram</td>
                  <td className="text-center text-yellow-300 py-3">Médio</td>
                  <td className="text-center text-yellow-300 py-3">45-60 dias</td>
                  <td className="text-center text-yellow-300 py-3">3-5%</td>
                  <td className="text-center text-green-300 py-3">R$ 320</td>
                </tr>
              </tbody>
            </table>
          </div>
        </GlassContainer>
      </motion.div>
    </div>
  </SlideTemplate>
)

const ChannelCard = ({ icon, title, priority, strategy, flow, tactics, impact, color, delay }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay }} whileHover={{ scale: 1.02, y: -5 }}>
    <GlassContainer className="h-full">
      <div className="text-center mb-6">
        <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-5xl mb-4`}>{icon}</div>
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <p className="text-base font-medium text-blue-300 mt-1">{priority}</p>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="text-white font-semibold mb-2">Estratégia</h4>
          <p className="text-white/80 text-base">{strategy}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Fluxo</h4>
          <p className="text-blue-300 text-base font-mono">{flow}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Táticas</h4>
          <ul className="text-white/80 text-base space-y-1">
            {tactics.map((t, i) => (
              <li key={i}>• {t}</li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t border-white/10">
          <p className="text-green-300 font-medium text-base">Impacto: {impact}</p>
        </div>
      </div>
    </GlassContainer>
  </motion.div>
)


