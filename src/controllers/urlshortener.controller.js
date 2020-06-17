
const validUrl = require('valid-url')
const urlShortenerService = require('../services/urlshortener.service')

exports.createUrlShortener = async (req, res) => {
  const { shortBaseUrl, originalUrl } = req.body
  if (!validUrl.isUri(shortBaseUrl)) {
    return res.status(404).json('Invalid Base Url format')
  }
  if (!validUrl.isUri(originalUrl)) {
    return res.status(401).json('Invalid Original Url.')
  }

  const objectUrl = await urlShortenerService.createUrlShortenerServ(req.body)
  return res.status(200).json(objectUrl)
}
