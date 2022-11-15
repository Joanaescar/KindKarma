import express, { Request, Response } from 'express';
export const SessionController = express.Router();

SessionController.get('/', (req: Request, res: Response) => {
    res.render('sessions.ejs');
});
