const express = require('express')
const router = express.Router()
const addressHandler = require('../controllers/addressController')

router.post('/add', addressHandler.addAddress)
router.get('/get', addressHandler.getAddress)
router.get('/get/:id', addressHandler.getAddressById)

module.exports = router
