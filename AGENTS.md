# AGENTS.md

此文件为在此仓库中工作的智能代理提供指导。

## 项目概述

这是一个基于 Create React App 的 React 应用，支持主题切换（深色/浅色模式）和多语言（中文/英文）功能。项目使用现代 React Hooks 和 Context API 进行状态管理。

## 构建命令

### 核心命令
```bash
# 启动开发服务器 (默认端口3000)
npm start

# 构建生产版本
npm run build

# 运行测试（交互模式）
npm test

# 弹出 Create React App 配置（不可逆）
npm run eject
```

### 单个测试
```bash
# 运行特定测试文件
npm test -- --testPathPattern=App.test.js

# 运行匹配模式的测试文件
npm test -- --testNamePattern="renders hello kaka"

# 非交互模式运行所有测试
CI=true npm test
```

### 代码质量
- ESLint 配置：继承 `react-app` 和 `react-app/jest`
- 测试覆盖率：`coverage/` 目录下可查看 lcov 报告
- 代码格式化：无专用配置，遵循默认 Prettier 规则

## 代码风格指南

### 导入语句
```javascript
// 顺序：React 相关 -> 第三方库 -> 本地组件 -> 工具函数 -> 样式文件
import React, { useState, useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { useTheme } from './contexts/ThemeContext';
import { formatDate } from './utils/dateHelpers';
import './App.css';
```

### 组件规范
```javascript
// 使用函数组件 + Hooks
function ComponentName() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [localState, setLocalState] = useState(initialValue);

  return (
    <div className={`component-name ${isDarkMode ? 'dark' : 'light'}`}>
      {/* JSX 内容 */}
    </div>
  );
}

export default ComponentName;
```

### Context 使用
```javascript
// 自定义 Hook 模式
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

### 类型安全
- 使用 PropTypes 或 TypeScript（项目当前使用 JavaScript）
- 组件 Props 验证使用 PropTypes
- Context 数据结构保持一致

### 命名规范
- 组件：PascalCase（如 `ThemeProvider`）
- 函数：camelCase（如 `toggleTheme`）
- 常量：UPPER_SNAKE_CASE
- CSS 类：kebab-case（如 `theme-toggle`）
- 文件名：PascalCase 用于组件，camelCase 用于工具

### 错误处理
```javascript
// Context 使用错误检查
export const useCustomHook = () => {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error('useCustomHook must be used within a CustomProvider');
  }
  return context;
};

// 优雅降级
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
```

### 状态管理
- 使用 useState 进行本地状态
- 使用 useContext 进行全局状态
- 使用 useEffect 处理副作用
- localStorage 数据持久化（如主题设置）

### 国际化
```javascript
// 使用翻译函数
const { t } = useLanguage();
t.app.greeting    // 嵌套对象结构
t.theme.toggle    // 按功能分组
```

### CSS 类组织
```javascript
// 动态类名组合
<div className={`App ${isDarkMode ? 'dark' : 'light'}`}>

// BEM 风格（可选）
<div className="component-name">
  <div className="component-name__header">
    <div className="component-name__title"></div>
  </div>
</div>
```

## 测试规范

### 测试文件组织
```javascript
// 使用 @testing-library/react
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// 描述性测试名称
test('renders hello kaka text', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello kaka/i);
  expect(linkElement).toBeInTheDocument();
});

// 测试用户交互
test('toggles theme when button is clicked', () => {
  render(<App />);
  const themeButton = screen.getByRole('button', { name: /toggle theme/i });
  fireEvent.click(themeButton);
  // 验证主题切换
});
```

### 测试覆盖率目标
- 核心组件：>80%
- Context 逻辑：100%
- 用户交互：完全覆盖

## 项目结构
```
src/
├── components/     # 可复用组件
├── contexts/       # React Context
├── locales/        # 国际化文件
├── utils/          # 工具函数
├── App.js         # 主应用组件
├── App.css        # 全局样式
└── index.js       # 应用入口
```

## 开发最佳实践

1. **组件设计**：单一职责，可复用性优先
2. **状态提升**：相关状态保持在最近公共祖先组件
3. **性能优化**：避免不必要的重渲染
4. **无障碍性**：添加 aria-label 和语义化 HTML
5. **代码注释**：复杂逻辑添加解释性注释，避免过度注释

## 常见问题解决

1. **主题切换后样式不生效**：确保 CSS 使用条件类名
2. **翻译未更新**：检查 translations.js 中的键值对
3. **测试失败**：确认测试环境正确包装 Context Provider
4. **构建失败**：检查 ES6+ 语法兼容性

## 部署前检查清单

- [ ] 所有测试通过
- [ ] 无 ESLint 错误
- [ ] 生产构建成功
- [ ] 国际化文本正确显示
- [ ] 主题切换功能正常
- [ ] 性能指标良好