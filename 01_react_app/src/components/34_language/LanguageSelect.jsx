import React, { useContext } from 'react'
import { LanguageContext } from './LanguageC/LanguageProvider'

const LanguageSelect = () => {
    const{SetLanguageHandler} = useContext(LanguageContext)
  return (
    <div>
        <select onChange={SetLanguageHandler}>
            <option value='en'>English</option>
            <option value='fr'>French</option>
            <option value='es'>Spanish</option>
        </select>
    </div>
  )
}

export default LanguageSelect