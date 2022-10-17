const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./src/models/user');
const CryptoJS = require("crypto-js");

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

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/sessions', (req, res) => {
    res.render('sessions.ejs');
})

app.get('/users', async (req, res) => {
    const allUsers = await User.find({});
    res.send(allUsers);
})

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = CryptoJS.HmacSHA256(password, 'changeme').toString(); //TODO(Joana): Alterar a key para um sitio seguro
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.send(user);
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = CryptoJS.HmacSHA256(password, 'changeme').toString(); //TODO(Joana): Alterar a key para um sitio seguro
    const user = await User.findOne({ email, password: hashedPassword });
    if (user === null) {
        res.status(400).send({ message: 'Credenciais inválidas' })
    } else {
        res.send({ message: `Bem-vindo ${user.username}`, user: user })
    }
})

app.get('/therapies/:name', (req, res) => {
    res.render(`therapies/${req.params.name}.ejs`);
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})