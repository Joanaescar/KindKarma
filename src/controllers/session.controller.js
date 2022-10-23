const express = require('express');
const SessionController = express.Router();

SessionController.get('/', (req, res) => {
    res.render('sessions.ejs');
});

module.exports = SessionController;