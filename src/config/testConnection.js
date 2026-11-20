const database = require('./database');

async function testarConexao() {
  try {
    await database.authenticate();

    console.log('Conexão com MySQL realizada com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar com MySQL:', error);
  } finally {
    await database.close();
  }
}

testarConexao();