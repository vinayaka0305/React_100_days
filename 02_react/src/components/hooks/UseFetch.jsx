import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

const UseFetch = (api) => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
       
        try {
            const response = await fetch(api);
            const data = await response.json();
            // console.log(data);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

  return data
}

export default UseFetch