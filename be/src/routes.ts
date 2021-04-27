import { Route } from './models/types';
import { home } from './handlers/index';
import { getUsers, addUser, getUserByUsername } from './handlers/user';
import { requestLogger } from './middleware/logger'

export const routes: Route[] = [
    {
        method: 'get',
        path: '/',
        middleware: [],
        handler: home,
    },
    {
        method: 'post',
        path: '/users',
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