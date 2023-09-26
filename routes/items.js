const express = require('express')
const router = express.Router()

const ItemController = require('../controllers/ItemController')

router.post('/add', ItemController.newItem)
router.get('/get', ItemController.getItem)
router.post('/remove', ItemController.removeItem)
router.post('/update', ItemController.updateItem)
router.get('/getstock', ItemController.getStock)
router.post('/updatestock', ItemController.updateStock)
router.post('/addstock', ItemController.addStock)
router.post('/removestock', ItemController.removeStock)

module.exports = router