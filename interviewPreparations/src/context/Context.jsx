import React, { createContext } from 'react'

export const ContextProvider = createContext();

const Context = ({children}) => {
    const name = "Vinayaka"
  return (
    <ContextProvider.Provider value={name}>
        {children}
    </ContextProvider.Provider>
  )
}

export default Context