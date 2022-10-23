const express = require('express');
const TherapyController = express.Router();

TherapyController.get('/:name', (req, res) => {
    res.render(`therapies/${req.params.name}.ejs`);
});

module.exports = TherapyController;