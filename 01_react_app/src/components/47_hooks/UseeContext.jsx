import React, { useContext } from 'react'
import { Context } from './context/ContextProvider'

const UseeContext = () => {
    const name = useContext(Context);
  return (
    <div id='main'>
        <h1>{name}</h1>
    </div>
  )
}

export default UseeContext