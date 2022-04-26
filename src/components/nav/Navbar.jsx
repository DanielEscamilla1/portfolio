import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    
      <nav className="main-nav">
        <a href="#intro">DE</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button className="nav-btn">Resume</button>
      </nav>
    </>
  );
};

export default Navbar;
