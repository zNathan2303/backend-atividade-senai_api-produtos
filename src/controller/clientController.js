const clientModel = require('../model/clientModel.js')

const getClient = (req, res) => {
    const { nome } = req.query
    if (nome) {
        getClientByName(req, res)
    } else {
        getAllClients(req, res)
    }
}

const getAllClients = (req, res) => {
    const clientes = clientModel.findALl()
    res.status(200).json(clientes)
}

const getClientById = (req, res) => {
    const id = parseInt(req.params.id)

    const cliente = clientModel.findById(id)

    if (cliente) {
        res.status(200).json(cliente)
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado no banco de dados!' })
    }
}

const getClientByName = (req, res) => {
    const { nome } = req.query

    const cliente = clientModel.findByName(nome)

    if (cliente) {
        res.status(200).json(cliente)
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado no banco de dados!' })
    }
}

const createClient = (req, res) => {
    const { nome, email, telefone, endereco, dataCadastro, ativo } = req.body

    if (!nome || !email || !telefone || !endereco || !dataCadastro || typeof ativo != 'boolean') {
        return res.status(400).json({ mensagem: 'Nome, email, telefone, endereço, data de cadastro, e estado de atividade são obrigatórios' })
    } else {
        const cliente = clientModel.createClient({ nome, email, telefone, endereco, dataCadastro, ativo })
        res.status(201).json(cliente)
    }
}

const updateClient = (req, res) => {
    const id = parseInt(req.params.id)

    const { nome, email, telefone, endereco, dataCadastro, ativo } = req.body

    if (!nome && !email && !telefone && !endereco && !dataCadastro && typeof ativo != 'boolean') {
        return res.status(400).json({ mensagem: 'É necessário informar algum valor que será alterado!' })
    } else {
        clientModel.updateClient(id, { nome, email, telefone, endereco, dataCadastro, ativo })
        res.status(200).json({ mensagem: 'Informações alteradas!' })
    }

}

const deleteClient = (req, res) => {
    const id = parseInt(req.params.id)
    clientModel.deleteClient(id)
    res.status(200).json({ mensagem: 'Usuário excluído!' })
}

module.exports = {
    getClient,
    getAllClients,
    getClientById,
    getClientByName,
    createClient,
    updateClient,
    deleteClient
}