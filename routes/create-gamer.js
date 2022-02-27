const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/', function (req, res) {
    const { name1, name2, name3 } = req.body;

    User.insertMany([
        {
            name: name1,
            //bet: bet1 = req.body.bet = Math.floor(Math.random() * 6) + 1
        },
        {
            name: name2,
            //bet: bet2 = req.body.bet = Math.floor(Math.random() * 6) + 1
        },
        {
            name: name3,
            //bet: bet3 = req.body.bet = Math.floor(Math.random() * 6) + 1
        },
    ])

        .then((result) => res.json(result))
        .catch((err) => res.json(err));
});

module.exports = router;
