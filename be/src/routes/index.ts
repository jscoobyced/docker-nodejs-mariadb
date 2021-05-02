import { Route } from '../models/types';
import { home } from '../handlers/index';

export const routes: Route[] = [
  {
    method: 'get',
    path: '/',
    middleware: [],
    handler: home,
  },
];
