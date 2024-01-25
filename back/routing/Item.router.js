const express=require('express')
const { ItemController } = require('../controller/Item.controller')

const router = express.Router()

router.get("/", ItemController.getAll)
router.get('/:id', ItemController.getById)
router.post('/', ItemController.add)
router.delete('/:id', ItemController.delete)

module.exports=router