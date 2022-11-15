import express, { Request, Response } from 'express';
import { catchAsync } from '../errors/catchAsync';
import { ExpressError } from '../errors/expressError';
export const AuthController = express.Router();

import { AuthService } from '../services/auth.service';

const authService = new AuthService();

AuthController.post('/register', async (req: Request, res: Response) => {
    const user = await authService.register(req.body);
    res.send({ message: `Bem-vindo ${user.username}`, user: user })
});

AuthController.post('/login', catchAsync(async (req: Request, res: Response) => {
    const user = await authService.login(req.body);
    res.send({ message: `Bem-vindo ${user.username}`, user: user })
}));
