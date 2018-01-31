var mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
var AnswerSchema = mongoose.Schema({
    type: {type: ObjectId, ref: "Type"},
    by: {type: ObjectId, ref: "User"},
    QandA: [],
    isDeleted: Boolean
})

module.exports = mongoose.model('Answer', AnswerSchema);