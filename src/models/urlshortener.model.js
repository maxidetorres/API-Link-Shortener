import { Schema as _Schema, model } from 'mongoose'; 
const {Schema} = _Schema;

const UrlSchema = new Schema({
    originalUrl: {type: String,required: true},
    urlCode: {type: String,required: true},
    shortUrl: {type: String,required: true}
  //  expireAt:{type: Date, expires: 1200, default: Date.now}
});

export default model('Url', UrlSchema);