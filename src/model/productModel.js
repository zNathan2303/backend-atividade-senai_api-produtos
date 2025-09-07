let produtos = [
    {
        id: 1,
        nome: "Camiseta",
        descricao: "Camiseta de algodão unissex, tamanho M, cor preta",
        preco: 29.90,
        categoria: "Roupas",
        estoque: 50,
        ativo: true
    },
    {
        id: 2,
        nome: "Fone",
        descricao: "Fone sem fio com cancelamento de ruído, 20 horas de bateria",
        preco: 149.90,
        categoria: "Eletrônicos",
        estoque: 25,
        ativo: true
    },
    {
        id: 3,
        nome: "Caneca",
        descricao: "Caneca personalizada de 300ml, tema geek",
        preco: 19.90,
        categoria: "Utensílios",
        estoque: 100,
        ativo: true
    }
]

const findALl = () => {
    return produtos
}

const findById = (id) => {
    return produtos.find(produto => produto.id === id)
}

const findByName = (nome) => {
    return produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase())
}

const createProduct = (produto) => {
    const id = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1
    const produtoComId = {
        id: id,
        nome: produto.nome,
        descricao: produto.descricao,
        preco: parseFloat(produto.preco),
        categoria: produto.categoria,
        estoque: parseInt(produto.estoque),
        ativo: produto.ativo
    }
    produtos.push(produtoComId)
}

const updateProduct = (id, produto) => {
    const index = produtos.findIndex(produto => produto.id === id)

    if (produto.nome) produtos[index].nome = produto.nome
    if (produto.descricao) produtos[index].descricao = produto.descricao
    if (produto.preco) produtos[index].preco = parseFloat(produto.preco)
    if (produto.categoria) produtos[index].categoria = produto.categoria
    if (produto.estoque) produtos[index].estoque = parseInt(produto.estoque)
    if (produto.ativo != null) produtos[index].ativo = produto.ativo
}

const deleteProduct = (id) => {
    const index = produtos.findIndex(produto => produto.id === id)
    produtos.splice(index, 1)
}

module.exports = {
    findALl,
    findById,
    findByName,
    createProduct,
    updateProduct,
    deleteProduct
}