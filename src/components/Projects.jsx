import React from "react";
import "../stylesheets/Projects.css";

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-card">
      <h3>Secure Web Application</h3>
      <p>Description of the project...</p>
      <img src="../assets/react.svg" alt="Security Icon" />
      {/* Add more projects as needed */}
    </div>
    {/* Add more project cards */}
  </section>
);

export default Projects;
