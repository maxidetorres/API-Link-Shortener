const express = require('express')
const router = express.Router()
const authRoutes = require('./auth.routes')
const userRoutes = require('./user.routes')

router.use('/',authRoutes);
router.use('/',userRoutes);

module.exports = router
