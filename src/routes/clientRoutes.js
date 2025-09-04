const express = require('express')

const router = express.Router()

const clientController = require('../controller/clientController.js')

router.get('/', clientController.getAllClients)

router.get('/:id', clientController.getClientById)

router.get('/:nome', clientController.getClientByName)

router.post('/', clientController.createClient)

router.put('/:id', clientController.updateClient)

router.delete('/:id', clientController.deleteClient)

module.exports = router