import { createDefaultMock } from '../testUtil';
import { requestLogger } from './logger';

test('console logger', () => {
  const { mockRequest, mockResponse } = createDefaultMock();
  const next = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  window.console.log = (value: string) => jest.fn();
  requestLogger(mockRequest, mockResponse, next);
  expect(next).toHaveBeenCalledTimes(1);
});
