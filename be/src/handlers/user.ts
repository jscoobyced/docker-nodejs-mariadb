import { getAllUsers, addNewUser, userByUsername } from '../services/UserService';
import { Handler } from '../models/types';
import { ERRORS } from '../config/constants';

export const getUsers: Handler = async (req, res) => {
  getAllUsers().then((users) => {
    res.send(users);
  });
};

export const getUserByUsername: Handler = async (req, res) => {
  const { username } = req.query;
  const safeUsername = username ? (username as string) : '';
  userByUsername(safeUsername).then((user) => {
    const response = !!user ? user : {};
    res.send(response);
  });
};

export const addUser: Handler = async (req, res) => {
  const { username, firstname, lastname } = req.body;
  if (!username?.trim() || !firstname?.trim() || !lastname?.trim()) {
    return res.status(400).send(ERRORS.BAD_USER_INFORMATION);
  }
  addNewUser({ username, firstname, lastname }).then((result) => {
    const response = 'User created. User Id: ' + result;
    res.status(201).send(response);
  });
};
