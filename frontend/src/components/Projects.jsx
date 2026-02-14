import React from "react";

import projects from "../data/project.data";
import { useState } from "react";

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="projects-section py-5">
        <div className="container">
          <h1 className="section-title mb-3">Selected Work</h1>
          <p className="section-subtitle mb-5">
            Real-world solutions I've designed and built.
          </p>

          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`row align-items-center project-row ${
                index % 2 !== 0 ? "flex-md-row-reverse" : ""
              }`}
            >
              {/* IMAGE SIDE */}
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image "
                  />
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="col-md-6">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links mt-4">
                  <a href={project.demo} className="btn-demo">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                  </a>
                  <a href={project.source} className="btn-source ms-3">
                    <i className="fa-brands fa-github"></i> Source
                  </a>
                  {/* <button
                    className="btn-case"
                    onClick={() => setSelectedProject(project)}
                  >
                    Case Study →
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* {selectedProject && (
        <div className="case-modal-overlay">
          <div className="case-modal">
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            <div className="case-section">
              <h6>PROBLEM</h6>
              <p>{selectedProject.problem}</p>
            </div>

            <div className="case-section">
              <h6>CHALLENGES</h6>
              <p>{selectedProject.challenges}</p>
            </div>

            <div className="case-section">
              <h6>LESSONS LEARNED</h6>
              <p>{selectedProject.lessons}</p>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Project;
