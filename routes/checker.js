const spell = require('spell-checker-js');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const text = req.body.text || '';
    const check = spell.check(text);
    res.json({
        errors: check,
    });
});

module.exports = router;