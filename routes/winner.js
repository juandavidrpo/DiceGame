const express = require('express');
const router = express.Router();

const User = require('../models/user');


router.get('/', (req, res) => {

    User.findOne(req).sort({ bet: -1 })
    .then(result => res.json(result))
    .catch(err => res.json(err));   

}) 


module.exports = router;