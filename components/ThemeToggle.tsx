import React from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <FontAwesomeIcon
          icon={faSun}
          onClick={handleThemeToggle}
          size="2x"
          className="cursor-pointer transition text-white hover:text-yellow-400 ease-in-out duration-300"
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          onClick={handleThemeToggle}
          size="2x"
          className="cursor-pointer transition text-black hover:text-gray-600 ease-in-out duration-300"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
