import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';

test('renders H1 text', () => {
  render(<App />);
  const textElement = screen.getByText(/hello, world/i);
  expect(textElement).toBeInTheDocument();
});
