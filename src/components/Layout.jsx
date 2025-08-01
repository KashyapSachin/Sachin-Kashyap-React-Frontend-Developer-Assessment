import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';
import { themes } from '../themes';

const Layout = ({ children }) => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const getLayoutClasses = () => {
    switch (currentTheme.layout) {
      case 'sidebar':
        return 'flex flex-col md:flex-row';
      case 'grid':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4';
      default:
        return 'container mx-auto p-4';
    }
  };

  return (
     <div
      className="min-h-screen transition-all duration-300"
      style={{
        backgroundColor: currentTheme.colors.primary,
        color: currentTheme.colors.text,
        fontFamily: currentTheme.fonts.main,
      }}
    >
      {/* Header always stays at top */}
      <Header />
      
      {/* Main content area */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar*/}
        {currentTheme.layout === 'sidebar' && (
          <div className="w-full md:w-64 flex-shrink-1">
            <Sidebar />
          </div>
        )}
        
        {/* Main content */}
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;