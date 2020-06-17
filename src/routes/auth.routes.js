const { verifySignUp } = require('../middleware')
const controller = require('../controllers/auth.controller')
const express = require('express')

const router = express.Router()



router.post(
    '/api/auth/signup',
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  )

  router.post('/api/auth/signin', controller.signin)

  module.exports = router;