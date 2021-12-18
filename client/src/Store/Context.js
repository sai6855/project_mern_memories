import React from "react";
import { createStore, useProvider } from "react-manage-state";
import { defaultState } from "./defaultStore";

export const Context = createStore(defaultState);

const Provider = ({ children }) => {
  const { state, getState, setState } = useProvider(defaultState);

  return (
    <Context.Provider value={{ state, getState, setState }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
