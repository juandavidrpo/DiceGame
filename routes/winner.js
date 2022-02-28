const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

router.get('/', (req, res) => {
    Game.findOne(req)
        .sort({ bet: -1 })
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
}); 

module.exports = router;
