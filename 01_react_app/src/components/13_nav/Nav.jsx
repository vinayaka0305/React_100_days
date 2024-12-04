import React, { useEffect } from "react";
import './nav.css'
import axios from 'axios'

const Nav = ({ firstLink, secondLink, thirdLink }) => {


  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = ()=>{
    axios.get('http://localhost:8088/api/v1/products').then((res)=>{
      console.res(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      <nav>
        <ul className="ul-cnt">
          <li className="list">{firstLink}</li>
          <li className="list">{secondLink}</li>
          <li className="list">{thirdLink}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
