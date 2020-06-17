const jwt = require('jsonwebtoken')
const config = require('../config/auth.config.js')
const db = require('../models')
const User = db.user
const Role = db.role

const authJwt = {}
authJwt.verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token']

  if (!token) {
    return res.status(403).send({ message: 'No token provided!' })
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' })
    }
    req.userId = decoded.id
    next()
  })
}

authJwt.isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === 'admin') {
            next()
            return
          }
        }

        res.status(403).send({ message: 'Require Admin Role!' })
      }
    )
  })
}

module.exports = authJwt