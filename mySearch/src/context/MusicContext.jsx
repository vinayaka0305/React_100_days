import React, { useState } from 'react'
import { createContext } from 'react'

export const MusicProvider = createContext();

const MusicContext = ({children}) => {

    const[searchValue,setSearchValue] = useState('');

  return (
    <MusicProvider.Provider value={{searchValue,setSearchValue}}>
        {children}
    </MusicProvider.Provider>
  )
}

export default MusicContext