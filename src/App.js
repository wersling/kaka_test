import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? '🌞 浅色' : '🌙 深色'}
      </button>
      <header className="App-header">
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
