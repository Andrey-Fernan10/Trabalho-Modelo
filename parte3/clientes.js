const db = require('./database')
const NOME_ARQUIVO = 'clientes'

function criarCliente(nome, email, categoria) {
    return {
        nome: nome,
        email: email,
        categoria: categoria, //VIP OU COMUM
    }
}

function cadastrarCliente(cliente) {
    const lista = db.lerArquivo(NOME_ARQUIVO)
    
    lista.push(cliente)
    db.salvarArquivo(NOME_ARQUIVO, lista)

    console.log("Sucesso! Cliente cadastrado")
}

function listarClientes() {
    return []
}

module.exports = {
    criarCliente,
    cadastrarCliente,
    listarClientes,
}