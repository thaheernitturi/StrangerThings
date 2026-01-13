import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div className="nav-middle">
        <h2 className="stranger-text">I BELIEVE</h2>
      </div>

      <div className="menu-dots" onClick={() => setOpen(!open)}>
        ⋮
      </div>

      <ul className={`Navlinks ${open ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/Episodes" onClick={() => setOpen(false)}>Episodes</Link></li>
        <li><Link to="/ending" onClick={() => setOpen(false)}>Final Ending</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
