import { User } from '../models/types';

const users: User[] = [
  {
    username: 'John',
    password: 'weak_password1',
  },
  {
    username: 'Jane',
    password: 'weak_password2',
  },
  {
    username: 'Kevin',
    password: 'weak_password3',
  },
];

export const getUsers = (): User[] => {
  return users;
};

export const getUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};

export const addUser = (user: User) => {
  users.push(user);
};
