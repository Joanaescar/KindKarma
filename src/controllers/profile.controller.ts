import express, { Request, Response } from 'express';
export const ProfileController = express.Router();

ProfileController.get('/profile', (req: Request, res: Response) => {
    res.render('profile.ejs');
});