const express = require('express');
const UserService = require('../services/user.service');
const UserController = express.Router();

const userService = new UserService();

UserController.get('/', async (req, res) => {
    const allUsers = await userService.findAll();
    res.send(allUsers);
});


module.exports = UserController;