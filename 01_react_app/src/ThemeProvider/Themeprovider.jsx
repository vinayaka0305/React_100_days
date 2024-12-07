import { createContext, useState } from "react";

export const ThemeContext = createContext();

const Themeprovider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const intialValue = {
    theme,
    toggleTheme: () => {
      setTheme(theme === "light" ? "dark" : "light");
    },
  };

  return (
    <>
      <ThemeContext.Provider value={intialValue}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default Themeprovider;
