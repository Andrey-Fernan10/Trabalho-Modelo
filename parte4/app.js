const clientes = require('./clientes')

const cliente1 = clientes.criarCliente(
    "Bruna Esteves",
    "brunaesteves0206@gmail.com",
    "COMUM"
)
clientes.cadastrarCliente(cliente1);

const todos = clientes.listarClientes()

console.table(todos);

const idParaBusca = todos[0]?.id
const clienteEncontrado = clientes.buscarPorId(idParaBusca)

console.log({ clienteEncontrado })