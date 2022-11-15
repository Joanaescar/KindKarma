import { Request, Response, NextFunction } from "express";

export const catchAsync = (func: Function) => (req: Request, res: Response, next: NextFunction) => {
    return func(req, res, next).catch(next)
}


/* module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
} */