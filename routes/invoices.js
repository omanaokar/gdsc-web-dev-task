const express = require('express')
const router = express.Router()

const InvoiceController = require('../controllers/InvoiceController')

router.post('/add', InvoiceController.newInvoice)
router.get('/get', InvoiceController.getInvoice)
router.post('/remove', InvoiceController.removeInvoice)
router.post('/update', InvoiceController.updateInovice)

module.exports = router