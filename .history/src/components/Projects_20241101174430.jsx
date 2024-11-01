import React from "react";
import "../stylesheets/Projects.css";

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>

    <div className="projects-container">
      {/* Project 1: Capstone */}
      <div className="project-item">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/300"
            alt="Capstone Project"
            className="project-image"
          />
          <div className="background-box"></div>
        </div>
        <h3>Capstone: Spring-PC Shop Web App</h3>
        <p>
          A full-stack web application built using Spring Boot for backend
          services and Thymeleaf for front-end rendering. The app allows users
          to browse and purchase PC components.
        </p>
        <a
          href="https://github.com/mdzaj-exe/cybersecurity-portfolio/tree/main/Web%20Development%20Projects/Spring-PC%20Shop%20Web%20App"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="project-btn">View on GitHub</button>
        </a>
      </div>

      {/* Project 2: Placeholder for another project */}
      <div className="project-item">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/300"
            alt="Project 2"
            className="project-image"
          />
          <div className="background-box"></div>
        </div>
        <h3>Project 2: Placeholder Project</h3>
        <p>
          A placeholder description for another project. This could be a web
          development project or any other relevant work that showcases your
          skills.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
