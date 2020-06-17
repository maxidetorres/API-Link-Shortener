'use strict'
const express = require('express')
const router = express.Router()
const urlShortenerController = require('../controllers/urlshortener.controller')

// router.use('/',//nombre de la ruta//)
router.post('/createUrl', urlShortenerController.createUrlShortener)

module.exports = router
