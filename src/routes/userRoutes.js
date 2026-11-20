
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Cadastro de usuário
router.post('/', userController.criar);

// Consulta de usuário por ID
router.get('/:id', userController.buscarPorId);

// Atualização de usuário
router.put('/:id', userController.atualizar);

// Exclusão de usuário
router.delete('/:id', userController.excluir);

module.exports = router;
