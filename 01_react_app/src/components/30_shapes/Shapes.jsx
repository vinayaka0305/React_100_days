import React from "react";
import { Link, useLocation } from "react-router-dom";
import Child from "./Child";

const Shapes = () => {
  const { search } = useLocation();
  let query = new URLSearchParams(search);

  return (
    <div>
      <h2>shapes</h2>
      <ul>
        <li>
          <Link to="/shapes?shape=square&color=Blue">Blue Square</Link>
        </li>
        <li>
          <Link to="/shapes?shape=square&color=Red">Red Square</Link>
        </li>
        <li>
          <Link to="/shapes?shape=circle&color=Blue">Blue circle</Link>
        </li>
        <li>
          <Link to="/shapes?shape=circle&color=Red">Red Circle</Link>
        </li>
      </ul>
      <Child shape={query.get('shape')} color={query.get('color')}/>
    </div>
  );
};

export default Shapes;
