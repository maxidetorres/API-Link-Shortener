'use strict'
const express = require('express')
const router = express.Router()
const authRoutes = require('./auth.routes')
const userRoutes = require('./user.routes')
const urlShortenerRoutes = require('./urlshortener.routes')

// Url routes
router.use('/', urlShortenerRoutes)

// Auth routes
router.use('/', authRoutes)
router.use('/', userRoutes)

module.exports = router
