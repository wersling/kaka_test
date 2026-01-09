import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello kaka text', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello kaka/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders version number', () => {
  render(<App />);
  const versionElement = screen.getByText(/版本号: 0\.1\.0/i);
  expect(versionElement).toBeInTheDocument();
});
