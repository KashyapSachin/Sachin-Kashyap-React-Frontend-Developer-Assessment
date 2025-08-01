import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

const Contact = () => {
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
        Contact Us
      </h2>
      <form className="space-y-4 max-w-md">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 rounded border"
            style={{
              backgroundColor: currentTheme.colors.secondary,
              color: currentTheme.colors.text,
              borderColor: currentTheme.colors.accent,
            }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded border"
            style={{
              backgroundColor: currentTheme.colors.secondary,
              color: currentTheme.colors.text,
              borderColor: currentTheme.colors.accent,
            }}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 rounded border"
            style={{
              backgroundColor: currentTheme.colors.secondary,
              color: currentTheme.colors.text,
              borderColor: currentTheme.colors.accent,
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded transition-colors duration-200"
          style={{
            backgroundColor: currentTheme.colors.button,
            color: currentTheme.colors.buttonText,
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;