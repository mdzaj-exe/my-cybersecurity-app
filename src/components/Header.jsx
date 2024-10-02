import React from "react";
import "../stylesheets/Header.css";

const Header = () => (
  <header className="header">
    <h1 className="title">Your Name</h1>
    <h2 className="role">Cybersecurity Specialist</h2>
    <button className="btn">Download CV</button>
    <button className="btn">Let's Talk</button>
  </header>
);

export default Header;
