import React, { useContext } from 'react';
import { LanguageContext } from './LanguageC/LanguageProvider';
import LanguageSelect from './LanguageSelect';

const LanguageSwitcher = () => {
    const {language} = useContext(LanguageContext);

    const content = {
        en:{
            welcome:"welcome to Next.js!"
        },
        fr:{
            welcome:"Bienvenue à Next.js!"
        },
        es:{
            welcome:"¡Bienvenido a Next.js"
        }
    }
  return (
    <div>
        <h1>{content[language].welcome}</h1>
        <LanguageSelect/>
    </div>
  )
}

export default LanguageSwitcher