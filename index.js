const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const UserController = require('./src/controllers/user.controller');
const AuthController = require('./src/controllers/auth.controller');
const TherapyController = require('./src/controllers/therapy.controller');
const HomeController = require('./src/controllers/home.controller');
const SessionController = require('./src/controllers/session.controller');

mongoose.connect('mongodb://localhost:27017/kind-karma');

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log('Database connected');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/users', UserController);
app.use('/auth', AuthController);
app.use('/therapies', TherapyController);
app.use('/', HomeController);
app.use('/sessions', SessionController);

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Something went wrong'
    res.status(statusCode).send({ err });
});


app.listen(3000, () => {
    console.log('Listening on port 3000')
});