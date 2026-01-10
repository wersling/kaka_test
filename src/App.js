import logo from './logo.svg';
import './App.css';
import { useTheme } from './ThemeContext';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="App">
      <header className={`App-header ${isDarkMode ? 'dark' : 'light'}`}>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '浅色模式' : '深色模式'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello kaka
        </p>
        <p className="App-version">
          版本号: 0.1.0
        </p>
        <p className="App-description">
          一个简单的 React 演示项目，用于展示基础功能
        </p>
      </header>
    </div>
  );
}

export default App;
