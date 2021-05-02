import { User } from '../models/user';
import { addNewUser, userByUsername, getAllUsers } from './UserService';

test('gets all users', () => {
  const users = getAllUsers();
  expect(users).toBeDefined();
  expect(users.length).toEqual(2);
  expect(users[0].username).toEqual('John');
});

test('gets user by username', () => {
  const jane = userByUsername('Jane');
  expect(jane).toBeDefined();
  if (!!jane) {
    expect(jane.username).toEqual('Jane');
  }
});

test('gets user by username not found', () => {
  const jane = userByUsername('Janet');
  expect(jane).not.toBeDefined();
});

test('add User', () => {
  const user: User = {
    username: 'Jack',
    firstname: 'Jack',
    lastname: 'Rabbit',
  };
  addNewUser(user);
  const addedUser = userByUsername(user.username);
  expect(addedUser).toBeDefined();
  expect(addedUser).toEqual(user);
});
