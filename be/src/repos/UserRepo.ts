import { User } from '../models/types';

const users: User[] = [
  {
    username: 'John',
    firstname: 'John',
    lastname: 'Smith',
  },
  {
    username: 'Jane',
    firstname: 'Jane',
    lastname: 'Doe',
  },
];

export const getUsers = (): User[] => {
  return users;
};

export const getUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};

export const addUser = (user: User): void => {
  users.push(user);
};
