import { home } from '.';
import { createDefaultMock } from '../testUtil';

test('index.html is return on / URI', () => {
  const { mockRequest, mockResponse } = createDefaultMock();
  mockResponse.sendFile = jest.fn();
  home(mockRequest, mockResponse);
  expect(mockResponse.sendFile).toHaveBeenCalledTimes(1);
});
