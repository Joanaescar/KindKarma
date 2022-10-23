const express = require('express');
const catchAsync = require('../errors/catchAsync');
const ExpressError = require('../errors/expressError');
const AuthController = express.Router();

const AuthService = require('../services/auth.service');

const authService = new AuthService();

AuthController.post('/register', async (req, res) => {
    const user = await authService.register(req.body);
    res.send(user);
});

AuthController.post('/login', catchAsync(async (req, res) => {
    const user = await authService.login(req.body);
    if (user === null) {
        throw new ExpressError('Credenciais inválidas', 400);
    } else {
        res.send({ message: `Bem-vindo ${user.username}`, user: user })
    }
}));

module.exports = AuthController;