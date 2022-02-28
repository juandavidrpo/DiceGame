const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

router.get('/', function (req, res, next) {
    res.render('startGame');
});

router.patch('/bet/:id', async function (req, res) {
    try { 
        const id = req.params.id;
        const data = req.body;
        const game = await Game.findById(id);
        const bet = [];

        game.gamers.forEach(gamer => {
            const gamerBet = {}
          gamerBet[gamer._id] = Math.floor(Math.random() * 6) + 1;
          bet.push(gamerBet)
        });

        game.set({bet, inProgess: true});
        const result = await game.save();
        
        res.json(result);

    }catch(err){
        res.json(err.message).status(400)
    }
});

module.exports = router;
