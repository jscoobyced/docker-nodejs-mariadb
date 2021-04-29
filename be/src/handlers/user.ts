import { getAllUsers, addNewUser, userByUsername } from '../services/UserService';
import { Handler } from '../models/types';

export const getUsers: Handler = (req, res) => {
  res.send(getAllUsers());
};

export const getUserByUsername: Handler = (req, res) => {
  const { username } = req.query;
  const safeUsername = username ? (username as string) : '';
  const user = userByUsername(safeUsername);
  const response = user ? `User ${user.username}` : 'No user found';
  res.send(response);
};

export const addUser: Handler = (req, res) => {
  const { username, firstname, lastname } = req.body;
  if (!username?.trim() || !firstname?.trim() || !lastname?.trim()) {
    return res.status(400).send('Bad user information');
  }
  addNewUser({ username, firstname, lastname });
  res.status(201).send('User created');
};
