import { getAllUsers, addNewUser, userByUsername } from '../services/UserService';
import { Handler } from '../models/types';

export const getUsers: Handler = (req, res) => {
  const users = getAllUsers();
  const response = users.map((user) => `User ${user.username}`).join('<br />');
  res.send(response);
};

export const getUserByUsername: Handler = (req, res) => {
  const { username } = req.query;
  const safeUsername = username ? (username as string) : '';
  const user = userByUsername(safeUsername);
  const response = user ? `User ${user.username}` : 'No user found';
  res.send(response);
};

export const addUser: Handler = (req, res) => {
  const { username, password } = req.body;
  if (!username?.trim() || !password?.trim()) {
    return res.status(400).send('Bad username or password');
  }
  addNewUser({ username, password });
  res.status(201).send('User created');
};
