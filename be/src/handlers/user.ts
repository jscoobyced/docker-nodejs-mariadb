import { getAllUsers, addNewUser, userByUsername } from '../services/UserService';
import { Handler } from '../models/types';
import { ERRORS } from '../config/constants';

export const getUsers: Handler = (req, res) => {
  res.send(getAllUsers());
};

export const getUserByUsername: Handler = (req, res) => {
  const { username } = req.query;
  const safeUsername = username ? (username as string) : '';
  const user = userByUsername(safeUsername);
  const response = !!user ? user : {};
  res.send(response);
};

export const addUser: Handler = (req, res) => {
  const { username, firstname, lastname } = req.body;
  if (!username?.trim() || !firstname?.trim() || !lastname?.trim()) {
    return res.status(400).send(ERRORS.BAD_USER_INFORMATION);
  }
  const result = addNewUser({ username, firstname, lastname });
  const response = 'User created. User Id: ' + result;
  res.status(201).send(response);
};
