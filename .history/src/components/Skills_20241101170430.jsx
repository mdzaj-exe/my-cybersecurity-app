import React from "react";
import "../stylesheets/Skills.css";

const Skills = () => (
  <section className="skills">
    <div className="skills-certifications-container">
      <div className="skills-column">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li className="info-box">Risk Assessment</li>
          <li className="info-box">Intrusion Detection</li>
          <li className="info-box">Linux</li>
          <li className="info-box">Web Development</li>
          <li className="info-box">Cloud Computing (AWS)</li>
        </ul>
      </div>

      <div className="certifications-column">
        <h2>Certifications</h2>
        <ul className="certifications-list">
          <li className="info-box">Google Cybersecurity Certificate</li>
          <li className="info-box">AWS Certified Cloud Practitioner</li>
          <li className="info-box">CompTIA Project+ Certification</li>
          <li className="info-box">WGU Certificate: Back-End Developer</li>
          <li className="info-box">WGU Certificate: Front-End Developer</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
