var mongoose = require('mongoose');
const Question = require('../models/question')
var TypeSchema = mongoose.Schema({
    name: {type: String, unique: true, required: true},
    isDeleted: Boolean,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
})

module.exports = mongoose.model('Type', TypeSchema);