import React, { useState } from 'react'

const useeeToggle = () => {
    const[toggle,setToggle] = useState(false);

    const handleToggle = ()=>{
        setToggle(prev=>!prev)
    }
  return{toggle,handleToggle}
}

export default useeeToggle