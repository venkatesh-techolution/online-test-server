var mongoose = require('mongoose');
var QuestionSchema = mongoose.Schema({
    content: {type: String, unique: true, required: true},
    isDeleted: Boolean
})

module.exports = mongoose.model('Question', QuestionSchema);