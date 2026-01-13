import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div className="nav-middle">
        <h2 className="stranger-text">I BELIEVE</h2>
      </div>

      <ul className="Navlinks">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/Episodes">Episodes</Link></li>
  <li><Link to="/ending">Final Ending</Link></li>
  
</ul>

    </div>
  );
};

export default Navbar;
