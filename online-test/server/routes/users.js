var express = require('express');
var router = express.Router();
const User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
  console.log(req.body)
  User.create(req.body)
  .then((data) => {
    res.mSendResults(data)
  }, (error) => {
    res.mSendError(error)
  })
});
module.exports = router;
