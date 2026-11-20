const app = require('./app');
const database = require('./config/database');

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {
    await database.authenticate();

    console.log('Conexão com MySQL estabelecida!');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar com o banco:', error);
  }
}

iniciarServidor();