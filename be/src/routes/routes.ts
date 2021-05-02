import { Route } from '../models/types';
import { routes as indexRoutes } from '.';
import { routes as userRoutes } from './user';

export const routes: Route[] = [...indexRoutes, ...userRoutes];
