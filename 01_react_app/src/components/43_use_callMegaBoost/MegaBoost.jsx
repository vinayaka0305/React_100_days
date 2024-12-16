import React from 'react'

const MegaBoost = ({handleMeagBoost}) => {
    
    console.log('rendering meagboost')

  return (
    <>
        <button onClick={handleMeagBoost}>Meag Boost</button>
    </>
  )
}

export default React.memo(MegaBoost)