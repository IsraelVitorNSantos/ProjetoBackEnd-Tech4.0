// Função responsável por verificar o status da API
function verificarStatus(req, res) {
    res.status(200).json({
        sucesso: true,
        mensagem: 'API Projeto BackEnd Tech4.0 funcionando!',
        status: 'Online'
    });
}

// Exporta a função
module.exports = {
    verificarStatus
};