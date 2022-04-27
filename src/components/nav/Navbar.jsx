import React from "react";
import "./Navbar.css";
import Resume from '../../img/resume.png'

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <a className="de" href="#intro" id="de-text">DE</a>
        <a className="de" href="#about">About</a>
        <a className="de"href="#projects">Projects</a>
        <a className="de"href="#contact">Contact</a>
        <a href={Resume} download className='nav-btn'>Resume</a>
      </nav>
    </>
  );
};

export default Navbar;
