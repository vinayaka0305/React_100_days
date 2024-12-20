import React, { createContext } from 'react'

export const Context = createContext();

const ContextProvider = ({children}) => {
    const name = "vinayaka"
  return (
    <Context.Provider value={name}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider