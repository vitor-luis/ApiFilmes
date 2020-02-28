const express = require('express')
const router = express.Router()

const FilmeController = require('./../controllers/filme')

router.get('/filme', FilmeController.get)
router.get('/filme/:id', FilmeController.getByID)
router.post('/filme', FilmeController.create)
router.put('/filme/:id', FilmeController.update)
router.delete('/filme/:id', FilmeController.delete)

module.exports = router