import React from "react";
import "../stylesheets/Header.css";

const Header = () => (
  <header className="header">
    <p className="intro">Hello, I'm</p>
    <h1 className="title">Your Name</h1>
    <h2 className="role">Cybersecurity Specialist</h2>
    <div className="image-container">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="profile-image"
      />
    </div>
    <button className="btn">Download CV</button>
    <button className="btn">Let's Talk</button>
  </header>
);

export default Header;
