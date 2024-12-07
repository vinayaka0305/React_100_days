import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider/Themeprovider";
import LocalThemedBox from "./LocalThemedBox";
import "./style.css";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Page = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  const txtColor = `txt-${theme}`;
  return (
    <>
      <div className={`bg-${theme}`} id="themed-page">
        <p className={txtColor}>lorem ipsum dolor iterit n stuff</p>
        <button className={`btn btn-${theme} ${txtColor}`}>sup</button>
        <LocalThemedBox />
        <ThemeToggleBtn />
      </div>
    </>
  );
};

export default Page;
