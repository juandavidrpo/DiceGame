var express = require('express');
var router = express.Router();

const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = User.find();
  data
  .then(result => res.send(result))
  .catch(err => {
    console.log(err)});
});

module.exports = router;
