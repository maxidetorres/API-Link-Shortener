const validUrl = require('valid-url')
const urlShortenerService = require('../services/urlshortener.service')

exports.createUrlShortener = async (req, res) => {
  const { shortBaseUrl, originalUrl } = req.body

  if (!validUrl.isUri(shortBaseUrl)) {
    return res.status(400).json({ message: 'Invalid Base Url format' })
  }
  if (!validUrl.isUri(originalUrl)) {
    return res.status(400).json({ message: 'Invalid Original Url.' })
  }
  return await urlShortenerService.createUrlShortener(req.body, res)
}

exports.redirectShortLink = async (req, res) => {
  return await urlShortenerService.redirectTo(req, res)
}
