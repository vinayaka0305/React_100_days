import React from 'react'

const SimpleIntrest = ({name,num}) => {
  return (
    <div>
        <label>{name}</label>
        <input type="number" onChange={(e)=>num(e.target.valueAsNumber)}/>
    </div>
  )
}

export default SimpleIntrest