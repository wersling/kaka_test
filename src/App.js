import logo from './logo.svg';
import './App.css';
import { useTheme } from './contexts/ThemeContext';
import { useLanguage } from './contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="controls">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="切换主题"
        >
          {isDarkMode ? '☀️ ' + t('themeToggle.light') : '🌙 ' + t('themeToggle.dark')}
        </button>
        <button
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label="切换语言"
        >
          {t('languageToggle')}
        </button>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('app.greeting')}
        </p>
        <p className="App-version">
          {t('app.version')}
        </p>
        <p className="App-description">
          {t('app.description')}
        </p>
      </header>
    </div>
  );
}

export default App;
