## Título

feat(api): integrar BMAD monorepo e ajustar fallback de bcrypt

## Descrição

- Integra BMAD ao repositório
- Adiciona adaptador de senha com fallback para `bcryptjs` em dev/test
- Atualiza dependências do `@bmad/api`
- Mantém pipeline CI (lint, typecheck, build, test)

## Testes

- [ ] pnpm -w i
- [ ] pnpm --filter=@bmad/prisma prisma:generate
- [ ] turbo run build --filter=@bmad/api
- [ ] pnpm --filter=@bmad/api test:coverage

## Checklist

- [ ] CI verde (lint, typecheck, build, test)
- [ ] Sem vazamento de segredos
- [ ] Documentação/README atualizada quando aplicável


