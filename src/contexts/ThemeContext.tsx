import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface IThemeContext {
  children: ReactNode;
}

export const ThemeContext = createContext<{
  isDark: boolean;
  toggleTheme: () => void;
}>({
  isDark: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: IThemeContext) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme_mode')
      ? localStorage.getItem('theme_mode') === 'dark'
        ? true
        : false
      : true,
  );
  const toggleTheme = () => setIsDark((prev) => !prev);
  useEffect(() => {
    localStorage.setItem('theme_mode', isDark ? 'dark' : 'light');
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    setIsDark(localStorage.getItem('theme_mode') === 'dark' ? true : false);
  }, []);

  return (
    <ThemeContext value={{ isDark, toggleTheme }}>{children}</ThemeContext>
  );
};
