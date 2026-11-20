
const database = require('./database');
const models = require('../models');

async function testarModels() {
  try {
    await database.authenticate();

    console.log('Conexão com MySQL realizada com sucesso!');
    console.log('\nVerificando Models e associações:\n');

    for (const [nome, model] of Object.entries(models)) {
      const associacoes = Object.keys(model.associations);

      console.log(
        `${nome}:`,
        associacoes.length > 0
          ? associacoes.join(', ')
          : 'sem associações diretas'
      );
    }

    console.log('\nVerificação concluída!');
  } catch (error) {
    console.error('Erro ao verificar Models:', error);
  } finally {
    await database.close();
  }
}

testarModels();
