import React from "react";
import './nav.css'

const Nav = ({ firstLink, secondLink, thirdLink }) => {
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
