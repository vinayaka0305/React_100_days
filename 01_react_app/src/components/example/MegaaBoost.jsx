import React from 'react'

const MegaaBoost = ({handleBoost}) => {
    console.log('megaboost rendering')
  return (
    <div>
        <h1>Mega boost</h1>
        <button onClick={handleBoost}>click to boost</button>
    </div>
  )
}

export default MegaaBoost