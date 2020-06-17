const mongoose = require('mongoose')
const { Schema } = mongoose

const UrlSchema = new Schema({
  originalUrl: { type: String, required: true },
  urlCode: { type: String, required: true },
  shortUrl: { type: String, required: true }
  //  expireAt:{type: Date, expires: 1200, default: Date.now}
})
module.exports = mongoose.model('Url', UrlSchema)
