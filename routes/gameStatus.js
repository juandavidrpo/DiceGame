const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

router.get('/:id', (req, res) => {
    const id = req.params.id    
    Game.find({id}).then((result) => res.json(result));
});

module.exports = router;
