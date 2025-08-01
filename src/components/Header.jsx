import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';
import ThemeSwitcher from './ThemeSwitcher';
import { useNavigate, NavLink } from 'react-router-dom';

const Header = () => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const navigate = useNavigate(); 

  // Navigation items
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  // Only show header nav links when not in sidebar theme (theme2)
  const showHeaderNav = theme !== 'theme2';

  return (
    <header
      className="sticky top-0 z-10 p-4 shadow-md transition-all duration-300 w-full"
      style={{
        backgroundColor: currentTheme.colors.secondary,
        color: currentTheme.colors.text,
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
       <button 
          onClick={() => navigate('/')} // Navigates to home on click
          className="text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity"
          style={{
            fontFamily: currentTheme.fonts.heading,
            fontWeight: currentTheme.fontWeight || 'normal',
            cursor: 'pointer', // Shows it's clickable
            background: 'none', // Removes button styling
            border: 'none', // Removes button styling
            padding: 0, // Removes button padding
          }}
        >
          Theme Switcher
        </button>
        
        <div className="flex items-center gap-4">
          {/* Conditionally render navigation links */}
          {showHeaderNav && (
            <nav className="hidden md:block">
              <ul className="flex gap-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 
                        `py-2 px-3 rounded transition ${
                          isActive 
                            ? `${currentTheme.colors.button} text-red-300 font-medium`
                            : `hover:${currentTheme.colors.accent} hover:bg-opacity-20`
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;