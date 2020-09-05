const express = require('express')
const router = express.Router()
const addressHandler = require('../controllers/addressController')

router.post('/add', addressHandler.addAddress)

module.exports = router
