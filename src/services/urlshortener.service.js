const Url = require('../models/urlshortener.model')
const nanoid = require('nanoid')

exports.createUrlShortener = async (req) => {
  try {
    const { originalUrl, shortBaseUrl } = req
    const urlCode = nanoid.nanoid()
    const shortUrl = shortBaseUrl + '/' + urlCode

    const itemToBeSaved = { originalUrl, urlCode, shortUrl }

    // Agregar datos de url a la colección
    const url = new Url(itemToBeSaved)
    // Agregar datos de url a la colección
    await url.save()
    return url
  } catch (e) {
    // Loggeo Errores
    return e
    // throw Error('Error al crear url corta ')
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
