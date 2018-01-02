var express = require('express');
var router = express.Router();
const Answer = require('../models/answer')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Answer.find()
  .populate("by type")
  .then((data) => {
    res.mSendResults(data)
  }, (error) => {
    res.mSendError(error)
  })
});

router.post('/', function(req, res) {
  Answer.create(req.body)
  .then((data) => {
    res.mSendResults(data)
  }, (error) => {
    res.mSendError(error)
  })
});


module.exports = router;
