import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ChangeThemeButton = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="ml-10 text-xl" onClick={toggleTheme}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ChangeThemeButton;
