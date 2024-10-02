import React from "react";
import "./stylesheets/App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
