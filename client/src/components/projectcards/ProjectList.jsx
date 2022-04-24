import React from "react";
import "./ProjectList.css";
import Projects from "../projects/Projects";
import { projects } from "../../data/Data";



const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Create & inspire. It's lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for a you
          new beautiful home.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
