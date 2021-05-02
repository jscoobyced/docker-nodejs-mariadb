import { User } from '../models/types';
import { addUser, getUserByUsername, getUsers } from './UserRepo';

test('gets all users', () => {
  const users = getUsers();
  expect(users).toBeDefined();
  expect(users.length).toEqual(2);
  expect(users[0].username).toEqual('John');
});

test('gets user by username', () => {
  const jane = getUserByUsername('Jane');
  expect(jane).toBeDefined();
  if (!!jane) {
    expect(jane.username).toEqual('Jane');
  }
});

test('gets user by username not found', () => {
  const jane = getUserByUsername('Janet');
  expect(jane).not.toBeDefined();
});

test('add User', () => {
  const usersBeforeLength = getUsers().length;
  const user: User = {
    username: 'Jack',
    firstname: 'Jack',
    lastname: 'Rabbit',
  };
  addUser(user);
  const usersAfterLength = getUsers().length;
  const diff = usersAfterLength - usersBeforeLength;
  expect(diff).toEqual(1);
});
