const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('startGame');
});

router.patch('/bet/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, {
        bet: req.body.bet,
    })

        /* bet.insertMany([
        {
            bet: bet1 = req.body.bet = Math.floor(Math.random() * 6) + 1
        }
    ])  */
        .then((result) => {
            res.json(result);
        })
        .catch((err) => res.json(err));
});

module.exports = router;
