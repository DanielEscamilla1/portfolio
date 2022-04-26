import React from "react";
import "./ProjectList.css";
import Projects from "../projects/Projects";
import { projects } from "../../data/Data";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const ProjectList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="projects" className="pl">
      <div className="pl-text">
        <h1 className="pl-title">My Software Engineering Journal!</h1>
        <p className="pl-desc"></p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Projects
            key={item.id}
            title={item.title}
            img={item.img}
            link={item.link}
            gitLink={item.gitLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
