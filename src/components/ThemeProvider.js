import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('purple'); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'purple' ? 'black-and-white' : 'purple'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
