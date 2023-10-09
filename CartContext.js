import React, { createContext, useState, useContext } from 'react';

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return <CountContext.Provider value={{ count, increment }}>{children}</CountContext.Provider>;
};

export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};
