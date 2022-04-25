import React from "react";
import "./Projects.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Projects = ({ img, title, link, gitLink }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <h2 style={{ color: darkMode && "black" }}>{title}</h2>
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
