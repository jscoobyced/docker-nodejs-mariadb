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
    .then(([rows]) => {
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

export const getUserByUsername = async (username: string): Promise<User | void> => {
  const pool = getPool();
  return pool
    .promise()
    .query("SELECT 1 AS UserId, 'John' AS Username, 'John' AS Firstname, 'Smith' AS Lastname")
    .then(([rows]) => {
      const users = (<RowDataPacket[]>rows).map((row) => {
        return {
          userId: row.UserId,
          username,
          firstname: row.Firstname,
          lastname: row.Lastname,
        };
      });
      return users[0];
    });
};

export const addUser = async (user: User): Promise<User> => {
  users.push(user);
  user.userId = users.length;
  return Promise.resolve(user);
};
