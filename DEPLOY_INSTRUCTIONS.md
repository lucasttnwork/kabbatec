# Instruções de Deploy - Proposta Kabatec

## ✅ Status do Projeto
- ✅ Servidor Express configurado
- ✅ Slides React compilados
- ✅ Rota `/estrategia` configurada
- ✅ Arquivo `.env` com token Railway
- ✅ Configuração Railway (`railway.toml`)
- ✅ Teste local funcionando (http://localhost:3000/estrategia)

## 🚀 Para fazer deploy na Railway:

### 1. Login na Railway CLI
```bash
railway login
```
Isso abrirá o navegador para autenticação.

### 2. Linkar ao projeto existente
```bash
railway link proposta-kabatec
```

### 3. Fazer deploy
```bash
railway deploy
```

### 4. Gerar domínio (opcional)
```bash
railway domain
```

## 📁 Estrutura do Projeto

```
/
├── server.js                 # Servidor Express
├── package.json             # Dependências do servidor
├── railway.toml             # Configuração Railway
├── .env                     # Token Railway
└── kabbatec-slides/
    ├── dist/               # Build dos slides React
    ├── package.json        # Dependências dos slides
    └── src/               # Código fonte dos slides
```

## 🌐 Rotas Disponíveis

- `/` → Redireciona para `/estrategia`
- `/estrategia` → Slides da proposta Kabatec
- `/health` → Health check do servidor

## 🔧 Scripts Disponíveis

- `npm start` → Inicia o servidor Express
- `npm run build` → Faz build dos slides React
- `cd kabbatec-slides && npm run dev` → Desenvolvimento local dos slides

## 🚨 Token Railway
O token está configurado no arquivo `.env`:
```
RAILWAY_TOKEN=f31fc99e-6ef6-4f77-8aec-38bddd235e64
```

## 📋 Checklist Final
- [ ] Fazer login na Railway CLI
- [ ] Linkar ao projeto proposta-kabatec
- [ ] Fazer deploy
- [ ] Testar URL: https://[seu-dominio].railway.app/estrategia

