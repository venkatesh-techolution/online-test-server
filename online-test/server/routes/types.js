var express = require('express');
var router = express.Router();
const Type = require('../models/type')

router.get('/', function(req, res, next) {
  Type.find()
  .select({questions: false})
  .then((data) => {
    res.mSendResults(data)
  }, (error) => {
    res.mSendError(error)
  })
});
router.get('/:name', function(req, res, next) {
  let query = {}
  if (req.params.name) {
    query.name = req.params.name
  }
  Type.find(query)
  .populate('questions')
  .then((data) => {
    res.mSendResults(data)
  }, (error) => {
    res.mSendError(error)
  })
});

router.post('/', function(req, res, next) {
  Type.create({name: req.body.name})
  .then((data) => {
    res.mSendResults(data)
  }, (error) => {
    res.mSendError(error)
  })
});


module.exports = router;
