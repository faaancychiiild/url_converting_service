const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
  nano: String,
  original: String,
  minified: String,
  count: Number
});
module.exports = mongoose.model('Url', urlSchema);
