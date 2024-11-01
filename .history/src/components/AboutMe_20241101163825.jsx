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
          <div className="info-box">Entry-Level Cybersecurity</div>
          <div className="info-box">Google Cybersecurity Certificate</div>
          <div className="info-box">Projects: 5+</div>
        </div>
        <p>
          I am passionate about cybersecurity, ethical hacking, and protecting
          sensitive information from cyber threats. I have hands-on experience
          with intrusion detection, risk assessment, and Linux systems.
          Currently, I am expanding my knowledge through various
          certifications(Security+, CySA+, PenTest+) and hands-on labs
          (TryHackMe).
        </p>
        <h3>Top Skills</h3>
        <ul className="skills-list">
          <li>Risk Assessment</li>
          <li>Intrusion Detection</li>
          <li>Linux</li>
        </ul>
        <h3>Top Certifications</h3>
        <ul className="certifications-list">
          <li>Google Cybersecurity Certificate</li>
          <li>AWS Certified Cloud Practitioner</li>
          <li>WGU Back-End Developer Certificate</li>
        </ul>
        <button className="btn">Let's Talk</button>
      </div>
    </div>
  </section>
);

export default AboutMe;
