import React, { createContext, useState, useContext } from 'react';

// 创建主题 Context
const ThemeContext = createContext();

// 创建主题提供者组件
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 切换主题的函数
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // 提供主题状态和切换函数
  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 自定义 Hook 简化 Context 使用
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 头部组件
const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header 
      className={`p-4 flex justify-between items-center ${
        isDarkMode 
          ? 'bg-gray-800 text-white' 
          : 'bg-gray-200 text-black'
      }`}
    >
      <h1 className="text-2xl font-bold">
        {isDarkMode ? '暗黑模式' : '浅色模式'}
      </h1>
      <button 
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${
          isDarkMode 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gray-400 hover:bg-gray-500'
        }`}
      >
        切换主题
      </button>
    </header>
  );
};

// 内容组件
const Content = () => {
  const { isDarkMode } = useTheme();

  return (
    <div 
      className={`p-6 min-h-[300px] ${
        isDarkMode 
          ? 'bg-gray-700 text-white' 
          : 'bg-white text-black'
      }`}
    >
      <h2 className="text-xl mb-4">
        {isDarkMode ? '当前是暗黑主题' : '当前是浅色主题'}
      </h2>
      <p>
        这是一个使用 React Context 实现的主题切换示例。
        Context 提供了一种在组件树中传递数据的方法，
        无需通过 props 逐层传递。
      </p>
    </div>
  );
};

// 主应用组件
const ThemeContextApp = () => {
  return (
    <ThemeProvider>
      <div className="max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default ThemeContextApp;