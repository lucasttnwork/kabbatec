'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";



export default function Home() {
  const [segmentFilter, setSegmentFilter] = useState<'Todos' | 'Corporativo' | 'Fitness' | 'Residencial'>('Todos');

  const projects = [
    {
      id: 1,
      title: 'Escritório Tech - Centro SP',
      segment: 'Corporativo' as const,
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
      description: 'Retrofit completo, acústica e luminotécnica premium.'
    },
    {
      id: 2,
      title: 'Academia Premium - Socorro',
      segment: 'Fitness' as const,
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
      description: 'Execução com piso esportivo, mezanino e HVAC dimensionado.'
    },
    {
      id: 3,
      title: 'Residência Lago Norte',
      segment: 'Residencial' as const,
      image: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1600&auto=format&fit=crop',
      description: 'Arquitetura contemporânea com painéis ripados e brises metálicos.'
    },
    {
      id: 4,
      title: 'Headquarter Finance',
      segment: 'Corporativo' as const,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
      description: 'Obra rápida em ambiente ocupado com zero downtime.'
    },
  ];

  const visibleProjects = projects.filter(p => segmentFilter === 'Todos' ? true : p.segment === segmentFilter);

  async function sendContact(formData: FormData) {
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) });
    alert('Mensagem enviada com sucesso!');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    void sendContact(fd);
    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 mx-4 my-8 hero-bg">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glass-card-hero rounded-[28px] p-12 mx-auto max-w-5xl">
            <Badge className="mb-6 px-4 py-2 bg-white/10 text-white/80 border-white/20 font-medium tracking-widest uppercase">
              KABBATEC CONSTRUÇÕES
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-[-0.015em]">
              Construindo o Futuro com
              <span className="text-primary block mt-2">Inovação e Precisão</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Transforme seu espaço com líderes em arquitetura moderna. Mais de 30 anos de experiência consolidada em projetos que superam expectativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a href="#contato" className="cta-primary text-base sm:text-lg inline-flex items-center justify-center">Fale com um Especialista</a>
              <a href="#projetos" className="cta-secondary text-base sm:text-lg inline-flex items-center justify-center">Conheça Nossos Projetos</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-3" style={{fontFamily: 'var(--font-space-grotesk)'}}>+30</div>
              <div className="text-muted-foreground font-medium">Anos de Experiência</div>
            </div>
            <div className="stat-card rounded-2xl p-8 text-center" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold text-primary mb-3" style={{fontFamily: 'var(--font-space-grotesk)'}}>500+</div>
              <div className="text-muted-foreground font-medium">Projetos Concluídos</div>
            </div>
            <div className="stat-card rounded-2xl p-8 text-center" style={{animationDelay: '0.4s'}}>
              <div className="text-5xl font-bold text-primary mb-3" style={{fontFamily: 'var(--font-space-grotesk)'}}>100%</div>
              <div className="text-muted-foreground font-medium">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-white/5" aria-label="Clientes e parceiros">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
            <div className="glass-card rounded-xl h-16 flex items-center justify-center p-4"><img src="/next.svg" alt="Cliente 1" className="h-8 logo-item" /></div>
            <div className="glass-card rounded-xl h-16 flex items-center justify-center p-4"><img src="/vercel.svg" alt="Cliente 2" className="h-8 logo-item" /></div>
            <div className="glass-card rounded-xl h-16 flex items-center justify-center p-4"><img src="/globe.svg" alt="Cliente 3" className="h-8 logo-item" /></div>
            <div className="glass-card rounded-xl h-16 flex items-center justify-center p-4"><img src="/window.svg" alt="Cliente 4" className="h-8 logo-item" /></div>
            <div className="glass-card rounded-xl h-16 flex items-center justify-center p-4"><img src="/file.svg" alt="Cliente 5" className="h-8 logo-item" /></div>
            <div className="glass-card rounded-xl h-16 flex items-center justify-center p-4"><img src="/vercel.svg" alt="Cliente 6" className="h-8 logo-item" /></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Execução excepcional desde o planejamento até a entrega final, garantindo resultados que superam expectativas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card text-center scale-on-hover fade-in-up hover:bg-accent/5 transition-all duration-500">
              <CardHeader className="pb-4">
                <CardTitle className="text-primary text-xl">Execução Excepcional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Precisão inigualável desde o planejamento até a entrega final, garantindo resultados que superam as expectativas.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card text-center scale-on-hover fade-in-up hover:bg-accent/5 transition-all duration-500" style={{animationDelay: '0.1s'}}>
              <CardHeader className="pb-4">
                <CardTitle className="text-primary text-xl">Gestão Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Controle rigoroso de projetos com eficiência comprovada, assegurando cumprimento de prazos e otimização de recursos.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card text-center scale-on-hover fade-in-up hover:bg-accent/5 transition-all duration-500" style={{animationDelay: '0.2s'}}>
              <CardHeader className="pb-4">
                <CardTitle className="text-primary text-xl">Design Inovador</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Criamos espaços que combinam funcionalidade com estética moderna, elevando o padrão de design arquitetônico.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card text-center scale-on-hover fade-in-up hover:bg-accent/5 transition-all duration-500" style={{animationDelay: '0.3s'}}>
              <CardHeader className="pb-4">
                <CardTitle className="text-primary text-xl">Tecnologia Avançada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Empregamos as mais recentes tecnologias para melhorar a eficácia da construção e oferecer soluções sustentáveis.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold">Projetos em Destaque</h2>
              <p className="text-muted-foreground mt-2">Seleção de obras com entrega de alta performance.</p>
            </div>
            <div className="flex gap-2 glass-card rounded-full p-1">
              {(['Todos','Corporativo','Fitness','Residencial'] as const).map(seg => (
                <button key={seg} onClick={() => setSegmentFilter(seg)} className={`px-4 py-2 rounded-full text-sm transition ${segmentFilter===seg? 'bg-primary text-primary-foreground':'hover:bg-white/5'}`}>{seg}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map(project => (
              <div key={project.id} className="relative overflow-hidden rounded-2xl group glass-card p-0">
                <div className="h-60 w-full" style={{backgroundImage:`url(${project.image})`, backgroundSize:'cover', backgroundPosition:'center'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs text-primary mb-1">{project.segment}</div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Como Funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Processo transparente e eficiente do primeiro contato à entrega.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 fade-in-up">
              <div className="text-sm text-primary mb-2">Etapa 01</div>
              <h3 className="font-semibold mb-2">Briefing e Diagnóstico</h3>
              <p className="text-muted-foreground">Entendemos o objetivo, o orçamento e o prazo para construir o melhor plano.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 fade-in-up" style={{animationDelay:'0.1s'}}>
              <div className="text-sm text-primary mb-2">Etapa 02</div>
              <h3 className="font-semibold mb-2">Projeto e Viabilidade</h3>
              <p className="text-muted-foreground">Desenvolvemos o anteprojeto, definimos materiais e validamos custos.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 fade-in-up" style={{animationDelay:'0.2s'}}>
              <div className="text-sm text-primary mb-2">Etapa 03</div>
              <h3 className="font-semibold mb-2">Execução e Gestão</h3>
              <p className="text-muted-foreground">Obra monitorada com cronograma, checkpoints e comunicação ativa.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 fade-in-up" style={{animationDelay:'0.3s'}}>
              <div className="text-sm text-primary mb-2">Etapa 04</div>
              <h3 className="font-semibold mb-2">Entrega e Pós-Obra</h3>
              <p className="text-muted-foreground">Entrega com checklist e garantia, além de acompanhamento pós-obra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              O que Nossos Clientes Dizem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card scale-on-hover fade-in-up hover:bg-accent/5 transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="bg-primary/20 border-2 border-primary/30">
                    <AvatarFallback className="text-primary font-semibold">AG</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Angelo</CardTitle>
                    <CardDescription className="text-primary font-medium">Empresário</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
              <p className="text-muted-foreground leading-relaxed italic">
                &quot;Sobre a Kabbatec só tenho elogios para empresa, personalização do projeto, execução da obra nos prazos combinados e suporte do início ao final do projeto, recomendo sempre&quot;.
              </p>
              </CardContent>
            </Card>
            <Card className="glass-card scale-on-hover fade-in-up hover:bg-accent/5 transition-all duration-500" style={{animationDelay: '0.2s'}}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="bg-primary/20 border-2 border-primary/30">
                    <AvatarFallback className="text-primary font-semibold">EV</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Everton</CardTitle>
                    <CardDescription className="text-primary font-medium">Empresário</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
              <p className="text-muted-foreground leading-relaxed italic">
                &quot;Fizeram a entrega de um projeto maravilhoso, realmente superou nossa expectativa. O acompanhamento da obra foi excelente, tudo muito profissional e organizado.&quot;
              </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            <details className="glass-card rounded-xl p-5">
              <summary className="cursor-pointer font-medium">Como a Kabbatec garante prazo e qualidade?</summary>
              <p className="mt-3 text-muted-foreground">Seguimos um cronograma com marcos de aprovação, controle de qualidade em cada etapa e time dedicado de gestão.</p>
            </details>
            <details className="glass-card rounded-xl p-5">
              <summary className="cursor-pointer font-medium">Vocês ajudam com licenças e documentação?</summary>
              <p className="mt-3 text-muted-foreground">Sim. Cuidamos do fluxo de licenças, alvarás e interface com órgãos competentes quando necessário.</p>
            </details>
            <details className="glass-card rounded-xl p-5">
              <summary className="cursor-pointer font-medium">Posso adequar o projeto ao meu orçamento?</summary>
              <p className="mt-3 text-muted-foreground">Apresentamos alternativas de materiais e soluções para manter estética, funcionalidade e custos sob controle.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vamos conversar</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <input name="name" className="rounded-xl bg-transparent border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="Seu nome" required />
              <input name="email" className="rounded-xl bg-transparent border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40" type="email" placeholder="Seu e-mail" required />
              <input name="subject" className="md:col-span-2 rounded-xl bg-transparent border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="Assunto" />
              <textarea name="message" className="md:col-span-2 rounded-xl bg-transparent border border-white/10 px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="Mensagem" required />
              <div className="md:col-span-2">
                <Button className="rounded-full px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90">Enviar mensagem</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 mx-4 my-8 fade-in-up">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Pronto para Construir o Extraordinário?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Entre em contato hoje e dê o primeiro passo para realizar seu projeto com a Kabbatec.
            </p>
            <a href="#contato" className="cta-primary inline-flex items-center justify-center text-lg">Fale Conosco Agora</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 fade-in-up">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl p-8 text-center">
            <Separator className="mb-8 opacity-50" />
            <p className="text-muted-foreground font-medium">
              © Kabbatec - Construções e Gestão de Obras - Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-50">
        <div className="glass-card rounded-full p-2 flex items-center justify-between gap-2">
          <a href="https://wa.me/5511999999999" target="_blank" className="flex-1 text-center rounded-full px-4 py-3 bg-primary text-primary-foreground font-medium">WhatsApp</a>
          <a href="tel:+5511999999999" className="flex-1 text-center rounded-full px-4 py-3 hover:bg-white/10 transition">Ligar</a>
        </div>
      </div>
    </div>
  );
}
