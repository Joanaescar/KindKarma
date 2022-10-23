const express = require('express');
const HomeController = express.Router();

HomeController.get('/', (req, res) => {
    res.render('home.ejs');
});

module.exports = HomeController;