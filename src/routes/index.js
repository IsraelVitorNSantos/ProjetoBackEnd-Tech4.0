
const express = require('express');

const statusController = require('../controllers/statusController');
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');

const router = express.Router();

router.get('/status', statusController.verificarStatus);

// Rotas de usuários
router.use('/v1/user', userRoutes);

// Rotas de categorias
router.use('/v1/category', categoryRoutes);

module.exports = router;
