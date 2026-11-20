
const { Category } = require('../models');

async function listarCategorias(query) {
  const limit = Number(query.limit ?? 12);
  const page = Number(query.page ?? 1);

  const where = {};

  if (query.use_in_menu !== undefined) {
    where.use_in_menu = query.use_in_menu === 'true';
  }

  const options = {
    where,
    order: [['id', 'ASC']]
  };

  if (query.fields) {
    options.attributes = query.fields.split(',').map(field => field.trim());
  }

  if (limit !== -1) {
    options.limit = limit;
    options.offset = (page - 1) * limit;
  }

  const resultado = await Category.findAndCountAll(options);

  return {
    data: resultado.rows,
    total: resultado.count,
    limit,
    page
  };
}

async function buscarCategoriaPorId(id) {
  return await Category.findByPk(id);
}

async function criarCategoria(dados) {
  return await Category.create(dados);
}

async function atualizarCategoria(id, dados) {
  const categoria = await Category.findByPk(id);

  if (!categoria) {
    return false;
  }

  await categoria.update(dados);

  return true;
}

async function excluirCategoria(id) {
  const categoria = await Category.findByPk(id);

  if (!categoria) {
    return false;
  }

  await categoria.destroy();

  return true;
}

module.exports = {
  listarCategorias,
  buscarCategoriaPorId,
  criarCategoria,
  atualizarCategoria,
  excluirCategoria
};
