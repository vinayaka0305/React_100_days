import React from 'react'
import { createContext } from 'react'

export const ContextApi = createContext();

const ContextProvider = ({children}) => {
    const name = "vinayaka"
  return (
    <ContextApi.Provider value={{name}}>
        {children}
    </ContextApi.Provider>
  )
}

export default ContextProvider