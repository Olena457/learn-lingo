import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || '');

  const toggleTheme = themeName => {
    setTheme(themeName);
    localStorage.setItem('theme', themeName);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
