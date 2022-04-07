import { createContext, useCallback, useState } from 'react';

// set context type
type SudokuContext = {
  remainingQuestion: number;
  setRemainingQuestion: (isDark: number) => void;
};

// context default value
const defaultContext: SudokuContext = {
  remainingQuestion: 3,
  setRemainingQuestion: () => { },
};

// context object
export const themeContext = createContext<SudokuContext>(defaultContext);

// custom Hook
export const useSudoku = (): SudokuContext => {
  const [remainingQuestion, setRemainingQuestion] = useState(defaultContext.remainingQuestion);
  const setQuestion = useCallback((current: number): void => {
    setRemainingQuestion(current);
  }, []);
  return {
    remainingQuestion: remainingQuestion,
    setRemainingQuestion: setQuestion,
  };
};