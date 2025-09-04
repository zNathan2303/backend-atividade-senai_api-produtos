let clientes = [
    {
        id: 1,
        nome: "Ana Silva",
        email: "ana.silva@email.com",
        telefone: "(11) 98765-4321",
        endereco: "Rua das Flores, 123, São Paulo, SP",
        dataCadastro: "2025-01-15",
        ativo: true
    },
    {
        id: 2,
        nome: "Carlos Souza",
        email: "carlos.souza@email.com",
        telefone: "(21) 91234-5678",
        endereco: "Av. Atlântica, 456, Rio de Janeiro, RJ",
        dataCadastro: "2025-03-22",
        ativo: true
    },
    {
        id: 3,
        nome: "Mariana Costa",
        email: "mariana.costa@email.com",
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

const findByName = (name) => {
    return clientes.find(cliente => cliente.nome === name)
}

const createClient = (cliente) => {
    const id = clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1
    const clienteComId = { id: id, ...cliente }
    clientes.push(clienteComId)
}

const updateClient = (id, cliente) => {
    const index = clientes.findIndex(cliente => cliente.id === id)
    clientes[index].nome = cliente.nome
    clientes[index].email = cliente.email
    clientes[index].telefone = cliente.telefone
    clientes[index].endereco = cliente.endereco
    clientes[index].dataCadastro = cliente.dataCadastro
    clientes[index].ativo = cliente.ativo
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