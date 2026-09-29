import React from "react";
import Reveal from "./Reveal";

function About() {
  return (
  <section id="about" className="about-section py-5">
  <div className="container">
    <div className="row">
      {/* LEFT SIDE */}
      <Reveal as="div" direction="left" className="col-md-6 mb-5 mb-md-0">
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">
          A bit about who I am and what drives me.
        </p>

        <div className="info-card">
          <h5><i className="fa-solid fa-bullseye"></i> Career Objective</h5>
          <p>
            Seeking opportunities to apply my skills in data analysis, business
    intelligence, and problem-solving to transform data into actionable
    insights and support data-driven decision-making.
          </p>
        </div>

        <div className="info-card mt-4">
          <h5><i className="fa-solid fa-graduation-cap"></i> Education</h5>
          <div className="education-card">
            <div>
              <strong>B.Tech in Computer Science</strong>
              <p className="mb-1">NSHM KNOWLEDGE CAMPUS, DURGAPUR</p>
              <small>2023 – 2027</small>
            </div>
            <span className="gpa">GPA: 7.28/10</span>
          </div>
        </div>
      </Reveal>

      {/* RIGHT SIDE */}
      <Reveal as="div" direction="right" delay={150} className="col-md-6">
        <h5 className="mb-4">Key Strengths</h5>

        <ul className="strength-list">
  <li>Strong analytical and problem-solving skills</li>
  <li>Data-driven thinking and attention to detail</li>
  <li>Ability to translate data into actionable insights</li>
  <li>Clear communication of findings and recommendations</li>
  <li>Quick learner with a curiosity for business and data</li>
</ul>
      </Reveal>
    </div>
  </div>
</section>
  )
}

export default About;