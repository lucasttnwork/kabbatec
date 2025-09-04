# Integração BMAD - Kabatec

## 📋 Resumo

Esta integração adiciona o monorepo BMAD (Business Management & Automation Dashboard) ao repositório Kabatec, mantendo compatibilidade com o ecossistema existente.

## 🏗️ Arquitetura Integrada

### Estrutura do Projeto
```
kabbatec-integrated/
├── bmad/                          # Monorepo BMAD
│   ├── apps/
│   │   ├── api/                   # Express API + JWT + RBAC
│   │   ├── worker/                # BullMQ Worker + Redis
│   │   └── dashboard/             # Dashboard (placeholder)
│   ├── packages/
│   │   ├── prisma/                # Database Schema + Migrations
│   │   ├── observability/         # Tracing + Prometheus
│   │   └── shared/                # Shared utilities
│   └── docker-compose.yml         # PostgreSQL + Redis
├── kabbatec-next/                 # Next.js Landing Page
├── kabbatec-slides/               # Apresentação React
└── .github/workflows/ci.yml       # CI/CD Pipeline
```

## 🔧 Tecnologias

### BMAD Stack
- **API**: Express.js + TypeScript + JWT + RBAC
- **Database**: PostgreSQL + Prisma ORM
- **Queue**: BullMQ + Redis
- **Observability**: OpenTelemetry + Prometheus
- **Build**: Turborepo + pnpm workspaces
- **Tests**: Vitest + Supertest (integration)

### Integração Features
- **Password Adapter**: Fallback bcrypt → bcryptjs para Windows
- **CI/CD**: GitHub Actions com PostgreSQL + Redis services
- **Monorepo**: pnpm workspaces + Turborepo
- **Security**: API keys via environment variables

## 🚀 Execução Local

### Pré-requisitos
```bash
node >= 18.18.0
pnpm >= 9
docker & docker-compose
```

### Setup Rápido
```bash
# 1. Clone e instale dependências
cd bmad
npx pnpm i

# 2. Suba infraestrutura
docker compose up -d

# 3. Configure banco
npx pnpm --filter @bmad/prisma prisma:generate
npx pnpm --filter @bmad/prisma prisma:migrate:dev
npx pnpm -w run seed

# 4. Execute aplicações
npx pnpm -w run dev  # Todas em paralelo
# ou individual:
npx pnpm --filter @bmad/api dev
npx pnpm --filter @bmad/worker dev
```

### Testes
```bash
# Testes unitários + integração
npx pnpm --filter @bmad/api test:coverage

# Validação completa
npx turbo run lint type-check build test
```

## 🔐 Configuração de Segurança

### Variables de Ambiente
```bash
# .env (raiz do projeto)
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/bmad
REDIS_URL=redis://localhost:6379
```

### RBAC Implementado
- **Permissões**: works.view, works.create, supplier.approve, etc.
- **Roles**: Baseados em cargo (Engenheiro Civil, Administrativo, etc.)
- **Approval Limits**: Por valor monetário

## 🧪 CI/CD Pipeline

### Jobs GitHub Actions
1. **Setup** → Node.js + pnpm + cache
2. **Lint** → ESLint + audit security
3. **Type-check** → TypeScript validation
4. **Build** → Turborepo build all apps
5. **Test** → PostgreSQL + Redis + coverage

### Triggers
- Push: `main`, `feature/*`
- Pull Request: `main`, `feature/*`

## 📚 APIs Disponíveis

### Autenticação
- `POST /auth/register` - Registrar usuário
- `POST /auth/login` - Login + JWT tokens
- `POST /auth/refresh` - Renovar access token
- `GET /auth/permissions` - Listar permissões RBAC

### Protegidas (RBAC)
- `GET /protected/test` - Teste de autenticação
- `POST /protected/test-queue` - Teste de filas

### Health Check
- `GET /health` - Status da aplicação

## 🔄 Próximos Passos

1. **Merge desta PR** → Integração base completa
2. **Tasks 2.x**: MFA, mais testes RBAC, observabilidade
3. **Dashboard**: Interface web para o sistema
4. **Deploy**: Railway/Vercel integration

## 📖 Documentação Adicional

- [BMAD Architecture](./bmad/README.md)
- [API Documentation](./bmad/apps/api/README.md)
- [Database Schema](./bmad/packages/prisma/README.md)
- [CI/CD Details](./.github/workflows/ci.yml)

---

**Integração realizada com sucesso** ✅  
Validação local completa + CI ready 🚀
