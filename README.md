# Polvora Consultoria

Site institucional em React com API separada em Node.js/Express para receber as mensagens do formulario de contato e salvar no MongoDB.

## Estrutura

- `src/`: frontend React publicado no Vercel
- `backend/`: API Express publicada no Render
- `render.yaml`: blueprint opcional para criar o servico no Render

## Frontend

Crie um arquivo `.env.local` na raiz com:

```bash
REACT_APP_API_BASE_URL=http://localhost:5000
```

Para rodar localmente:

```bash
npm install
npm start
```

No Vercel, configure a variavel `REACT_APP_API_BASE_URL` com a URL publica da API no Render, por exemplo:

```bash
https://polvora-consultoria-api.onrender.com
```

## Backend

Entre na pasta `backend` e crie um `.env` baseado em `backend/.env.example`:

```bash
PORT=5000
MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster.mongodb.net/polvora-consultoria?retryWrites=true&w=majority
FRONTEND_URL=https://www.polvora-consultoria.com,https://polvora-consultoria.vercel.app,http://localhost:3000
NODE_ENV=development
```

Instalacao e execucao local:

```bash
cd backend
npm install
npm run dev
```

Endpoints principais:

- `GET /api/health`
- `POST /api/contact`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/admin/messages`

Payload esperado em `POST /api/contact`:

```json
{
  "name": "Matheus",
  "email": "contato@empresa.com",
  "message": "Quero um orcamento para meu projeto.",
  "company": "",
  "source": "site"
}
```

## Deploy no Render

1. Crie um Web Service apontando para este repositorio.
2. Defina `Root Directory` como `backend`.
3. Use `npm install` no build e `npm start` no start.
4. Configure as variaveis `MONGODB_URI`, `FRONTEND_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH` e `JWT_SECRET`.
5. Depois do deploy, copie a URL publica gerada pelo Render.

Se preferir, o arquivo `render.yaml` ja deixa essa configuracao pronta como blueprint.

## MongoDB Atlas

No cluster do Atlas:

1. Crie um banco, por exemplo `polvora-consultoria`.
2. Libere o IP do Render em `Network Access` ou use `0.0.0.0/0` se quiser acesso publico controlado por usuario e senha.
3. Crie um usuario do banco com permissao de leitura e escrita.
4. Use essa connection string em `MONGODB_URI`.

## Observacoes

- O campo `company` funciona como honeypot anti-spam.
- As mensagens sao salvas com `name`, `email`, `message`, `source`, `ip`, `userAgent` e timestamps.
- O frontend ja envia os dados para `${REACT_APP_API_BASE_URL}/api/contact`.
- O login admin usa um unico usuario configurado por variaveis de ambiente.
- Para gerar o hash da senha do admin: `cd backend && npm run hash-password -- SUA_SENHA`
