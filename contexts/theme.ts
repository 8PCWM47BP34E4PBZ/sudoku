import { createContext, useCallback, useState } from 'react';

// set context type
type ThemeContext = {
  dark: number;
  setIsDark: (isDark: number) => void;
};

// context default value
const defaultContext: ThemeContext = {
  dark: 3,
  // 初期値を作成するが、eslintに引っかかる
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsDark: () => { },
};

// context object
export const themeContext = createContext<ThemeContext>(defaultContext);

// custom Hook
export const useDark = (): ThemeContext => {
  // state名はThemeContext typeのプロパティに合わせる。
  const [dark, setDark] = useState(defaultContext.dark);
  // 関数名はThemeContext typeのプロパティに合わせる。
  const setIsDark = useCallback((current: number): void => {
    setDark(current);
  }, []);
  return {
    dark,
    setIsDark,
  };
};