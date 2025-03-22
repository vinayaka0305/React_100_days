import React from 'react'

const ProductCard = ({thumbnail,title}) => {
  return (
    <div>
        <img src={thumbnail} alt={title}/>
        <div>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default ProductCard