import React, { useEffect } from 'react';
import { NavLink, useLocation, } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Sidebar = () => {
  const { theme, activeTab, updateActiveTab } = useTheme();
  const location = useLocation();

  useEffect(() => {
    updateActiveTab(location.pathname);
  }, [location.pathname, updateActiveTab]);

  const themeConfig = {
    theme2: {
      bgColor: 'bg-gray-900',
      hoverColor: 'hover:bg-gray-700',
      activeColor: 'bg-blue-600',
      textColor: 'text-gray-100',
    },
    default: {
      bgColor: 'bg-gray-100',
      hoverColor: 'hover:bg-gray-200',
      activeColor: 'bg-blue-500',
      textColor: 'text-gray-900',
    },
  };

  const currentTheme = theme === 'theme2' ? themeConfig.theme2 : themeConfig.default;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav aria-label="Main navigation " className='bg-gray-900 h-screen'> 
      <ul className="space-y-2 p-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end
              className={({ isActive }) => 
                `block p-2 rounded transition ${currentTheme.textColor} ${currentTheme.hoverColor} ${
                  isActive ? `${currentTheme.activeColor} text-white font-medium` : ''
                }`
              }
              aria-current={activeTab === item.path ? 'page' : undefined}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;