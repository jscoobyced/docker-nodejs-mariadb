import { RowDataPacket } from 'mysql2';
import { User } from '../../models/user';
import { getPool } from '../mysql';

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

export const getUsers = async (): Promise<User[]> => {
  const pool = getPool();
  return pool
    .promise()
    .query("SELECT 'John' AS Username, 'John' AS Firstname, 'Smith' AS Lastname")
    .then(([rows, fields]) => {
      const users = (<RowDataPacket[]>rows).map((row) => {
        return {
          username: row.Username,
          firstname: row.Firstname,
          lastname: row.Lastname,
        };
      });
      return users;
    });
};

export const getUserByUsername = async (username: string): Promise<User | undefined> => {
  const user = users.find((user) => user.username === username);
  return Promise.resolve(user);
};

export const addUser = async (user: User): Promise<number> => {
  users.push(user);
  return Promise.resolve(users.length);
};