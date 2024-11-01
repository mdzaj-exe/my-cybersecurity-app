import React from "react";
import "../stylesheets/Experience.css";

const Experience = () => (
  <section className="experience">
    <h2>Experience</h2>
    <div className="card">
      <h3>Data Annotation - AI Tester</h3>
      <p>Conducted comprehensive testing and evaluation of AI models...</p>
      <button onClick={toggleDetails}>More Details</button>
      <div className="details">Detailed description of the role...</div>
    </div>
    {/* Add more cards for other experiences */}
  </section>
);

const toggleDetails = (e) => {
  const details = e.target.nextElementSibling;
  details.style.display = details.style.display === "none" ? "block" : "none";
};

export default Experience;
