const express = require('express')
const router = express.Router()
const { authJwt } = require('../middleware')
const urlShortenerController = require('../controllers/urlshortener.controller')

router.post('/api/createUrl', [authJwt.verifyToken], urlShortenerController.createUrlShortener)

module.exports = router
