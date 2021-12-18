import React from "react";
import { Context } from "./Context";

const useContext = () => {
  const { state, getState, setState } = React.useContext(Context);

  return { state, getState, setState };
};

export default useContext;
