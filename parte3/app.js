const cliente1 = clientes.criarCliente(
    "Andrey Fernandes",
    "andreyufu@gmail.com",
    "VIP",
);

const cliente2 = clientes.criarCliente(
    "Bruna Esteves",
    "brunaesteves0206@gmail.com",
    "COMUM"
)
clientes.cadastrarCliente(cliente1);
clientes.cadastrarCliente(cliente2);

const listaClientes = clientes.listarClientes ();

console.table(listaClientes);