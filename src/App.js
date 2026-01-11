import logo from './logo.svg';
import './App.css';
import { useTheme } from './contexts/ThemeContext';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, t, toggleLanguage } = useLanguage();

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="controls">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={t.theme.toggle}
        >
          {isDarkMode ? `☀️ ${t.theme.dark}` : `🌙 ${t.theme.light}`}
        </button>
        <button
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label={t.app.language}
        >
          🌐 {language === 'zh' ? 'EN' : '中文'}
        </button>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t.app.greeting}
        </p>
        <p className="App-version">
          {t.app.version}: 0.1.0
        </p>
        <p className="App-description">
          {t.app.description}
        </p>
      </header>
    </div>
  );
}

export default App;
