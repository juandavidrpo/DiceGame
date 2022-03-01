const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

/**
 * Representa la función para crear el juego
 * registrando el nombre de los jugadores.
 * @version 1.0.0 2022-03-01
 * @author Juan David Rojas.
 */
router.post('/', function (req, res) {
    try {
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
    } catch (err) {
        res.json(err.message).status(400);
    }
});

module.exports = router;
