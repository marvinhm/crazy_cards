import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />);
  const pageTitle = screen.getByText(/Crazy Cards Application/i);
  expect(pageTitle).toBeInTheDocument();
});
