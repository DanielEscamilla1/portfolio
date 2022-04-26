import React from "react";
import "./Aboutme.css";
import AboutMe from "../../img/Me.jpg";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Js from "../../img/js.png";
import React1 from "../../img/react.png";
import Node from "../../img/node.png";
import Mysql from "../../img/mysql.png";
import Git from "../../img/git.png";
import Sass from "../../img/sass.png";
import Java from "../../img/java.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Aboutme = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={AboutMe} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub"></p>
        <p className="a-desc">
          I am a problem solver, future full-stack developer, from Charlotte
          North Carolina. My passion for software development stems from my love
          of engineering in general. I love problem solving and finding what
          makes everything work.
        </p>
        <div className="a-award-text">
          <h2 style={{ color: darkMode && "white" }} className="a-award-title">
            Top Skills
          </h2>
          {/* <p className="a-award-desc">
              I am the greatest full stack web developerto ever touch code.
            </p> */}
        </div>
        <div className="a-award">
          <img src={Html} alt="" className="a-award" />
          <img src={Css} alt="" className="a-award" />
          <img src={Js} alt="" className="a-award" />
          <img src={Git} alt="" className="a-award" />
          <img src={Sass} alt="" className="a-award" />
          <img src={React1} alt="" className="a-award" />
          <img src={Node} alt="" className="a-award" />
          <img src={Mysql} alt="" className="a-award" />
          <img src={Java} alt="" className="a-award" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
