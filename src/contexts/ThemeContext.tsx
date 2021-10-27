import React, { createContext, useState } from 'react';

export const DEFAULT_THEME = 'default';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

type ThemeContextProvider = {
  globalTheme: string;
  setGlobalTheme: (theme: string) => void;
};

export const ThemeContext = createContext({} as ThemeContextProvider);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  document.getElementsByTagName('body')[0].className = theme;

  return (
    <ThemeContext.Provider
      value={{
        globalTheme: theme,
        setGlobalTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
