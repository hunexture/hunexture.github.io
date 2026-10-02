import React, { createContext, useContext, useEffect } from 'react';

// The site uses a single "blueprint" theme (light). The context is kept so
// components can still read `theme` (e.g. Logo picks the light-background logo).
const THEME = 'white';

const ThemeContext = createContext({ theme: THEME });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', THEME);
    try {
      localStorage.removeItem('hunexture-theme');
    } catch (e) {
      // storage unavailable — nothing to clean up
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: THEME }}>
      {children}
    </ThemeContext.Provider>
  );
};
