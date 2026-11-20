
# Projeto BackEnd Tech4.0

API REST desenvolvida como projeto prático do curso Tech4.0 da Digital College.

O projeto utiliza Node.js, Express, MySQL e Sequelize para gerenciamento de usuários, categorias e produtos.

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- Sequelize
- Sequelize CLI
- bcrypt
- dotenv
- JSON Web Token (JWT)
- Jest
- Nodemon

## Estrutura do projeto

```text
ProjetoBackEnd-Tech4.0/
├── migrations/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
├── tests/
├── .env
├── .gitignore
├── .sequelizerc
├── package.json
└── README.md
```

## Funcionalidades implementadas

### Usuários

- Cadastro de usuários.
- Consulta de usuário por ID.
- Atualização de usuários.
- Exclusão de usuários.
- Criptografia de senhas com bcrypt.
- Verificação de e-mail duplicado.

### Categorias

- Cadastro de categorias.
- Consulta de categorias por ID.
- Listagem com paginação e filtros.
- Atualização de categorias.
- Exclusão de categorias.

### Banco de dados

- Modelagem com Sequelize.
- Migrations para criação das tabelas.
- Relacionamentos entre produtos, categorias, imagens e opções.

## Configuração do projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/IsraelVitorNSantos/ProjetoBackEnd-Tech4.0.git
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=projeto_backend
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```

Configure os dados de conexão conforme seu ambiente MySQL.

### 4. Executar as migrations

```bash
npx sequelize-cli db:migrate
```

### 5. Iniciar o servidor

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

O servidor será iniciado na porta 3000.

## Endpoints disponíveis

### Status da API

| Método | Endpoint |
|---|---|
| GET | `/api/status` |

### Usuários

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/v1/user` | Cadastrar usuário |
| GET | `/api/v1/user/:id` | Consultar usuário |
| PUT | `/api/v1/user/:id` | Atualizar usuário |
| DELETE | `/api/v1/user/:id` | Excluir usuário |

### Categorias

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/v1/category` | Cadastrar categoria |
| GET | `/api/v1/category/search` | Listar categorias |
| GET | `/api/v1/category/:id` | Consultar categoria |
| PUT | `/api/v1/category/:id` | Atualizar categoria |
| DELETE | `/api/v1/category/:id` | Excluir categoria |

## Observações

O projeto está em desenvolvimento. Novas funcionalidades, autenticação, testes automatizados e endpoints de produtos serão adicionados durante a implementação.

---

Desenvolvido como parte do projeto Tech4.0 – Digital College.
