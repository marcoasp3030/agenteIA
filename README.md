<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/assets/logo.png">
  <img alt="SistemBR Agents" src="public/assets/logo-light.png3" width="220">
</picture>

# SistemBR Agents

**Agentes de IA que atendem, vendem, agendam e automatizam processos.**

Atendimento inteligente, multimodal e integrado aos seus sistemas.
Self-hosted, flexível e compatível com diversos modelos de inteligência artificial.

**SistemBR — Tecnologia que transforma.**

**Português (Brasil)** · [English](README-en.md)

![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-3B82F6)
![Bun](https://img.shields.io/badge/Bun-000?logo=bun\&logoColor=fff)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=fff)
![React 19](https://img.shields.io/badge/React%2019-149ECA?logo=react\&logoColor=fff)
![PostgreSQL + pgvector](https://img.shields.io/badge/PostgreSQL%20+%20pgvector-4169E1?logo=postgresql\&logoColor=fff)
![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C)
![Self Hosted](https://img.shields.io/badge/Self--Hosted-22C55E)
![AI Agents](https://img.shields.io/badge/AI-Agents-8B5CF6)

</div>

---

## 🤖 O que é o SistemBR Agents?

O **SistemBR Agents** é uma plataforma self-hosted para criação, operação e gerenciamento de agentes de inteligência artificial.

Os agentes podem assumir diferentes etapas do atendimento de uma empresa: conversar com clientes, interpretar mensagens, transcrever áudios, analisar imagens e documentos, consultar bases de conhecimento, realizar agendamentos, consultar sistemas, gerar orçamentos, executar automações, acompanhar oportunidades comerciais e transferir conversas para atendentes humanos quando necessário.

Tudo isso com infraestrutura controlada pela própria empresa e possibilidade de integração com diferentes provedores e modelos de IA.

A plataforma foi desenvolvida para empresas que precisam ir além de um chatbot tradicional.

O agente não apenas **responde**.

Ele pode **entender, decidir e executar ações**.

---

# ✨ Principais recursos

* 🗣️ **Multimodal nativo:** interpreta texto, áudio, imagens e documentos.
* 🧠 **Multi-modelo:** utilize OpenAI, Anthropic, Google, DeepSeek, OpenRouter ou modelos locais.
* 🏠 **Self-hosted:** execute a plataforma na sua própria infraestrutura.
* 💬 **Atendimento humanizado:** debounce, mensagens divididas e indicador de digitação.
* 🎙️ **STT e TTS:** transcrição de voz e respostas em áudio.
* 📚 **Base de conhecimento:** RAG utilizando PostgreSQL + pgvector.
* 🧰 **Ferramentas:** chamadas HTTP, APIs, MCP e ferramentas internas.
* 📅 **Agendamentos:** integração com calendários e sistemas externos.
* 📈 **Funil comercial:** acompanhe leads e oportunidades.
* 🔄 **Follow-ups automáticos:** reengajamento inteligente de contatos.
* 👨‍💼 **Handoff humano:** transferência automática para equipes ou atendentes.
* 📊 **Observabilidade:** métricas, logs, custo de LLM e execução de agentes.
* 🔐 **Segurança:** cofre de credenciais, permissões, RLS e controle de acesso.
* 🌐 **Omnichannel:** integração com canais disponíveis através do Chatwoot.
* 🔌 **API REST + MCP + Webhooks:** integração com qualquer sistema.
* 🎨 **White-label:** possibilidade de personalização para diferentes operações.
* 🏢 **Multi-tenant:** múltiplos clientes, empresas ou marcas em uma única infraestrutura.

---

# 🚀 Comece agora

O SistemBR Agents pode ser executado através de:

* Docker
* Docker Compose
* Coolify
* Portainer
* VPS
* Servidor dedicado
* Ambiente cloud privado

Para desenvolvimento local:

```bash
bun install
```

Crie o arquivo de configuração:

```bash
cp .env.example .env
```

Configure pelo menos:

```env
DATABASE_URL=
MIGRATION_DATABASE_URL=
ENCRYPTION_KEY=
```

Suba o PostgreSQL com pgvector:

```bash
docker compose up -d
```

Prepare as permissões do banco:

```bash
bun db:bootstrap
```

Execute as migrations:

```bash
bun prisma:migrate
```

Inicie o projeto:

```bash
bun dev
```

A aplicação ficará disponível, por padrão, em:

```text
http://localhost:3000
```

---

# 🧠 Agentes de IA

Cada agente pode possuir sua própria configuração de:

* Prompt principal
* Modelo de IA
* Temperatura
* Base de conhecimento
* Ferramentas
* Memória
* Regras de comportamento
* Canais de atendimento
* Equipes responsáveis
* Horários de atendimento
* Voz
* Provedor de transcrição
* Pipeline comercial
* Estratégia de handoff
* Follow-ups
* Integrações externas

Isso permite criar agentes especializados para diferentes áreas da empresa.

Exemplos:

* Atendimento ao cliente
* Comercial
* Pré-vendas
* SDR
* Suporte técnico
* Cobrança
* Financeiro
* RH
* Agendamentos
* Pós-venda
* Sucesso do Cliente
* Help Desk
* Operações internas

---

# 🤖 Runtime dos agentes

A execução dos agentes utiliza **LangGraph TS**, possibilitando a criação de fluxos inteligentes com estados, ferramentas e tomada de decisão.

A memória das conversas pode ser mantida de forma durável utilizando checkpointer em PostgreSQL.

Com isso, o agente consegue manter o contexto mesmo após reinicializações da aplicação.

---

# 🧠 Multi-modelo

O SistemBR Agents não obriga a utilização de um único fornecedor de IA.

Cada agente pode utilizar um modelo diferente.

Provedores compatíveis podem incluir:

* OpenAI
* Anthropic
* Google Gemini
* DeepSeek
* OpenRouter

Também é possível trabalhar com modelos locais através de endpoints compatíveis com a API da OpenAI.

Exemplos:

* Ollama
* LM Studio
* vLLM
* Servidores privados de inferência

As credenciais dos provedores podem ser armazenadas no cofre de segredos da plataforma.

---

# 🎮 Playground

Antes de colocar um agente em produção, é possível testá-lo através do **Playground**.

O ambiente permite validar:

* Prompt
* Respostas
* Memória
* Ferramentas
* Base de conhecimento
* Comportamento
* Chamadas externas
* Consumo de tokens
* Tempo de resposta

Dessa forma, ajustes podem ser realizados antes da liberação do agente nos canais oficiais.

---

# 💬 WhatsApp e canais

A integração de atendimento pode ser realizada através do **Chatwoot**.

O Chatwoot funciona como camada omnichannel, enquanto o SistemBR Agents executa a inteligência e as automações.

Fluxo simplificado:

```text
Cliente
   ↓
WhatsApp / Site / Canal
   ↓
Chatwoot
   ↓
SistemBR Agents
   ↓
Modelo de IA
   ↓
Ferramentas / APIs / RAG / MCP
   ↓
Resposta ao cliente
```

---

## Um agente, várias caixas de entrada

Um mesmo agente pode atender diferentes caixas de entrada.

O roteamento pode ser realizado por:

* Inbox
* Canal
* Empresa
* Número
* Departamento
* Tipo de atendimento
* Cliente
* Regra personalizada

---

# 📱 WhatsApp

O sistema pode ser utilizado com integrações do WhatsApp compatíveis com o ambiente do Chatwoot.

Em operações utilizando a API oficial do WhatsApp, devem ser respeitadas as políticas e regras estabelecidas pela Meta.

Isso inclui a janela de atendimento e, quando aplicável, utilização de templates previamente aprovados para mensagens proativas.

---

# 🌐 Omnichannel

Por utilizar uma arquitetura integrada ao Chatwoot, a solução pode trabalhar com diferentes canais.

Exemplos:

* WhatsApp
* Chat do site
* E-mail
* Instagram
* Facebook
* Telegram
* APIs customizadas
* Outros canais suportados pelo ambiente

---

# 🎙️ Áudio e transcrição

O agente pode receber mensagens de áudio e transformá-las automaticamente em texto.

Provedores de STT podem incluir:

* OpenAI
* Google Gemini
* ElevenLabs
* Endpoints compatíveis com OpenAI

Fluxo:

```text
Cliente envia áudio
        ↓
Download do arquivo
        ↓
STT / Transcrição
        ↓
Texto
        ↓
Agente de IA
        ↓
Resposta
```

---

# 🔊 Respostas em voz

O SistemBR Agents também pode transformar respostas em áudio utilizando TTS.

Provedores podem incluir:

* OpenAI
* ElevenLabs
* Serviços compatíveis

O contato pode possuir preferência individual.

Por exemplo:

```text
Cliente → envia áudio
Agente → responde em áudio
```

ou:

```text
Cliente → envia áudio
Agente → responde em texto
```

---

# 👁️ Visão computacional

Modelos multimodais permitem analisar imagens recebidas durante uma conversa.

Exemplos:

* Fotos
* Comprovantes
* Prints
* Produtos
* Documentos
* Erros de sistemas
* Notas
* Recibos
* Imagens enviadas pelo cliente

O agente recebe a interpretação da imagem junto ao contexto da conversa.

---

# 📄 Documentos

A arquitetura também permite processamento de documentos enviados durante o atendimento.

Dependendo do modelo configurado, o agente pode:

* identificar informações;
* interpretar conteúdo;
* responder perguntas;
* consultar documentos;
* comparar informações;
* direcionar o atendimento.

---

# 💬 Atendimento humanizado

Um dos objetivos do SistemBR Agents é reduzir o comportamento artificial encontrado em bots tradicionais.

Para isso, a plataforma pode utilizar diferentes técnicas de humanização.

---

## Debounce

Clientes normalmente enviam mensagens assim:

```text
Olá

boa tarde

preciso de ajuda

com meu boleto
```

Sem debounce, um bot poderia responder quatro vezes.

Com debounce:

```text
Olá
boa tarde
preciso de ajuda
com meu boleto

        ↓

Agente aguarda

        ↓

Responde uma única vez
```

---

# ⌨️ Indicador de digitação

Durante o processamento, o sistema pode sinalizar ao canal que o agente está digitando.

Isso proporciona uma experiência mais próxima de uma conversa humana.

---

# 💭 Split de mensagens

Respostas grandes podem ser divididas automaticamente.

Em vez de:

```text
Mensagem enorme com vários assuntos...
```

o cliente pode receber:

```text
Mensagem 1
```

```text
Mensagem 2
```

```text
Mensagem 3
```

com pequenos intervalos entre elas.

---

# 📚 Base de conhecimento

O SistemBR Agents possui arquitetura para **RAG — Retrieval-Augmented Generation**.

Documentos e informações da empresa podem ser armazenados e transformados em embeddings.

A busca vetorial pode ser executada utilizando:

```text
PostgreSQL
+
pgvector
```

---

# 📖 Exemplos de conteúdo

A base de conhecimento pode incluir:

* Manuais
* Procedimentos
* Perguntas frequentes
* Políticas
* Catálogos
* Produtos
* Serviços
* Preços
* Regras comerciais
* Scripts
* Documentações
* Materiais internos
* Informações institucionais

---

# 🧠 Fluxo RAG

```text
Pergunta do cliente
        ↓
Busca semântica
        ↓
pgvector
        ↓
Documentos relevantes
        ↓
Contexto do agente
        ↓
LLM
        ↓
Resposta
```

---

# ✅ Sugestões para a base

O agente pode identificar informações úteis durante as conversas e criar sugestões para inclusão na base de conhecimento.

Essas sugestões podem passar por aprovação humana antes da publicação.

---

# 🧰 Ferramentas

Além de responder perguntas, o agente pode executar ferramentas.

É isso que permite transformar um chatbot em um verdadeiro **agente de IA**.

---

# 🔌 Ferramentas HTTP

É possível cadastrar APIs externas como ferramentas.

Exemplo:

```text
GET /clientes/{cpf}
```

ou:

```text
POST /orcamentos
```

ou:

```text
POST /agendamentos
```

Cada ferramenta pode possuir:

* Nome
* Descrição
* Método HTTP
* URL
* Schema de entrada
* Schema de saída
* Credencial
* Headers
* Timeout
* Regras de acesso

---

# 🔐 Allowlist

Ferramentas HTTP podem utilizar allowlist de hosts.

Exemplo:

```text
api.empresa.com.br
erp.empresa.com.br
crm.empresa.com.br
```

Isso reduz o risco de chamadas externas não autorizadas.

---

# 🔑 Cofre de credenciais

Credenciais utilizadas nas ferramentas não precisam ficar expostas no prompt do agente.

Podem ser armazenadas em um cofre criptografado.

Exemplos:

* API Keys
* Tokens
* Senhas
* Client Secret
* Bearer Tokens
* Credenciais de serviços

---

# 🔌 MCP — Model Context Protocol

O SistemBR Agents pode trabalhar com servidores MCP.

Isso permite disponibilizar ferramentas externas para os agentes de forma padronizada.

Exemplos de integrações através de MCP:

* Sistemas internos
* Bancos de dados
* CRMs
* ERPs
* Calendários
* Sistemas financeiros
* APIs
* Ferramentas corporativas

---

# 🧩 Toolpacks

Ferramentas relacionadas podem ser agrupadas em conjuntos reutilizáveis.

Exemplo:

```text
Toolpack: Comercial

- consultar_cliente
- consultar_produto
- criar_orcamento
- enviar_proposta
- consultar_proposta
```

Outro exemplo:

```text
Toolpack: Financeiro

- consultar_boleto
- gerar_segunda_via
- consultar_pagamento
- gerar_pix
```

---

# 📅 Agendamentos

O agente pode realizar agendamentos utilizando integração com calendários.

Exemplo de fluxo:

```text
Cliente
   ↓
"Quero agendar amanhã às 14h"
   ↓
Agente consulta disponibilidade
   ↓
Calendário
   ↓
Horário disponível
   ↓
Evento criado
   ↓
Confirmação enviada
```

---

# 🔔 Lembretes

Também podem ser configurados lembretes automáticos antes dos compromissos.

Exemplo:

```text
24 horas antes
```

```text
2 horas antes
```

```text
30 minutos antes
```

---

# 📈 Funil comercial

O SistemBR Agents pode trabalhar conectado a processos comerciais.

Cada conversa pode possuir um estágio.

Exemplo:

```text
Novo Lead
   ↓
Em Atendimento
   ↓
Qualificado
   ↓
Proposta
   ↓
Negociação
   ↓
Fechado
```

O próprio agente pode identificar mudanças de estágio e atualizar o registro através das ferramentas disponíveis.

---

# 🔄 Follow-ups

O sistema pode executar follow-ups automáticos.

Exemplo:

```text
Cliente pediu orçamento
        ↓
Orçamento enviado
        ↓
Cliente não respondeu
        ↓
Aguardar período configurado
        ↓
Follow-up
```

Regras podem considerar:

* Horário comercial
* Dias da semana
* Quantidade máxima de tentativas
* Status da conversa
* Status do lead
* Última interação
* Canal disponível

---

# 👨‍💼 Handoff para humano

O agente deve saber quando não continuar automaticamente.

A transferência para um atendente humano pode acontecer quando:

* Cliente solicitar
* Agente não possuir confiança suficiente
* Regra interna determinar
* Assunto for sensível
* Negociação exigir aprovação
* Ferramenta apresentar erro
* Processo exigir intervenção manual

Fluxo:

```text
Agente
   ↓
Identifica necessidade
   ↓
Seleciona equipe
   ↓
Transfere atendimento
   ↓
Humano continua
```

---

# 🏢 Equipes

O roteamento pode ser realizado para diferentes setores.

Exemplos:

* Comercial
* Financeiro
* Suporte
* Administrativo
* Fiscal
* Técnico
* Sucesso do Cliente
* Cobrança

---

# 🖥️ Console do operador

O SistemBR Agents possui interface administrativa para configuração e acompanhamento dos agentes.

O painel pode concentrar:

* Dashboard
* Agentes
* Conversas
* Base de conhecimento
* Ferramentas
* Toolpacks
* MCP
* Canais
* Webhooks
* API Keys
* Logs
* Usuários
* Configurações
* Administração

---

# 📊 Dashboard

O dashboard oferece visão operacional da plataforma.

Indicadores podem incluir:

* Conversas
* Mensagens
* Tokens
* Custo de IA
* Tempo médio de resposta
* Erros
* Agentes ativos
* Atendimentos humanos
* Ferramentas executadas
* Volume por período

---

# 🔎 Observabilidade

A plataforma pode utilizar **Langfuse** para observabilidade dos agentes.

Isso permite acompanhar:

* Prompts
* Respostas
* Tokens
* Custos
* Latência
* Erros
* Chamadas de ferramentas
* Fluxos LangGraph
* Execuções individuais

---

# 💰 Custo real de LLM

Quando o provedor disponibiliza informações compatíveis, o painel pode calcular custos de utilização por:

* Agente
* Modelo
* Cliente
* Conversa
* Período
* Projeto

---

# 🧱 Building Blocks

Configurações reutilizáveis podem ser criadas para acelerar a construção dos agentes.

Exemplos:

```text
Saudação
```

```text
Qualificação
```

```text
Coleta de dados
```

```text
Orçamento
```

```text
Agendamento
```

```text
Handoff
```

Esses componentes podem ser compartilhados entre diferentes agentes.

---

# 🔌 API REST

O SistemBR Agents disponibiliza arquitetura de API para integração com aplicações externas.

Estrutura sugerida:

```text
/api/v1
```

A API pode ser utilizada para:

* Criar agentes
* Consultar agentes
* Atualizar configurações
* Consultar conversas
* Executar ações
* Gerenciar ferramentas
* Consultar logs
* Integrar sistemas externos

---

# 🌐 Webhooks

Eventos da plataforma podem ser enviados para sistemas externos.

Exemplos:

```text
conversation.created
```

```text
conversation.updated
```

```text
agent.executed
```

```text
tool.executed
```

```text
handoff.created
```

```text
message.received
```

---

# 🔒 Assinatura HMAC

Webhooks podem utilizar assinatura HMAC para que o sistema destinatário valide a autenticidade da requisição.

---

# 🔁 Retry

Em caso de erro no endpoint externo, o webhook pode ser reenviado.

Estratégia:

```text
Tentativa
   ↓
Erro
   ↓
Backoff
   ↓
Nova tentativa
```

Após atingir o número máximo de tentativas, o evento pode ser enviado para uma fila de falhas.

---

# ☠️ Dead Letter Queue

Eventos que falham repetidamente podem ser armazenados para análise posterior.

Isso evita perda silenciosa de integrações importantes.

---

# 🔐 Segurança

Segurança faz parte da arquitetura da plataforma.

Recursos incluem:

* HTTPS/TLS
* JWT
* Google OAuth
* Cofre de credenciais
* Controle de acesso
* PostgreSQL RLS
* Logs
* Auditoria
* Separação de privilégios
* Validação de ferramentas
* Credenciais criptografadas
* Rate limiting
* Proteção de endpoints

---

# 🗄️ PostgreSQL RLS

A plataforma pode utilizar **Row Level Security** do PostgreSQL.

Isso permite isolamento de dados entre:

* Organizações
* Clientes
* Tenants
* Usuários
* Projetos

---

# 👤 Role de runtime

A aplicação pode executar com uma role de banco específica, sem privilégios de superusuário.

Isso reduz significativamente o impacto de possíveis falhas na camada de aplicação.

---

# 🏢 Multi-tenant

A arquitetura multi-tenant permite atender diferentes empresas dentro da mesma infraestrutura.

Exemplo:

```text
SistemBR Agents
      ↓
┌─────────────────────┐
│ Cliente A           │
│ Cliente B           │
│ Cliente C           │
│ Cliente D           │
└─────────────────────┘
```

Cada tenant pode possuir:

* Usuários
* Agentes
* Conversas
* Credenciais
* Bases de conhecimento
* Ferramentas
* Configurações
* Canais

com isolamento de dados no banco.

---

# 🎨 White-label

O painel pode ser adaptado para operações que necessitem identidade visual própria.

Itens personalizáveis podem incluir:

* Logo
* Nome
* Cores
* Favicon
* Domínio
* Tela de login
* Informações institucionais

---

# 🌙 Tema claro e escuro

A interface suporta:

* Tema claro
* Tema escuro

---

# 🌎 Internacionalização

A arquitetura suporta múltiplos idiomas através de i18n.

Inicialmente:

```text
Português — Brasil
```

Outros idiomas podem ser adicionados conforme necessidade.

---

# 🐳 Deploy

O SistemBR Agents pode ser executado em containers Docker.

Ambientes compatíveis incluem:

* Docker Compose
* Portainer
* Coolify
* VPS
* Cloud privada
* Servidores Linux

---

# 🏗️ Arquitetura

Visão simplificada:

```text
                        ┌─────────────────────┐
                        │      Cliente        │
                        └──────────┬──────────┘
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │ WhatsApp / Chat /   │
                        │ E-mail / Outros     │
                        └──────────┬──────────┘
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │      Chatwoot       │
                        └──────────┬──────────┘
                                   │
                                   ▼
                  ┌───────────────────────────────┐
                  │       SistemBR Agents         │
                  │                               │
                  │        LangGraph TS           │
                  └───────┬────────┬──────────────┘
                          │        │
                 ┌────────┘        └──────────┐
                 ▼                            ▼
       ┌───────────────────┐        ┌──────────────────┐
       │       LLMs        │        │   Ferramentas    │
       │                   │        │                  │
       │ OpenAI            │        │ HTTP             │
       │ Anthropic         │        │ MCP              │
       │ Gemini            │        │ APIs             │
       │ DeepSeek          │        │ Toolpacks        │
       │ OpenRouter        │        └──────────────────┘
       │ Modelos locais    │
       └─────────┬─────────┘
                 │
                 ▼
       ┌───────────────────┐
       │    PostgreSQL     │
       │     pgvector      │
       └───────────────────┘
```

---

# 🛠️ Stack tecnológica

## Backend

```text
Bun
Elysia
TypeScript
LangGraph TS
```

## Frontend

```text
React 19
TypeScript
Tailwind CSS v4
```

## Banco

```text
PostgreSQL
pgvector
Prisma
```

## Observabilidade

```text
Langfuse
```

## Infraestrutura

```text
Docker
Docker Compose
Coolify
Portainer
Traefik
```

---

# 🧑‍💻 Desenvolvimento local

Instale as dependências:

```bash
bun install
```

Copie as variáveis de ambiente:

```bash
cp .env.example .env
```

Configure:

```env
DATABASE_URL=
MIGRATION_DATABASE_URL=
ENCRYPTION_KEY=
```

Suba os serviços necessários:

```bash
docker compose up -d
```

Inicialize as permissões do banco:

```bash
bun db:bootstrap
```

Execute as migrations:

```bash
bun prisma:migrate
```

Inicie o ambiente:

```bash
bun dev
```

Acesse:

```text
http://localhost:3000
```

---

# 📦 Estrutura de operação

Três conjuntos de instruções podem auxiliar no ciclo de vida da plataforma.

### `agents-onboarding`

Responsável pela implantação inicial.

Pode auxiliar em:

* VPS
* Docker
* Coolify
* Portainer
* Banco de dados
* TLS
* Chatwoot
* Observabilidade
* Configuração inicial
* Testes ponta a ponta

---

### `agents-operation`

Voltado para acompanhamento dos agentes em produção.

Pode auxiliar em:

* Investigação de conversas
* Identificação de falhas
* Ajustes de prompts
* Análise de ferramentas
* Avaliação de handoff
* Qualidade das respostas
* Análise de custos
* Logs

Alterações críticas devem passar por aprovação antes de serem aplicadas.

---

### `agents-dev`

Voltado para desenvolvimento da plataforma.

Pode auxiliar em:

* Código
* Bugs
* Novas funcionalidades
* Refatoração
* Testes
* Banco de dados
* APIs
* Integrações
* Frontend
* Backend

---

# 📋 Casos de uso

## Atendimento

```text
Cliente envia dúvida
        ↓
Agente interpreta
        ↓
Consulta conhecimento
        ↓
Responde
```

---

## Segunda via

```text
Cliente solicita boleto
        ↓
Agente identifica cliente
        ↓
Consulta sistema financeiro
        ↓
Obtém boleto
        ↓
Envia ao cliente
```

---

## Comercial

```text
Lead entra pelo WhatsApp
        ↓
Agente qualifica
        ↓
Identifica necessidade
        ↓
Consulta produtos
        ↓
Gera orçamento
        ↓
Atualiza funil
        ↓
Agenda reunião
```

---

## Suporte

```text
Cliente relata problema
        ↓
Agente coleta informações
        ↓
Consulta documentação
        ↓
Tenta solução
        ↓
Não resolveu?
        ↓
Transfere ao suporte humano
```

---

## Cobrança

```text
Sistema identifica pendência
        ↓
Agente inicia atendimento
        ↓
Consulta débito
        ↓
Envia informações
        ↓
Gera PIX / boleto
        ↓
Registra interação
```

---

# 🏢 Sobre a SistemBR

A **SistemBR** desenvolve tecnologia sob medida para empresas que querem crescer e escalar suas operações.

Nossas soluções incluem:

* Sistemas Web Sob Medida
* Aplicativos Mobile
* Produtos SaaS
* Automação & Inteligência Artificial
* Agentes de IA
* Integrações
* Bancos de Dados
* Analytics & BI
* Segurança & LGPD
* DevOps & Cloud

Nosso objetivo é unir tecnologia, automação e inteligência artificial para transformar processos em operações mais eficientes, escaláveis e inteligentes.

**SistemBR — Tecnologia que transforma.**

---

# 🌐 Links

* 🌐 Site: [sistembr.com.br](https://sistembr.com.br)
* 🧰 Serviços: [sistembr.com.br/servicos](https://sistembr.com.br/servicos)
* 🏢 Sobre a SistemBR: [sistembr.com.br/sobre](https://sistembr.com.br/sobre)
* 📚 Documentação: [`docs/`](docs/)
* 🤝 Contribuições: [CONTRIBUTING.md](CONTRIBUTING.md)
* 🔐 Política de Privacidade: [sistembr.com.br/politica-de-privacidade](https://sistembr.com.br/politica-de-privacidade)
* 📃 Termos de Uso: [sistembr.com.br/termos-de-uso](https://sistembr.com.br/termos-de-uso)
* 💬 Suporte: [contato@sistembr.com.br](mailto:contato@sistembr.com.br)

---

# 📧 Contato

**SistemBR**

Site: https://sistembr.com.br

E-mail:

```text
contato@sistembr.com.br
```

Telefone / WhatsApp:

```text
(11) 91832-8193
```

São Paulo — Brasil

---

# 📄 Licenciamento

Consulte o arquivo [`LICENSE`](LICENSE) presente neste repositório para verificar as condições aplicáveis ao código-fonte.

Componentes ou módulos comerciais adicionais podem possuir termos próprios de licenciamento.

---

# ⚠️ Marcas e serviços de terceiros

SistemBR Agents pode integrar produtos e serviços de terceiros, como:

* Chatwoot
* OpenAI
* Anthropic
* Google Gemini
* DeepSeek
* OpenRouter
* ElevenLabs
* Langfuse
* PostgreSQL
* Docker
* Meta / WhatsApp

As respectivas marcas pertencem aos seus respectivos proprietários.

A utilização das integrações está sujeita aos termos, políticas e condições de cada fornecedor.

---

<div align="center">

### SistemBR Agents

**Atendimento inteligente. Automação real. IA que executa.**

**SistemBR — Tecnologia que transforma.**

[Site](https://sistembr.com.br) · [Serviços](https://sistembr.com.br/servicos) · [Contato](mailto:contato@sistembr.com.br)

<sub>© 2026 SistemBR · Sistem Br Comercio de Produtos e Desenvolvimento LTDA · Todos os direitos reservados.</sub>

</div>
