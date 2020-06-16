const express = require('express')
// const routes = require('./routes')

const app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
})

app.use(express.json())

// app.use('/', routes)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`El servidor está inicializado en el puerto ${port}`)
})

module.exports = app
