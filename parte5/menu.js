const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function criarMenu(titulo, opcoes) {
    console.log(`\n======================================`)
    console.log(`     ${titulo.toUpperCase()}      `)
    console.log(`\n ======================================`)

    opcoes.forEach((opt, index) => {
        console.log(`${index + 1}. ${opt.texto}`)
    })
    console.log(`0. Sair`)
    console.log(`======================================`)


rl.question("Escolha uma opção: ", (escolha) => {
    console.log(`Você digitou a opção: ${escolha}`)

    if (escolha === 0 ) {
        console.log("Encerrando programa...")
        rl.close()
        return
    } 

    const indice = parseInt(escolha) - 1;
    const opcaoSelecionada = opcoes[indice]

    if (opcaoSelecionada && typeof opcaoSelecionada.acao === 'function') {
        opcaoSelecionada.acao(rl, () => criarMenu(titulo, opcoes))
    } else {
        console.log("⚠️ ERRO: OPÇÃO NÃO DISPONÍVEL ⚠️")
        criarMenu(titulo, opcoes)
        }
  
    })
}

module.exports = { criarMenu };