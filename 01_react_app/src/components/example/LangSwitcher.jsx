import React, { useContext } from 'react'
import { LanguagesContext } from './context/Languages'
import LangSelector from './LangSelector'

const LangSwitcher = () => {
    const {language} = useContext(LanguagesContext)

    const content = {
        en:{
             welcome:"welcome to react-vite!"
        },
        fr:{
             welcome:"Bienvenue à react-vite!"
        },
        es:{
            welcome:"¡Bienvenido a react-vite"
        }
    }
  return (
    <div>
        <h1>{content[language].welcome}</h1>
        <LangSelector/>
    </div>
  )
}

export default LangSwitcher