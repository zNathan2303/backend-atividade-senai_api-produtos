const express = require('express')

const router = express.Router()

const productController = require('../controller/productController.js')

router.get('/', productController.getAllProducts)

router.get('/id/:id', productController.getProductById)

router.get('/nome/:nome', productController.getProductByName)

router.post('/', productController.createProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router