const express = require('express')

const clientRoutes = require('./src/routes/clientRoutes.js')
const productRoutes = require('./src/routes/productRoutes.js')

const app = express()

app.use(express.json())

const porta = 8000

app.use('/api/products', productRoutes)
app.use('/api/clients', clientRoutes)

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})