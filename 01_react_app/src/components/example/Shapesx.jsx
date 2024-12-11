import React from "react";
import { Link, useLocation } from "react-router-dom";
import ChildComp from "./ChildComp";

const Shapesx = () => {
  const { search } = useLocation();
  let query = new URLSearchParams(search);
//   console.log(query);
  return (
    <div>
      <div>
        <h2>Shapes </h2>
      </div>
      <nav>
        <li>
          <Link to="/shapes?shape=square&color=red">Square Red</Link>
        </li>
        <li>
          <Link to="/shapes?shape=square&color=blue">Square Blue</Link>
        </li>
        <li>
          <Link to="/shapes?shape=circle&color=red">Circle Red</Link>
        </li>
        <li>
          <Link to="/shapes?shape=circle&color=blue">Circle Blue</Link>
        </li>
      </nav>
      <ChildComp shape={query.get("shape")} color={query.get("color")} />
    </div>
  );
};

export default Shapesx;
