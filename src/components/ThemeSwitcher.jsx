import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  const handleChange = (e) => {
    changeTheme(e.target.value);
  };

  return (
    <select
      value={theme}
      onChange={handleChange}
      className="px-3 py-2 rounded-md border-0 focus:ring-2 focus:ring-offset-2 transition-all duration-200"
      style={{
        backgroundColor: themes[theme].colors.accent,
        color: themes[theme].colors.buttonText,
      }}
    >
      {Object.keys(themes).map((key) => (
        <option key={key} value={key}>
          {themes[key].name}
        </option>
      ))}
    </select>
  );
};

export default ThemeSwitcher;