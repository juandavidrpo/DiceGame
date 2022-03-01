const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

/**
 * Representa la función para obtener la información
 * del jugador ganador en base a la apuesta mas alta.
 * @version 1.0.0 2022-03-01
 * @author Juan David Rojas.
 */
router.get('/:id', (req, res) => {
    try {
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
    } catch (err) {
        res.json(err.message).status(404);
    }
});

module.exports = router;
