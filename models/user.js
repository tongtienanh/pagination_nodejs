var mongoose = require('mongoose');
var Schema = mongoose.Schema
const userShema = new Schema({ username: String, password: String }, { collection: 'user' }, )
module.exports = mongoose.model('user', userShema);