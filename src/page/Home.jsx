import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Card from '../components/Card';
import { themes } from '../themes';

const Home = () => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" 
          style={{ borderColor: currentTheme.colors.accent }}></div>
      </div>
    );
  }

  return (
    <div>
      <h2
        className="text-2xl font-bold mb-6"
        style={{
          fontFamily: currentTheme.fonts.heading,
          fontWeight: currentTheme.fontWeight || 'normal',
        }}
      >
        Welcome to our Store
      </h2>
      <p className="mb-8">
        Check out our amazing products below. Each theme completely changes the look and feel of this application!
      </p>
      
      <div className={currentTheme.layout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4' : 'space-y-6'}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;