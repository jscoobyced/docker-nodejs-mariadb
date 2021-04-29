import { Request, Response, RequestHandler as Middleware } from 'express';

export type User = { username: string; firstname: string; lastname: string };

type Method = 'get' | 'head' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace' | 'patch';

export type Handler = (req: Request, res: Response) => any;

export type Route = {
  method: Method;
  path: string;
  middleware: Middleware[];
  handler: Handler;
};
