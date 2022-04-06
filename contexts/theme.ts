import { createContext, useCallback, useState } from 'react';

// set context type
type ThemeContext = {
  dark: number;
  setIsDark: (isDark: number) => void;
};

// context default value
const defaultContext: ThemeContext = {
  dark: 3,
  setIsDark: () => { },
};

// context object
export const themeContext = createContext<ThemeContext>(defaultContext);

// custom Hook
export const useDark = (): ThemeContext => {
  const [dark, setDark] = useState(defaultContext.dark);
  const setIsDark = useCallback((current: number): void => {
    setDark(current);
  }, []);
  return {
    dark,
    setIsDark,
  };
};