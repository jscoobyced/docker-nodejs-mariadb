import { User } from '../models/user';
import { getUsers, addUser, getUserByUsername } from '../repos/UserRepo';

export const getAllUsers = (): User[] => {
  return getUsers();
};

export const addNewUser = (user: User): number => {
  return addUser(user);
};

export const userByUsername = (username: string): User | undefined => {
  return getUserByUsername(username);
};
