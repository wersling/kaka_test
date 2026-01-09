import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="App-header">
        <div className="theme-toggle">
          <button onClick={toggleTheme} className="theme-button">
            {isDarkMode ? '☀️ 浅色' : '🌙 深色'}
          </button>
        </div>
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
