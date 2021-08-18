import React from "react";
import "./Navbar.css";

import logo from "../../images/logo.png";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-content">
        <img src={logo} alt="logo"></img>
      </div>
    </div>
  );
}

export default Navbar;
