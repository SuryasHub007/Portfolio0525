import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Snow Animation */}
      <div className="snow-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="snow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          PSS<span>.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li>
            <a href="#contact" className="nav-btn">Contact</a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${open ? "show" : ""}`}>
        <li onClick={() => setOpen(false)}><a href="#home">Home</a></li>
        <li onClick={() => setOpen(false)}><a href="#about">About</a></li>
        <li onClick={() => setOpen(false)}><a href="#skills">Skills</a></li>
        <li onClick={() => setOpen(false)}><a href="#projects">Projects</a></li>
        <li onClick={() => setOpen(false)}>
          <a href="#contact" className="mobile-btn">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
