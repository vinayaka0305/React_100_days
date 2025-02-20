import React, { useEffect, useState } from 'react'

const PrintNum = ({myCal}) => {

    const[data,setData] = useState([]);
    useEffect(()=>{
        setData(myCal());
        console.log("rendering")
    },[myCal])

  return (
    <div>
        {data.map((val)=>(<li>{val}</li>))}
    </div>
  )
}

export default PrintNum