const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

/**
 * @version 1.0.0 2022-03-01
 * @author Juan David Rojas.
 */
router.get('/', function (req, res, next) {
    res.render('startGame');
});

/**
 * Representa la función para generar la apuesta de
 * cada jugador de forma aleatoria y lo guarda en la
 * base de datos.
 */
router.put('/bet/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const game = await Game.findById(id);
        const bet = [];

        game.gamers.forEach((gamer) => {
            const gamerBet = {};
            gamerBet[gamer._id] = Math.floor(Math.random() * 6) + 1;
            bet.push(gamerBet);
        });

        game.set({ bet, inProgress: true });
        const result = await game.save();

        res.json(result);
    } catch (err) {
        res.json(err.message).status(400);
    }
});

module.exports = router;
