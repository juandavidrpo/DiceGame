const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

/**
 * Representa la función para obtener el estado del juego.
 * @version 1.0.0 2022-03-01
 * @author Juan David Rojas.
 */
router.get('/', (req, res) => {
    try {
        const id = req.params.id;
        Game.find({ id }).then((result) => res.json(result));
    } catch (err) {
        res.json(err.message).status(404);
    }
});

module.exports = router;
