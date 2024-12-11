import React from 'react'

const Child = ({shape,color}) => {
    if(shape === 'circle'){
        return(
            <div id='circle' style={{backgroundColor:color}}>
                <h2>{shape}</h2>
            </div>
        )
    }else if(shape==='square'){
        return(
            <div id='square' style={{backgroundColor:color}}>
                <h2>{shape}</h2>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}

export default Child