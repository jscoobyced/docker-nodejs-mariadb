import supertest from 'supertest';
import app from '..';
import { User } from '../models/user';

const request = supertest.agent(app);

describe('User routes', () => {
  it('GET /', async (done) => {
    request.get('/').then((response) => {
      const result = response.text;
      expect(result.indexOf('<title>')).toBeGreaterThan(0);
      done();
    });
  });

  it('GET /users', async (done) => {
    request.get('/users').then((response) => {
      const result = response.body;
      expect(Array.isArray(result)).toBeTruthy();
      const users = result as User[];
      expect(users.length).toEqual(2);
      done();
    });
  });

  it('GET /userByUsername find user', async (done) => {
    request
      .get('/userByUsername')
      .query({ username: 'John' })
      .then((response) => {
        const result = response.body;
        const user = result as User;
        expect(user.username).toEqual('John');
        done();
      });
  });

  it('GET /userByUsername non-existing user', async (done) => {
    request.get('/userByUsername?username=Johnny').then((response) => {
      const result = response.body;
      expect(result).toEqual({});
      done();
    });
  });

  it('POST /user', async (done) => {
    const user: User = {
      username: 'John',
      firstname: 'John',
      lastname: 'Smith',
    };
    request
      .post('/user')
      .type('json')
      .send(user)
      .set('Accept', 'plain/text')
      .then((response) => {
        expect(response.status).toEqual(201);
        const result = response.text;
        expect(result).toEqual('User created. User Id: 3');
        done();
      })
      .catch((error) => {
        expect(error).toBeUndefined();
        done();
      });
  });
});
