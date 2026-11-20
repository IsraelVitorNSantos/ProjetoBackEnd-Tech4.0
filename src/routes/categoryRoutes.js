
const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

// Listagem de categorias
router.get('/search', categoryController.listar);

// Cadastro de categoria
router.post('/', categoryController.criar);

// Atualização de categoria
router.put('/:id', categoryController.atualizar);

// Exclusão de categoria
router.delete('/:id', categoryController.excluir);

// Consulta por ID (deixar depois de /search)
router.get('/:id', categoryController.buscarPorId);

module.exports = router;
