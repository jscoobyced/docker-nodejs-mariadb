import { Route } from '../models/types';
import { getUsers, addUser, getUserByUsername } from '../handlers/user';
import { requestLogger } from '../middleware/logger';

export const routes: Route[] = [
  {
    method: 'post',
    path: '/user',
    middleware: [],
    handler: addUser,
  },
  {
    method: 'get',
    path: '/users',
    middleware: [requestLogger],
    handler: getUsers,
  },
  {
    method: 'get',
    path: '/userByUsername',
    middleware: [requestLogger],
    handler: getUserByUsername,
  },
];
