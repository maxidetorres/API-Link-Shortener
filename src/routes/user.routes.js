const express = require('express')
const { authJwt } = require('../middleware')
const controller = require('../controllers/user.controller')
const router = express.Router();


router.get('/api/test/all', controller.allAccess)

router.get('/api/test/user', [authJwt.verifyToken], controller.userBoard)

router.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin],controller.adminBoard)

module.exports = router;