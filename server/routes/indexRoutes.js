const express = require('express')
const router = express.Router()
const addressHandler = require('../controllers/addressController')

router.post('/add', addressHandler.addAddress)
router.get('/get', addressHandler.getAddress)

module.exports = router
