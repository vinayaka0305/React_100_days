import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeProvider/Themeprovider";

const LocalThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  //   console.log(theme);
  const [loacalTheme, setLocalTheme] = useState(theme);

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  return (
    <div
      className={`bg-${loacalTheme}`}
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
    >
      <p className={`txt-${loacalTheme}`}>Hiiii</p>
      <button
        className={`btn btn-${loacalTheme} txt-${loacalTheme}`}
        onClick={() =>
          setLocalTheme(loacalTheme === "light" ? "dark" : "light")
        }
      >
        Toggle local theme to {loacalTheme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default LocalThemedBox;
