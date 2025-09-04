let clientes = [
    {
        id: 1,
        nome: "Ana",
        email: "ana@email.com",
        telefone: "(11) 98765-4321",
        endereco: "Rua das Flores, 123, São Paulo, SP",
        dataCadastro: "2025-01-15",
        ativo: true
    },
    {
        id: 2,
        nome: "Carlos",
        email: "carlos@email.com",
        telefone: "(21) 91234-5678",
        endereco: "Av. Atlântica, 456, Rio de Janeiro, RJ",
        dataCadastro: "2025-03-22",
        ativo: true
    },
    {
        id: 3,
        nome: "Mariana",
        email: "mariana@email.com",
        telefone: "(31) 99876-5432",
        endereco: "Rua Central, 789, Belo Horizonte, MG",
        dataCadastro: "2025-06-10",
        ativo: true
    }
]

const findALl = () => {
    return clientes
}

const findById = (id) => {
    return clientes.find(cliente => cliente.id === id)
}

const findByName = (nome) => {
    return clientes.find(cliente => cliente.nome === nome)
}

const createClient = (cliente) => {
    const id = clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1
    const clienteComId = {
        id: id,
        nome: cliente.nome,
        email: cliente.email,
        telefone: cliente.telefone,
        endereco: cliente.endereco,
        dataCadastro: cliente.dataCadastro,
        ativo: cliente.ativo
    }
    clientes.push(clienteComId)
}

const updateClient = (id, cliente) => {
    const index = clientes.findIndex(cliente => cliente.id === id)

    if (cliente.nome) clientes[index].nome = cliente.nome
    if (cliente.email) clientes[index].email = cliente.email
    if (cliente.telefone) clientes[index].telefone = cliente.telefone
    if (cliente.endereco) clientes[index].endereco = cliente.endereco
    if (cliente.dataCadastro) clientes[index].dataCadastro = cliente.dataCadastro
    if (cliente.ativo != null) clientes[index].ativo = cliente.ativo
}

const deleteClient = (id) => {
    const index = clientes.findIndex(cliente => cliente.id === id)
    clientes.splice(index, 1)
}

module.exports = {
    findALl,
    findById,
    findByName,
    createClient,
    updateClient,
    deleteClient
}