import React from "react";
import projects from "../data/project.data";
import Reveal from "./Reveal";

function Project() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <header className="section-head">
          <div>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Real-world solutions, each with the repository and dashboard behind it.
            </p>
          </div>
        </header>

        {projects.map((project, index) => {
          const reversed = index % 2 !== 0;

          return (
            <div
              key={project.id}
              className={`project-row ${reversed ? "project-row--reverse" : ""}`}
            >
              {/* IMAGE */}
              <Reveal
                as="div"
                direction={reversed ? "right" : "left"}
                className="project-media"
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              </Reveal>

              {/* DESCRIPTION */}
              <Reveal
                as="div"
                direction={reversed ? "left" : "right"}
                delay={200}
                className="project-info"
              >
                <h3 className="project-title">{project.title}</h3>

                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {project.kpi && (
                  <div className="kpi-chip">
                    <strong>{project.kpi.value}</strong> {project.kpi.label}
                  </div>
                )}

                <p className="project-summary">{project.summary}</p>

                <ul className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="project-links">
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="link-repo">
                    Open repository →
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-repo">
                      Live demo →
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
          );
        })}

        <div className="github-strip">
          <span>28 public repositories, and the list keeps moving.</span>
          <a href="https://github.com/bhumi110" target="_blank" rel="noopener noreferrer">
            github.com/bhumi110 →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;