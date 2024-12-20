import React, { createContext, useState } from 'react'

export const LanguagesContext = createContext();

const Languages = ({children}) => {

    // const name = "vinayaka"
    const [language,setLanguage] = useState('en');

    const languageHandler =(e)=>{
        setLanguage(e.target.value);
    } 

  return (
    <LanguagesContext.Provider value={{language,languageHandler}}>
        {children}
    </LanguagesContext.Provider>
  )
}

export default Languages