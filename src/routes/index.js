'use strict'
const express = require('express')
const router = express.Router()
const { authJwt } = require('../middleware')
const urlShortenerController = require('../controllers/urlshortener.controller')
const authRoutes = require('./auth.routes')
const userRoutes = require('./user.routes')
const urlShortenerRoutes = require('./urlshortener.routes')


//Url routes
router.use('/', urlShortenerRoutes)

//Auth routes
router.use('/', authRoutes)
router.use('/', userRoutes)

module.exports = router
