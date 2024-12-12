import React from "react";
import LanguageProvider from "./LanguageC/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

const LanguageHome = () => {
  return (
    <LanguageProvider>
      <div>LanguageHome</div>
      <LanguageSwitcher />
      
    </LanguageProvider>
  );
};

export default LanguageHome;
