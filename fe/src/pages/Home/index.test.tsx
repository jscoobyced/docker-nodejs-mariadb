import { render, screen } from '@testing-library/react';
import { App } from '.';
import { TITLE } from '../../config/constants';

test('renders H1 text', () => {
  render(<App />);
  const textElement = screen.getByText(TITLE);
  expect(textElement).toBeInTheDocument();
});
