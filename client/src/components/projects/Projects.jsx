import React from "react";
import "./Projects.css";

const Projects = ({ img, title, link, gitLink }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <h2>{title}</h2>
      </div>
      <div className="gitBtn">
        <a
          className="gitBtn-text"
          href={gitLink}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Link
        </a>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="project" className="p-img" />
      </a>
    </div>
  );
};

export default Projects;
