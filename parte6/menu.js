const readLine = require('readline-sync')

function criarMenu(titulo, opcoes) {
    while (true) {
        console.log(`\n================================`)
        console.log(`   ${titulo.toUpperCase()}   `)
        console.log(`================================`)
    


    opcoes.forEach((opt, index) => {
        console.log(`${index + 1}. ${opt.texto}`)
    })
    console.log(`0. Sair`)
    console.log(`==============================`)


    const escolha = readLine.question("Escolha uma opcao: ")

    if (escolha == '0') {
        console.log("Encerrando sistema...")
        break
    }

    const indice = parseInt(escolha) - 1
    const opcaoSelecionada = opcoes[indice]

    if (opcaoSelecionada && typeof opcaoSelecionada.acao === 'function') {
        opcaoSelecionada.acao(readLine)
    } else {
        console.log("⚠️COMANDO INVALIDO⚠️")
             }
        }
    }
        module.exports = { criarMenu };



  
// function criarMenu(titulo, opcoes) {
//     console.log(`\n======================================`)
//     console.log(`     ${titulo.toUpperCase()}      `)
//     console.log(`\n ======================================`)

//     opcoes.forEach((opt, index) => {
//         console.log(`${index + 1}. ${opt.texto}`)
//     })
//     console.log(`0. Sair`)
//     console.log(`======================================`)


// rl.question("Escolha uma opção: ", (escolha) => {
//     console.log(`Você digitou a opção: ${escolha}`)

//     if (escolha === 0 ) {
//         console.log("Encerrando programa...")
//         rl.close()
//         return
//     } 

//     const indice = parseInt(escolha) - 1;
//     const opcaoSelecionada = opcoes[indice]

//     if (opcaoSelecionada && typeof opcaoSelecionada.acao === 'function') {
//         opcaoSelecionada.acao(rl, () => criarMenu(titulo, opcoes))
//     } else {
//         console.log("⚠️ ERRO: OPÇÃO NÃO DISPONÍVEL ⚠️")
//         criarMenu(titulo, opcoes)
//         }
  
//     })
// }
