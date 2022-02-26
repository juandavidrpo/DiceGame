const express = require('express');
const router = express.Router();

const bet = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('startGame');
});

router.post('/', function (req, res) {

    bet.insertMany([
        {
            bet: bet1 = req.body.bet = Math.floor(Math.random() * 6) + 1
        },
        {
            bet: bet2 = req.body.bet = Math.floor(Math.random() * 6) + 1
        },
        {
            bet: bet3 = req.body.bet = Math.floor(Math.random() * 6) + 1
        }
    ])
    .then(result => res.json(result))
    .catch(err => res.json(err));   
    
}) 

module.exports = router;
