const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const initializer = require('./models/initializer')
const bodyParser = require('body-parser')

const app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
})

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Le indicamos a Mongoose que haremos la conexión con Promesas
// mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)

let mongoHost = 'localhost'
let mongoPort = '27017'
const mongoDB = 'API-Link-Shortener'

console.log(process.env.MONGOHOST)
if (process.env.MONGOHOST) {
  mongoHost = process.env.MONGOHOST
}
console.log(process.env.MONGOPORT)
if (process.env.MONGOPORT) {
  mongoPort = process.env.MONGOPORT
}

// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/${mongoDB}`)
  .then(() => {
    console.log('La conexión a la base de datos API-Link-Shortener se ha realizado correctamente')
    initializer.initial()
  })
  .catch(err => console.log(err))

app.use(express.json())

app.use('/', routes)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`El servidor está inicializado en el puerto ${port}`)
})

module.exports = app
