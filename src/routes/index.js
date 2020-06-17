'use strict'
const express = require('express')
const router = express.Router()
const { authJwt } = require('../middleware')
const urlShortenerController = require('../controllers/urlshortener.controller')

// router.use('/',//nombre de la ruta//)
router.post('/createUrl', [authJwt.verifyToken], urlShortenerController.createUrlShortener)

module.exports = router
