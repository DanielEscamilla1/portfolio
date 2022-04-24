import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>DE</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/aboutme" activeStyle>
            About Me
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Resume</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
