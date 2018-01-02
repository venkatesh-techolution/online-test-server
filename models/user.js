var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    place: String,
    position: String,
    isDeleted: Boolean,

},{timestamps: true})

module.exports = mongoose.model('User', UserSchema);