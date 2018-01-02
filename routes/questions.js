
var express = require('express');
var router = express.Router();
const Question = require('../models/question')
const Type = require('../models/type')

router.get('/', function(req, res, next) {
  Question.find()
  .then((data) => {
    res.mSendResults(data)
  }, (error) => {
    res.mSendError(error)
  })
});
router.post('/', function(req, res, next) {
  Question.create({question: req.body.question})
  .then((question) => {
    Type.update(
      { name: req.body.type }, 
      { $push: { questions: question._id } })
    .then((savedType) => {
      res.mSendResults(savedType)
    }, (error) => {
      res.mSendError(error)
    })
  }, (error) => {
    res.mSendError(error)
  })
});

module.exports = router;
