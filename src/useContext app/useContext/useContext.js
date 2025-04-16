import React, { useState } from "react";

const context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <context.Provider
      value={{
        count,
        setCount,
      }}
    > 
      {children}
    </context.Provider>
  );
};

export const useContext = () => {
  const state = React.useContext(context);
  if (!state) {
    return console.log("invalid");
  }
  return state;
};
