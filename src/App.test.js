import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './ThemeContext';

test('renders hello kaka text', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/hello kaka/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders version number', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const versionElement = screen.getByText(/版本号: 0\.1\.0/i);
  expect(versionElement).toBeInTheDocument();
});
