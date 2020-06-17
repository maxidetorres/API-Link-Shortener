const Url = require('../models/urlshortener.model')
const nanoid = require('nanoid')

exports.createUrlShortener = async (req, res) => {
  try {
    const { originalUrl, shortBaseUrl, sizeHash } = req
    const existUrl = await Url.findOne(
      {
        originalUrl: originalUrl
      },
      (err, url) => {
        if (err) {
          res.status(400).send({ message: err })
        }
      }
    )
    // Comprobar si la url origina que se intenta recortar ya existe
    if (existUrl) {
      const message = { message: 'Url original ya existe!', shortUrl: existUrl.shortUrl }
      return res.status(200).json(message)
    }
    // Crear hash de shortUrl
    const urlCode = sizeHash != null ? nanoid.nanoid(sizeHash) : nanoid.nanoid()
    const shortUrl = shortBaseUrl + '/' + urlCode

    const itemToBeSaved = { originalUrl, urlCode, shortUrl }

    // Crear url
    const url = new Url(itemToBeSaved)
    // Agregar datos de url a la colección
    await url.save((err, urlRes) => {
      if (err) {
        res.status(400).send({ message: err.message })
      }
      return res.status(200).json(urlRes)
    })
  } catch (e) {
    // Loggeo Errores
    return res.status(400).json({ message: e.message })
  }
}

exports.redirectTo = async (req, res) => {
  Url.findOne({ urlCode: req.params.urlCode })
    .then(URL => {
      if (!URL) {
        return res.status(404).send({
          message: 'Url not found'
        })
      }

      res.redirect(307, URL.originalUrl)
    })/* .catch(err => {
      return res.status(500).send({
        message: 'Url fail'
      })
    }) */
}
