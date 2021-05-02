import { RequestHandler as Middleware } from 'express';

export const requestLogger: Middleware = (req, res, next) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(req.path, req.query, req.body);
  }
  next();
};
