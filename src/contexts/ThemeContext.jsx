import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('theme1');
  const [activeTab, setActiveTab] = useState('/');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load both theme and active tab from localStorage
    const savedTheme = localStorage.getItem('theme') || 'theme1';
    const savedTab = localStorage.getItem('activeTab') || '/';
    
    setTheme(savedTheme);
    setActiveTab(savedTab);
    setIsLoading(false);
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Reset to home when changing themes (except when switching to theme2)
    if (newTheme !== 'theme2') {
      setActiveTab('/');
      localStorage.removeItem('activeTab');
    }
  };

  const updateActiveTab = (path) => {
    if (theme === 'theme2') {
      setActiveTab(path);
      localStorage.setItem('activeTab', path);
    } else {
      setActiveTab('/');
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      changeTheme,
      activeTab,
      updateActiveTab 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);