
const userService = require('../services/userService');

async function criar(req, res) {
  try {
    const usuario = await userService.criarUsuario(req.body);

    return res.status(201).json({
      sucesso: true,
      mensagem: 'Usuário cadastrado com sucesso!',
      usuario
    });

  } catch (error) {
    if (error.message === 'Este e-mail já está cadastrado.') {
      return res.status(409).json({
        sucesso: false,
        mensagem: error.message
      });
    }

    console.error('Erro ao cadastrar usuário:', error);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao cadastrar usuário.'
    });
  }
}

async function buscarPorId(req, res) {
  try {
    const usuario = await userService.buscarUsuarioPorId(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Usuário não encontrado.'
      });
    }

    return res.status(200).json({
      sucesso: true,
      usuario
    });

  } catch (error) {
    console.error('Erro ao buscar usuário:', error);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao buscar usuário.'
    });
  }
}


async function atualizar(req, res) {
  try {
    const usuario = await userService.atualizarUsuario(
      req.params.id,
      req.body
    );

    if (!usuario) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Usuário não encontrado.'
      });
    }

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Usuário atualizado com sucesso!',
      usuario
    });

  } catch (error) {
    if (error.message === 'Este e-mail já está cadastrado.') {
      return res.status(409).json({
        sucesso: false,
        mensagem: error.message
      });
    }

    console.error('Erro ao atualizar usuário:', error);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao atualizar usuário.'
    });
  }
}

async function excluir(req, res) {
  try {
    const excluido = await userService.excluirUsuario(req.params.id);

    if (!excluido) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Usuário não encontrado.'
      });
    }

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Usuário excluído com sucesso!'
    });

  } catch (error) {
    console.error('Erro ao excluir usuário:', error);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao excluir usuário.'
    });
  }
}

module.exports = {
  criar,
  buscarPorId,
  atualizar,
  excluir
};