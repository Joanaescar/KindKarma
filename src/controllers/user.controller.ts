import express, { Request, Response } from 'express';
import { UserService } from '../services/user.service';
export const UserController = express.Router();

const userService = new UserService();

UserController.get('/', async (req: Request, res: Response) => {
    const allUsers = await userService.findAll();
    res.send(allUsers);
});

