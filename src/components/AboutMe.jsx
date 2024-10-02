import React from "react";
import "../stylesheets/AboutMe.css";

const AboutMe = () => (
  <section className="about-me">
    <h2>About Me</h2>
    <div className="content">
      <div className="image-container">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-image"
        />
        <div className="background-box"></div>
      </div>
      <div className="info">
        <div className="stats">
          <div className="stat">Level: Entry-Level</div>
          <div className="stat">Certificates: 20+</div>
          <div className="stat">Projects: 5</div>
        </div>
        <p>I am passionate about cybersecurity and software engineering...</p>
        <button className="btn">Let's Talk</button>
      </div>
    </div>
  </section>
);

export default AboutMe;
