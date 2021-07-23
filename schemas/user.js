const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  uniqueVisitor: String,
  history: []
});
module.exports = mongoose.model('User', userSchema);
