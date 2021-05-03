import { ERRORS } from '../config/constants';
import * as mockUserService from '../services/UserService';
import { createDefaultMock } from '../testUtil';
import { getUsers, getUserByUsername, addUser } from './user';

const mockMe = jest.fn();

jest.mock('../services/UserService', () => ({
  getAllUsers: jest.fn(),
  addNewUser: jest.fn(),
  userByUsername: (s: string) => {
    if (s === 'EMPTY') return undefined;
    mockMe();
    return {
      username: s,
    };
  },
}));

beforeEach(() => {
  jest.resetAllMocks();
});

const createMock = (username?: string, firstname?: string, lastname?: string, statusSend?: () => void) => {
  const { mockRequest, mockResponse } = createDefaultMock(statusSend);
  mockRequest.body = {
    username,
    firstname,
    lastname,
  };
  mockRequest.query = {
    username,
  };

  return {
    mockRequest,
    mockResponse,
  };
};

test('getUsers is called', async () => {
  const { mockRequest, mockResponse } = createMock();
  await getUsers(mockRequest, mockResponse);
  expect(mockResponse.send).toHaveBeenCalledTimes(1);
  expect(mockUserService.getAllUsers).toHaveBeenCalledTimes(1);
});

test('userByUsername is called', async () => {
  const { mockRequest, mockResponse } = createMock('John');
  await getUserByUsername(mockRequest, mockResponse);
  expect(mockResponse.send).toHaveBeenCalledTimes(1);
  expect(mockMe).toHaveBeenCalledTimes(1);
});

test('userByUsername with empty username', async () => {
  const { mockRequest, mockResponse } = createMock();
  await getUserByUsername(mockRequest, mockResponse);
  expect(mockResponse.send).toHaveBeenCalledTimes(1);
  expect(mockMe).toHaveBeenCalledTimes(1);
});

test('userByUsername with username not found', async () => {
  const { mockRequest, mockResponse } = createMock('EMPTY');
  await getUserByUsername(mockRequest, mockResponse);
  expect(mockResponse.send).toHaveBeenCalledTimes(1);
  expect(mockMe).toHaveBeenCalledTimes(0);
});

test('addNewUser is called', async () => {
  const { mockRequest, mockResponse } = createMock('John', 'John', 'Smith');
  await addUser(mockRequest, mockResponse);
  expect(mockResponse.status).toHaveBeenCalledTimes(1);
  expect(mockResponse.status).toHaveBeenCalledWith(201);
  expect(mockUserService.addNewUser).toHaveBeenCalledTimes(1);
});

test('addNewUser fails with missing username', async () => {
  const statusSend = jest.fn();
  const { mockRequest, mockResponse } = createMock('', '', '', statusSend);
  await addUser(mockRequest, mockResponse);
  expect(mockResponse.status).toHaveBeenCalledTimes(1);
  expect(mockResponse.status).toHaveBeenCalledWith(400);
  expect(statusSend).toHaveBeenCalledWith(ERRORS.BAD_USER_INFORMATION);
  expect(mockUserService.addNewUser).toHaveBeenCalledTimes(0);
});
