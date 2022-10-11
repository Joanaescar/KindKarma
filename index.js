const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./src/models/user');

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
    const user = new User(req.body);
    await user.save();
    res.send(user);
})

app.post('/login', (req, res) => {
    if (req.body.password === '123') {
        res.send({
            message: `Bem-vindo, ${req.body.email}`
        })
    } else {
        res.status(400).send({
            message: `Credenciais inválidas`
        })
    }

})

app.get('/therapies/:name', (req, res) => {
    res.render(`therapies/${req.params.name}.ejs`);
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})