import React from "react";
import ContextProvider from "./context/ContextProvider";
import UseeContext from "./UseeContext";

const HomeC = () => {
  return (
    <ContextProvider>
      <UseeContext />
    </ContextProvider>
  );
};

export default HomeC;
