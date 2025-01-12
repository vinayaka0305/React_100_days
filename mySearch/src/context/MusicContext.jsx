import React, { useState } from "react";
import { createContext } from "react";

export const MusicProvider = createContext();

const MusicContext = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearchPortal, setShowSeachPortal] = useState(false);

  return (
    <MusicProvider.Provider
      value={{
        searchValue,
        setSearchValue,
        showSearchPortal,
        setShowSeachPortal,
      }}
    >
      {children}
    </MusicProvider.Provider>
  );
};

export default MusicContext;
