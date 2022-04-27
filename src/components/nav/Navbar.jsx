import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    
      <nav className="main-nav">
        <a className="de" href="#intro">DE</a>
        <a className="de" href="#about">About</a>
        <a className="de"href="#projects">Projects</a>
        <a className="de"href="#contact">Contact</a>
        <button className="nav-btn">Resume</button>
      </nav>
    </>
  );
};

export default Navbar;
