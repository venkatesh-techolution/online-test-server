var mongoose = require('mongoose');
var QuestionSchema = mongoose.Schema({
    question: {type: String, required: true},
    isDeleted: Boolean
})

module.exports = mongoose.model('Question', QuestionSchema);