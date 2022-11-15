import express, { Express, Request, Response, NextFunction } from 'express';
const app: Express = express();

import path from 'path';
import { connect } from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

import { ExpressError } from './src/errors/expressError';

import { UserController } from './src/controllers/user.controller';
import { AuthController } from './src/controllers/auth.controller';
import { TherapyController } from './src/controllers/therapy.controller';
import { HomeController } from './src/controllers/home.controller';
import { SessionController } from './src/controllers/session.controller';
import { ProfileController } from './src/controllers/profile.controller';

connect('mongodb://localhost:27017/kind-karma')
    .then(() => console.log('Database connected'))
    .catch((err) => console.error.bind(console, "connection error:" + err));

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
app.use('/', ProfileController);


app.use((err: ExpressError, req: Request, res: Response, next: NextFunction) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Something went wrong'
    res.status(statusCode).send({ err });
});


app.listen(3000, () => {
    console.log('Listening on port 3000')
});