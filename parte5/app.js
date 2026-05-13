const menu = require('./menu')
const moduloClientes = require('./clientes')

const minhasOpcoes = [
    {
        texto: "Cadastrar Cliente",
        acao: (rl, retornar) => {
            rl.question("Digite seu name: ", (nome) => {

                rl.question("Digite seu Email: ", (email) => {

                    rl.question("Categoria: (POBRE // VIP): ", (cat) => {


                        const novoCliente = moduloClientes.criarCliente(nome, email, cat)
                        moduloClientes.cadastrarCliente(novoCliente)
                        
                        console.log("\n Processo finalizado")
                        retornar()
                    })
                })
            })
        }
    },
    {
        texto: "Listar Clientes",
        acao: (rl, retornar) => {
            const lista = moduloClientes.listarClientes()
            console.log("\n --- Clientes Castrados: ---")
            console.table(lista)
            retornar()
        }
    }
]

menu.criarMenu("Sistema Comercial do Senac", minhasOpcoes)