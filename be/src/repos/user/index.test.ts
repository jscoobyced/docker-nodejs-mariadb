import { User } from '../../models/user';
import { addUser, getUserByUsername, getUsers } from '.';

test('gets all users', async () => {
  const users = await getUsers();
  expect(users).toBeDefined();
  expect(users.length).toEqual(2);
  expect(users[0].username).toEqual('John');
});

test('gets user by username', async () => {
  const jane = await getUserByUsername('Jane');
  expect(jane).toBeDefined();
  if (!!jane) {
    expect(jane.username).toEqual('Jane');
  }
});

test('gets user by username not found', async () => {
  const jane = await getUserByUsername('Janet');
  expect(jane).not.toBeDefined();
});

test('add User', async () => {
  const usersBefore = await getUsers();
  const usersBeforeLength = usersBefore.length;
  const user: User = {
    username: 'Jack',
    firstname: 'Jack',
    lastname: 'Rabbit',
  };
  await addUser(user);
  const usersAfter = await getUsers();
  const usersAfterLength = usersAfter.length;
  const diff = usersAfterLength - usersBeforeLength;
  expect(diff).toEqual(1);
});
