const express = require('express')
const router = express.Router()
const addressHandler = require('../controllers/addressController')

router.post('/add', addressHandler.addAddress)
router.get('/get', addressHandler.getAddress)
router.get('/get/:id', addressHandler.getAddressById)
router.put('/update/:id', addressHandler.editAddress)
router.delete('/delete/:id', addressHandler.deleteAddress)


module.exports = router
