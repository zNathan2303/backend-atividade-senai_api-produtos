const productModel = require('../model/productModel.js')

const getAllProducts = (req, res) => {
    const produtos = productModel.findALl()
    res.status(200).json(produtos)
}

const getProductById = (req, res) => {
    const id = parseInt(req.params.id)

    const produto = productModel.findById(id)

    if (produto) {
        res.status(200).json(produto)
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!' })
    }
}

const getProductByName = (req, res) => {
    const nome = req.params.nome

    const produto = productModel.findByName(nome)

    if (produto) {
        res.status(200).json(produto)
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado no banco de dados!' })
    }
}

const createProduct = (req, res) => {
    const { nome, descricao, preco, categoria, estoque, ativo } = req.body

    if (!nome || !descricao || !preco || !categoria || !estoque || !ativo) {
        return res.status(400).json({ mensagem: 'Nome, descrição, preco, categoria, estoque, e estado de disponibilidade são obrigatórios' })
    } else {
        const produto = productModel.createProduct({ nome, descricao, preco, categoria, estoque, ativo })
        res.status(201).json(produto)
    }
}

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id)

    const { nome, descricao, preco, categoria, estoque, ativo } = req.body

    if (!nome && !descricao && isNaN(preco) && !categoria && isNaN(estoque) && ativo == null) {
        return res.status(400).json({ mensagem: 'É necessário informar algum valor que será alterado!' })
    } else {
        productModel.updateProduct(id, { nome, descricao, preco, categoria, estoque, ativo })
        res.status(200).json({ mensagem: 'Informações alteradas!' })
    }
}

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id)
    productModel.deleteProduct(id)
    res.status(200).json({ mensagem: 'Produto excluído!' })
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    createProduct,
    updateProduct,
    deleteProduct
}