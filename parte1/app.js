const financeiro = require('./financeiro')

function imprimirCupom(cliente, valorFinal) {
    console.log("| LOJA MODA SENAC |")
    console.log("Cliente:", cliente)
    console.log("Total a pagar:", valorFinal)
}

financeiro.calcularTotalComDesconto(200, 10)

imprimirCupom("Andrey Fernandes", 100)

