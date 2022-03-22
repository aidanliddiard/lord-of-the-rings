import { render, screen } from '@testing-library/react';
import App from './App';

test('renders character link', () => {
  render(<App />);
  const linkElement = screen.getByText(/characters/i);
  expect(linkElement).toBeInTheDocument();
});
