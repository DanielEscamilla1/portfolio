import React from "react";
import "./Intro.css";
import Me from "../../img/Me1.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Daniel Escamilla</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Gamer</div>
              <div className="i-title-item">Soccer player</div>
              <div className="i-title-item">Gym Rat</div>
              <div className="i-title-item">Model</div>
            </div>
          </div>
          <p className="i-description">
            I am a problem solver, future full-stack developer, from Charlotte
            North Carolina. My passion for software development stems from my
            love of engineering in general. I love problem solving and finding
            what makes everything work.
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
