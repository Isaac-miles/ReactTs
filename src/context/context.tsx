import React, { createContext, useState } from 'react';

// Step 1: Create a context
const MyContext = createContext({});

// Step 2: Create a provider
const MyProvider = ({ children }:any) => {
  // Define the state you want to share
  const [value, setValue] = useState('');

  // You can define any functions or state manipulations here
  const updateValue = (newValue:any) => {
    setValue(newValue);
  };

  // Return the provider with the value and any methods you want to expose
  return (
    <MyContext.Provider value={{ value, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };