import React, { useContext } from "react";
import { LanguagesContext } from "./context/Languages";

const LangSelector = () => {
  const { languageHandler } = useContext(LanguagesContext);
  return (
    <div>
      <select onChange={languageHandler}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default LangSelector;
