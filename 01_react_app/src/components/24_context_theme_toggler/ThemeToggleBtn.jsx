import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeProvider/Themeprovider'

const ThemeToggleBtn = () => {
    const{theme,toggleTheme} = useContext(ThemeContext)

    
  return (
    <button className={`btn btn-${theme} txt-${theme}`} onClick={()=>toggleTheme()}>
        switch to {theme === "dark"?"light":'dark'}
    </button   >
  )
}

export default ThemeToggleBtn