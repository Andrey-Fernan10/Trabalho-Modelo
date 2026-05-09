const financeiro = require('./financeiro')
const clientes = require('./clientes')

function imprimirCupom(cliente, valorFinal) {
    console.log("| LOJA MODA SENAC |")
    console.log("Cliente:", cliente)
    console.log("Total a pagar:", valorFinal)
}

const valorFinal = financeiro.calcularTotalComDesconto(200, 10)

const cliente1 = clientes.criarCliente(
    "Andrey Fernandes",
    "dedeireidelas0869@gmail.com",
    "VIP",
)
    const cliente2 = clientes.criarCliente(
    "Bruna Esteves",
    "brunaesteves0206@gmail.com",
    "VIP",
)
clientes.cadastrarCliente(cliente1)
clientes.cadastrarCliente(cliente2)

const listaClientes = clientes.listarClientes()
for (let cliente of listaClientes){
imprimirCupom(cliente.nome, valorFinal)
}