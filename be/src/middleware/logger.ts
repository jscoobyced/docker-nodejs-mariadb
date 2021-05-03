import { RequestHandler as Middleware } from 'express';
import { logger } from '../utils/logger';

export const requestLogger: Middleware = (req, res, next) => {
  if (process.env.NODE_ENV !== 'test') {
    const query = JSON.stringify(req.query);
    logger.info(`${req.method} ${req.path} with query: ${query}`);
  }
  next();
};
