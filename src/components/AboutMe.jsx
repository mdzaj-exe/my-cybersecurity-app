import React from "react";
import "../stylesheets/AboutMe.css";

const AboutMe = () => (
  <section className="about-me">
    <h2>About Me</h2>
    <div className="content">
      <div className="image-wrapper">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-image"
          />
          <div className="background-box"></div>
        </div>
      </div>
      <div className="info">
        <div className="info-box-container">
          <div className="info-box">
            <strong>Entry-Level Cybersecurity</strong>
          </div>
          <div className="info-box">
            <strong>Google Cybersecurity Certificate</strong>
          </div>
          <div className="info-box">
            <strong>Projects: 5+</strong>
          </div>
        </div>
        <p>
          I am passionate about cybersecurity, ethical hacking, and protecting
          sensitive information from cyber threats. I have hands-on experience
          with intrusion detection, risk assessment, and Linux systems.
          Currently, I am expanding my knowledge through various
          certifications(Security+, CySA+, PenTest+) and hands-on labs
          (TryHackMe).
        </p>

        <button className="btn">Let's Talk</button>
      </div>
    </div>
  </section>
);

export default AboutMe;
