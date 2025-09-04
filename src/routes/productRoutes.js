const express = require('express')

const router = express.Router()

const productController = require('../controller/productController.js')

router.get('/', productController.getAllProducts)

router.get('/:id', productController.getProductById)

router.get('/:nome', productController.getProductByName)

router.post('/', productController.createProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router