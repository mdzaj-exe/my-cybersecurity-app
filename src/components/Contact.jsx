import React from "react";
import "../stylesheets/Contact.css";

const Contact = () => (
  <section className="contact">
    <h2>Contact Me</h2>
    <div className="scrolling-links">
      <a href="https://www.linkedin.com/in/aj-in-cs/" target="_blank">
        LinkedIn
      </a>
      <a
        href="https://github.com/mdzaj-exe/cybersecurity-portfolio"
        target="_blank"
      >
        GitHub
      </a>
      {/* Add more links as needed */}
    </div>
  </section>
);

export default Contact;
