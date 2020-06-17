const Url = require('../models/urlshortener.model')
const nanoid = require('nanoid')

exports.createUrlShortener = async (req, res) => {
  try {
    const { originalUrl, shortBaseUrl, sizeHash } = req
    const existUrl = await Url.find(
      {
        originalUrl: { $in: originalUrl }
      },
      (err, url) => {
        if (err) {
          res.status(400).send({ message: err })
        }
      }
    ).limit(1)
    
    if (existUrl == null || existUrl.length ) {
      const message={ mensaje:"Url original existente", originalUrl:existUrl[0].shortUrl  }
      return res.status(200).json(message)
    }

    const urlCode = sizeHash != null ? nanoid.nanoid(sizeHash) : nanoid.nanoid()
    const shortUrl = shortBaseUrl + '/' + urlCode

    const itemToBeSaved = { originalUrl, urlCode, shortUrl }

    // Agregar datos de url a la colección
    const url = new Url(itemToBeSaved)
    // Agregar datos de url a la colección
    await url.save((err, urlRes) => {
      if (err) {
        res.status(400).send({ message: err })
      }
    })
    return res.status(200).json(urlRes)
  } catch (err) {
    // Loggeo Errores
    return res.status(400).json({"message":err})
  }
}
