const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

router.post('/', function (req, res) {
    const { name1, name2, name3 } = req.body;

    const gamers = [
        {
            name: name1,
        },
        {
            name: name2,
        },
        {
            name: name3,
        },
    ];

    Game.create({ gamers })
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
});

module.exports = router;
