import express, { Request, Response } from 'express';
export const HomeController = express.Router();

HomeController.get('/', (req: Request, res: Response) => {
    res.render('home.ejs');
});
