import { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageProvider=({children})=>{

    // const name = "vinayaka"
    const[language,SetLanguage] = useState('en');

    const SetLanguageHandler = (e)=>{
        SetLanguage(e.target.value)
    }

    return(
        <LanguageContext.Provider value={{language,SetLanguageHandler}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;