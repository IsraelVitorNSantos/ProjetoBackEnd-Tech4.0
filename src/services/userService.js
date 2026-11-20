
const bcrypt = require('bcrypt');
const { User } = require('../models');

async function criarUsuario(dados) {
  const { firstname, surname, email, password } = dados;

  const usuarioExistente = await User.findOne({
    where: { email }
  });

  if (usuarioExistente) {
    throw new Error('Este e-mail já está cadastrado.');
  }

  const senhaCriptografada = await bcrypt.hash(password, 10);

  const usuario = await User.create({
    firstname,
    surname,
    email,
    password: senhaCriptografada
  });

  const { password: _, ...usuarioSemSenha } = usuario.toJSON();

  return usuarioSemSenha;
}

async function buscarUsuarioPorId(id) {
  const usuario = await User.findByPk(id, {
    attributes: { exclude: ['password'] }
  });

  return usuario;
}


async function atualizarUsuario(id, dados) {
  const usuario = await User.findByPk(id);

  if (!usuario) {
    return null;
  }

  const { firstname, surname, email, password } = dados;

  if (email && email !== usuario.email) {
    const emailExistente = await User.findOne({
      where: { email }
    });

    if (emailExistente) {
      throw new Error('Este e-mail já está cadastrado.');
    }
  }

  const dadosAtualizados = {
    firstname,
    surname,
    email
  };

  if (password) {
    dadosAtualizados.password = await bcrypt.hash(password, 10);
  }

  await usuario.update(dadosAtualizados);

  const { password: _, ...usuarioSemSenha } = usuario.toJSON();

  return usuarioSemSenha;
}

async function excluirUsuario(id) {
  const usuario = await User.findByPk(id);

  if (!usuario) {
    return false;
  }

  await usuario.destroy();

  return true;
}

module.exports = {
  criarUsuario,
  buscarUsuarioPorId,
  atualizarUsuario,
  excluirUsuario
};