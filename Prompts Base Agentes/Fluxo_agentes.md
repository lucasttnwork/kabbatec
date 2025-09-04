# Fluxo de Agentes Kabbatec

## Visão Geral
Este documento descreve os 37 agentes especializados que compõem o sistema Kabbatec, organizados por categorias funcionais para facilitar a compreensão e manutenção.

---

## 📋 Agentes de Compras e Orçamentos

### Agente 01 - Laura (Compras de Materiais)
- **Função**: Compras de materiais para obras
- **Regras**: Profissionalismo, validação de dados, fornecedores indicados pelo fiscal
- **Fluxo**: Identificação → Recebimento → Solicitação de orçamento → Validação → Mapa → Aprovação

### Agente 02 - Elenice (Cotação de Serviços)
- **Função**: Cotação de serviços de obras
- **Regras**: Profissionalismo, prestadores indicados pelo fiscal, contatos salvos
- **Fluxo**: Identificação → Recebimento → Solicitação de orçamento → Validação → Mapa → Aprovação

### Agente 03 - Sebastião (Orçamento de Materiais - Projetos)
- **Função**: Orçamento de materiais para projetos
- **Regras**: Clareza, apenas projetos, fornecedores informados
- **Fluxo**: Recebimento → Solicitação → Validação → Mapa → Encaminhamento

### Agente 04 - João Pedro (Orçamento de Serviços - Projetos)
- **Função**: Orçamento de serviços para projetos
- **Regras**: Profissionalismo, apenas projetos, prestadores informados
- **Fluxo**: Recebimento → Solicitação → Validação → Mapa → Encaminhamento

### Agente 06 - Vicente (Orçamentos Consolidados)
- **Função**: Consolidação de orçamentos dos agentes 03 e 04
- **Regras**: Apenas de agentes 03 e 04, planilha padrão
- **Fluxo**: Receber cotações → Receber projeto → Consolidar → Entregar

### Agente 17 - Luiz (Autorização de Compras)
- **Função**: Solicitar autorização do cliente para compras
- **Regras**: Solicitar autorização do cliente
- **Fluxo**: Receber mapa → Solicitar autorização → Acompanhar → Informar

---

## 📊 Agentes de Controle e Gestão

### Agente 05 - Oralice (Medições)
- **Função**: Medições de serviços e materiais
- **Regras**: Clareza, receber contratos totais, registrar pagamentos
- **Fluxo**: Recebimento contrato → Registro → Cálculo saldo → Relatórios

### Agente 07 - Maria (Informativo Financeiro)
- **Função**: Informativo financeiro das obras
- **Regras**: Organizar pagamentos feitos/a fazer, usar dados de outros agentes
- **Fluxo**: Receber dados → Organizar → Gerar relatórios → Apresentar

### Agente 12 - Jean (Cronogramas)
- **Função**: Cronogramas físico/financeiro
- **Regras**: Atualizar cronograma físico/financeiro
- **Fluxo**: Receber infos → Atualizar → Gerar

### Agente 14 - Laércio (Alerta de Compras)
- **Função**: Alertas de compras baseados em cronograma/fotos/estoque
- **Regras**: Cruzar cronograma/fotos/estoque
- **Fluxo**: Coletar dados → Diagnosticar → Priorizar → Alertar

### Agente 15 - Carlos José (Conferência NF)
- **Função**: Conferência de notas fiscais
- **Regras**: Validar dados fiscais, cruzar com pedidos e recebimentos
- **Fluxo**: Receber NF → Validar → Conferir → Classificar → Repassar

### Agente 20 - Neuza (Envio de Comprovantes)
- **Função**: Envio de comprovantes e confirmação de recebimento
- **Regras**: Enviar comprovantes e confirmar recebimento
- **Fluxo**: Receber → Vincular → Enviar → Confirmar → Relatar

### Agente 21 - Benedito (Solicitação Financeira)
- **Função**: Solicitações financeiras com dados bancários
- **Regras**: Gerar solicitações com dados bancários, submeter aprovação
- **Fluxo**: Receber dados → Montar → Aprovar → Comunicar → Repassar

### Agente 29 - Silvia (Financeiro Geral)
- **Função**: Relatórios financeiros gerais
- **Regras**: Gerar relatórios financeiros
- **Fluxo**: Receber dados → Conciliar → DRE → Relatar

### Agente 30 - Edgar (Dados de Obra)
- **Função**: Controle de insumos e pessoal
- **Regras**: Controlar insumos e pessoal
- **Fluxo**: Registrar insumos → Registrar pessoas → Relatar

### Agente 31 - Flávio (Indicadores de Vendas)
- **Função**: Controle do funil comercial
- **Regras**: Controlar funil comercial
- **Fluxo**: Registrar leads → Atualizar status → Relatar

---

## 📄 Agentes de Documentação

### Agente 08 - José (Informativo de Projetos)
- **Função**: Centralizar e responder dúvidas sobre projetos
- **Regras**: Centralizar e responder dúvidas sobre projetos
- **Fluxo**: Receber infos → Organizar → Responder

### Agente 09 - Pedro (Organização de Documentos)
- **Função**: Organização de documentos em pastas digitais
- **Regras**: Arquivar em pastas digitais por obra
- **Fluxo**: Receber → Organizar → Disponibilizar

### Agente 10 - Lucas (Encerramento de Obra)
- **Função**: Encerramento de obra
- **Regras**: Atuar apenas quando obra concluída
- **Fluxo**: Receber info → Gerar manual/termo → Preencher → Enviar

### Agente 11 - Juliano (Contratos)
- **Função**: Geração de contratos
- **Regras**: Usar contrato padrão, não inventar cláusulas
- **Fluxo**: Receber dados → Preencher modelo → Gerar contrato

### Agente 13 - Gabriel (Relatório Fotográfico)
- **Função**: Organização de fotos em relatórios padronizados
- **Regras**: Organizar fotos em relatórios padronizados
- **Fluxo**: Receber fotos → Classificar → Legendar → Relatórios

### Agente 16 - Assis (Projetos em Obra)
- **Função**: Garantir presença e atualização de projetos
- **Regras**: Garantir presença e atualização de projetos
- **Fluxo**: Receber lista → Receber fotos → Classificar → Alertar → Relatar

### Agente 22 - Andrews (Assinatura de Contratos)
- **Função**: Envio de contratos para assinatura e acompanhamento
- **Regras**: Enviar contratos para assinatura e acompanhar status
- **Fluxo**: Receber → Enviar → Acompanhar → Lembrar → Concluir

### Agente 24 - Natália (Propostas Comerciais)
- **Função**: Propostas comerciais
- **Regras**: Preencher modelo padrão
- **Fluxo**: Receber → Preencher → Validar → Enviar

---

## 🎯 Agentes de Gestão e Aprendizado

### Agente 18 - Leandro (Aprendizados)
- **Função**: Registro de erros e acertos
- **Regras**: Registrar erros e acertos
- **Fluxo**: Coletar → Categorizar → Registrar → Relatar → Acompanhar

### Agente 19 - Janil (Prioridades)
- **Função**: Organização de tarefas e prioridades
- **Regras**: Organizar tarefas e prioridades
- **Fluxo**: Captar → Estruturar → Quadro → Acompanhar → Relatar

### Agente 23 - Guilherme (Aprovações e Licenças)
- **Função**: Monitoramento de requisitos legais/técnicos
- **Regras**: Monitorar requisitos legais/técnicos
- **Fluxo**: Matriz → Registrar → Conferir → Alertar → Relatar

### Agente 32 - Xerife (Analista de Obra)
- **Função**: Avaliação de limpeza, segurança e desperdício
- **Regras**: Avaliar limpeza, segurança, desperdício
- **Fluxo**: Receber fotos → Analisar → Relatar

### Agente 33 - Bruno (Almoxarife)
- **Função**: Controle de materiais da obra
- **Regras**: Controlar materiais da obra
- **Fluxo**: Receber → Controlar estoque → Relatar

### Agente 35 - Manuel (Manutenção)
- **Função**: Monitoramento de solicitações de manutenção
- **Regras**: Monitorar solicitações de manutenção
- **Fluxo**: Receber → Classificar → Planejar → Relatar

---

## 📱 Agentes de Marketing Digital

### Agente 25 - Vithor (Instagram)
- **Função**: Gestão de posts e anúncios no Instagram
- **Regras**: Gerir posts e anúncios
- **Fluxo**: Receber conteúdo → Criar → Validar → Publicar → Monitorar → Relatar

### Agente 26 - Thiago (LinkedIn)
- **Função**: Gestão da página institucional no LinkedIn
- **Regras**: Gerir página institucional
- **Fluxo**: Receber conteúdo → Criar → Publicar → Interagir → Relatar

### Agente 27 - Matheus (Google Ads)
- **Função**: Gestão de campanhas pagas no Google Ads
- **Regras**: Gerir campanhas pagas
- **Fluxo**: Analisar → Sugerir → Criar → Monitorar → Relatar

### Agente 28 - Fernanda (Clientes Potenciais)
- **Função**: Identificação de prospects de academias
- **Regras**: Identificar prospects de academias
- **Fluxo**: Mapear → Identificar → Registrar → Relatar

---

## 🛠️ Agentes de Sistemas e Suporte

### Agente 34 - Cristiano (CRM)
- **Função**: Gestão do CRM da empresa
- **Regras**: Gerir CRM da empresa
- **Fluxo**: Cadastrar → Atualizar pipeline → Relatar

### Agente 36 - Nicolas (NPS)
- **Função**: Medição de satisfação do cliente
- **Regras**: Medir satisfação do cliente
- **Fluxo**: Antes → Durante → Após → Relatar

### Agente 37 - Beatriz (Secretária)
- **Função**: Agendamento de reuniões e visitas
- **Regras**: Agendar reuniões e visitas
- **Fluxo**: Receber → Registrar → Consultar → Atualizar

---

## 📈 Resumo por Categoria

| Categoria | Quantidade | Agentes |
|-----------|------------|---------|
| Compras e Orçamentos | 6 | 01, 02, 03, 04, 06, 17 |
| Controle e Gestão | 10 | 05, 07, 12, 14, 15, 20, 21, 29, 30, 31 |
| Documentação | 8 | 08, 09, 10, 11, 13, 16, 22, 24 |
| Gestão e Aprendizado | 6 | 18, 19, 23, 32, 33, 35 |
| Marketing Digital | 4 | 25, 26, 27, 28 |
| Sistemas e Suporte | 3 | 34, 36, 37 |

**Total: 37 agentes especializados**