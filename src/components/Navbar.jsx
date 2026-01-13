import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="Navbar">
      <div className="nav-logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="nav-middle">
        <h1 className="stranger-text">Stranger Things</h1>
      </div>

      <div className="menu-dots" onClick={() => setOpen(!open)}>
        ⋮
      </div>

      <ul className={`Navlinks ${open ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/episodes">Episodes</Link></li>
        <li><Link to="/story">Story</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
