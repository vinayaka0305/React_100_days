import axios from "axios";
import React, { useState } from "react";
import { createContext } from "react";

export const MusicProvider = createContext();

const MusicContext = ({ children }) => {

  axios.interceptors.request.use((config) => {
    //modify the request handlers to include custom "ProjectId"
    config.headers["projectid"] = "6marrwzascw6"; //adds a "projectId" header to each request
    return config; //return the modified config to proceed with the request
  });
  
  const [searchValue, setSearchValue] = useState("");
  const [showSearchPortal, setShowSeachPortal] = useState(false);
  const [user, setUser] = useState({
    username: sessionStorage.getItem("name") || null,
    loginStatus: JSON.parse(sessionStorage.getItem("loginStatus")) || false,
  });

  return (
    <MusicProvider.Provider
      value={{
        searchValue,
        setSearchValue,
        showSearchPortal,
        setShowSeachPortal,
        user,
        setUser,
      }}
    >
      {children}
    </MusicProvider.Provider>
  );
};

export default MusicContext;
