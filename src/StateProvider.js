import React, { createContext, useContext, useReducer } from "react";

// Creating data layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Creating a Consumer
export const useStateValue = () => useContext(StateContext);
