// Importa o Express
const express = require('express');

// Importa o Controller
const statusController = require('../controllers/statusController');

// Cria um agrupador de rotas
const router = express.Router();

// Define a rota e direciona para o Controller
router.get('/status', statusController.verificarStatus);

// Exporta as rotas
module.exports = router;