import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const[data,setData] = useState(null);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        try {
            setLoading(true);
            const response = await fetch(url)
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log(err);
            setError('exception occured');
        }finally{
            setLoading(false);
        }
       
    }
    return {data,loading,error}
}

export default useFetch