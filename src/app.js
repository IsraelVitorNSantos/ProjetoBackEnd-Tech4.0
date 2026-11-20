// Importa o Express
const express = require('express');

// Importa as rotas
const routes = require('./routes');

// Cria a aplicação
const app = express();

// Permite receber dados no formato JSON
app.use(express.json());

// Utiliza as rotas da aplicação
app.use('/api', routes);

// Exporta a aplicação
module.exports = app;