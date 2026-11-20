
const categoryService = require('../services/categoryService');

async function listar(req, res) {
  try {
    const resultado = await categoryService.listarCategorias(req.query);

    return res.status(200).json(resultado);
  } catch (error) {
    console.error('Erro ao listar categorias:', error);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao listar categorias.'
    });
  }
}

async function buscarPorId(req, res) {
  try {
    const categoria = await categoryService.buscarCategoriaPorId(req.params.id);

    if (!categoria) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Categoria não encontrada.'
      });
    }

    return res.status(200).json(categoria);
  } catch (error) {
    console.error('Erro ao buscar categoria:', error);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao buscar categoria.'
    });
  }
}

async function criar(req, res) {
  try {
    const categoria = await categoryService.criarCategoria(req.body);

    return res.status(201).json(categoria);
  } catch (error) {
    console.error('Erro ao criar categoria:', error);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao criar categoria.'
    });
  }
}

async function atualizar(req, res) {
  try {
    const atualizado = await categoryService.atualizarCategoria(
      req.params.id,
      req.body
    );

    if (!atualizado) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Categoria não encontrada.'
      });
    }

    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao atualizar categoria:', error);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao atualizar categoria.'
    });
  }
}

async function excluir(req, res) {
  try {
    const excluido = await categoryService.excluirCategoria(req.params.id);

    if (!excluido) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Categoria não encontrada.'
      });
    }

    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao excluir categoria:', error);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao excluir categoria.'
    });
  }
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  excluir
};
