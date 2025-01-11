import React from 'react'
import ReactDOM from "react-dom"

const portalRoot = 
typeof document !== undefined?document.getElementById('portal'):null;

const Portal = ({children}) => {
    if(!portalRoot) return null;
    return ReactDOM.createPortal(children,portalRoot)
}

export default Portal