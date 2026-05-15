const menu = require('./menu')
const moduloClientes = require('./clientes')

const minhasOpcoes = [
    {
        texto: "Cadastrar Cliente",
        acao: (rs) => {
            const nome = rs.question("Digite seu name: ")
            const email = rs.question("Digite seu email: ")
            const cat = rs.question("Categoria (VIP // COMUM): ") 

            const novoCliente = moduloClientes.criarCliente(nome, email, cat)
            moduloClientes.cadastrarCliente(novoCliente)

            console.log("\n ✅Cliente cadastrado com sucesso!")
        }
    },
    {
        texto: "Listar Clientes",
        acao: () => {
            const lista = moduloClientes.listarClientes()
            console.log(`\n--- LISTA DE CLIENTES ---`)
            console.table(lista)
        }
        
    
    }
]

const tituloSistema = "| Gestão Comercial SENAC |"
menu.criarMenu(tituloSistema, minhasOpcoes)