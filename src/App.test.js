import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

const renderWithProviders = (component) => {
  return render(
    <LanguageProvider>
      <ThemeProvider>
        {component}
      </ThemeProvider>
    </LanguageProvider>
  );
};

test('renders hello kaka text', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/hello kaka/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders version number', () => {
  renderWithProviders(<App />);
  const versionElement = screen.getByText(/版本号: 0\.1\.0/i);
  expect(versionElement).toBeInTheDocument();
});
