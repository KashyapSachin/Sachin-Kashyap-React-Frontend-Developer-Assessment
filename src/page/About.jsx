import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

const About = () => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div>
      <h2
        className="text-2xl font-bold mb-6"
        style={{
          fontFamily: currentTheme.fonts.heading,
          fontWeight: currentTheme.fontWeight || 'normal',
        }}
      >
        About Us
      </h2>
      <div className="space-y-4">
        <p>
          We are a creative team dedicated to building amazing web experiences. Our theme switcher demonstrates how a single application can have completely different looks and feels.
        </p>
        <p>
          Try switching between themes using the dropdown in the header to see how each theme changes not just colors but also layout, typography, and spacing.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Theme 1: Minimalist design with light colors</li>
          <li>Theme 2: Dark mode with sidebar layout</li>
          <li>Theme 3: Colorful theme with playful fonts</li>
        </ul>
      </div>
    </div>
  );
};

export default About;