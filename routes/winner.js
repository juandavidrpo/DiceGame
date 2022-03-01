const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Game.findById({ _id: id }).then((result) => {
        const bet = result.bet;
        const gamers = result.gamers;
        const array = bet.map((a) => Object.values(a)[0]);
        const max = Math.max(...array);
        const index = array.indexOf(max);
        const resp = gamers[index];

        res.json(resp);
    });
});

module.exports = router;
