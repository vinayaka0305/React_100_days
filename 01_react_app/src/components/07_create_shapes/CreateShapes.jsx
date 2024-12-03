import React, { useState } from 'react'
import './shapes.css'

const CreateShapes = () => {
    const[shapeType,setShapeType] = useState('circle');
    const[shape,setShape] = useState([]);

    const handleClick = ()=>{
        const newShape={
            type:shapeType
        }

        setShape([...shape,newShape])
    }

    // console.log(shape);
  return (
    <div id='main'>
        <div id="shape-creator">
            <select onChange={(e)=>setShapeType(e.target.value)}>
                <option value="circle">circle</option>
                <option value="square">square</option>
            </select>
            <button onClick={handleClick}>add shapes</button>
        </div>
        <div className='shapes-holder'>
            {shape.map((obj,index)=>
                <div className={obj.type.toLowerCase()}>{index}</div>
            )}
        </div>
    </div>
  )
}

export default CreateShapes