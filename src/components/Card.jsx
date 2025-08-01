import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

const Card = ({ product }) => {
  const { theme } = useTheme();
  
  // Safely get the current theme with fallbacks
  const currentTheme = themes[theme] || themes.theme1;

  // Fallback in case product is undefined
  if (!product) {
    return null;
  }

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 m-2"
      style={{
        backgroundColor: currentTheme.colors?.secondary || '#ffffff',
        color: currentTheme.colors?.text || '#111827',
      }}
    >
      <div className="p-4">
        <h3
          className="text-lg font-semibold mb-2"
          style={{
            fontFamily: currentTheme.fonts?.heading || 'sans-serif',
            fontWeight: currentTheme.fontWeight || 'normal',
          }}
        >
          {product.title || 'Product Title'}
        </h3>
        <p className="text-sm mb-4">
          {product.description ? product.description.substring(0, 100) + '...' : 'No description available'}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-bold">
            ${product.price?.toFixed(2) || '0.00'}
          </span>
          <button
            className="px-3 py-1 rounded transition-colors duration-200"
            style={{
              backgroundColor: currentTheme.colors?.button || '#3b82f6',
              color: currentTheme.colors?.buttonText || '#ffffff',
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;