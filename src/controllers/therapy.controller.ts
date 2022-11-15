import express, { Request, Response } from 'express';
export const TherapyController = express.Router();

TherapyController.get('/:name', (req: Request, res: Response) => {
    res.render(`therapies/${req.params.name}.ejs`);
});
