const Url = require('../models/urlshortener.model')
const nanoid = require('nanoid')

exports.createUrlShortenerServ = async (req) => {
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
