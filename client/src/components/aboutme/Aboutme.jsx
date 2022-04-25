import React from "react";
import "./Aboutme.css";
import AboutMe from "../../img/Me.jpg";
import HTML from "../../img/html.png";
import CSS from "../../img/css.png";
import JS from "../../img/js.png";
import REACT from "../../img/react.png";
import NODE from "../../img/node.png";
import MYSQL from "../../img/mysql.png";
import GIT from "../../img/git.png";

const Aboutme = () => {
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
        <p className="a-sub">
          
        </p>
        <p className="a-desc">
          I am a problem solver, future full-stack developer, from Charlotte
          North Carolina. My passion for software development stems from my love
          of engineering in general. I love problem solving and finding what
          makes everything work.
        </p>
        <div className="a-award-text">
          <h2 className="a-award-title">Top Skills</h2>
          {/* <p className="a-award-desc">
              I am the greatest full stack web developerto ever touch code.
            </p> */}
        </div>
        <div className="a-award">
          <img src={HTML} alt="" className="a-award" />
          <img src={CSS} alt="" className="a-award" />
          <img src={JS} alt="" className="a-award" />
          <img src={REACT} alt="" className="a-award" />
          <img src={NODE} alt="" className="a-award" />
          <img src={MYSQL} alt="" className="a-award" />
          <img src={GIT} alt="" className="a-award" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
