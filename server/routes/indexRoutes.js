const express = require('express')
const router = express.Router()
const addressHandler = require('../controllers/addressController')
const { checkFields } = require('../middlewares/checkFields')

router.post('/add', checkFields, addressHandler.addAddress)
router.get('/get', addressHandler.getAddress)
router.get('/get/:id', addressHandler.getAddressById)
router.put('/update/:id', checkFields, addressHandler.editAddress)
router.delete('/delete/:id', addressHandler.deleteAddress)

module.exports = router
