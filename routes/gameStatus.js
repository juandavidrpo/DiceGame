const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', (req, res) => {
    User.find(req.params.id).then((result) => res.json(result));
});

module.exports = router;
