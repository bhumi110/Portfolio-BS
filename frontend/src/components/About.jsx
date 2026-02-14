import React from "react";

function About() {
  return (
  <section id="about" className="about-section py-5">
  <div className="container">
    <div className="row">
      {/* LEFT SIDE */}
      <div className="col-md-6 mb-5 mb-md-0">
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">
          A bit about who I am and what drives me.
        </p>

        <div className="info-card">
          <h5><i className="fa-solid fa-bullseye"></i> Career Objective</h5>
          <p>
            Seeking opportunities to leverage my full-stack development
            expertise in building impactful products that solve real-world
            problems at scale.
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
            <span className="gpa">GPA: 7.12/10</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="col-md-6">
        <h5 className="mb-4">Key Strengths</h5>

        <ul className="strength-list">
          <li>Strong problem-solving and analytical thinking</li>
          <li>Clean, maintainable code architecture</li>
          <li>Effective cross-team communication</li>
          <li>Fast learner with passion for new technologies</li>
          <li>Experience with agile methodologies</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default About;