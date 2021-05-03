import { User } from '../models/user';
import { getUsers, addUser, getUserByUsername } from '../repos/user';

export const getAllUsers = async (): Promise<User[]> => {
  return getUsers();
};

export const addNewUser = async (user: User): Promise<number> => {
  return addUser(user);
};

export const userByUsername = async (username: string): Promise<User | undefined> => {
  return getUserByUsername(username);
};
