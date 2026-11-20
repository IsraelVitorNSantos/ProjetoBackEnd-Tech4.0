# ProjetoBackEnd-Tech4.0

Projeto de desenvolvimento Backend da Tech4.0, utilizando Node.js, Express e MySQL.

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- Sequelize
- dotenv
- bcrypt
- JSON Web Token (JWT)
- Jest
- Nodemon

## Estrutura do projeto

```text
ProjetoBackEnd-Tech4.0/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
├── migrations/
├── tests/
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/IsraelVitorNSantos/ProjetoBackEnd-Tech4.0.git
```

Entre na pasta:

```bash
cd ProjetoBackEnd-Tech4.0
```

Instale as dependências:

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as configurações do banco de dados:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=projeto_backend
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```

Configure os valores de acordo com seu ambiente MySQL.

## Executar o projeto

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

## Status da API

Com o servidor iniciado, acesse:

http://localhost:3000/api/status

## Desenvolvimento

Projeto em desenvolvimento. Novas funcionalidades, rotas e testes serão adicionados progressivamente.