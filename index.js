const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
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

app.listen(3000, () => {
    console.log('Listening on port 3000')
})