import React from "react";
import "../stylesheets/Experience.css";

const Experience = () => (
  <section className="experience">
    <h2>Experience</h2>

    {/* Data Annotation AI Tester */}
    <div className="experience-item">
      <h3>Data Annotation Artificial Intelligence Tester</h3>
      <p>August 2023 - August 2024</p>
      <ul>
        <li>
          Conducted comprehensive testing and evaluation of AI models for
          performance, accuracy, and efficiency.
        </li>
        <li>
          Applied analytical skills to compare and benchmark various AI models,
          ensuring optimal performance.
        </li>
        <li>
          Contributed expertise to the refinement of AI solutions aligned with
          company objectives.
        </li>
        <li>
          Demonstrated attention to detail critical for cybersecurity roles.
        </li>
      </ul>
    </div>

    {/* Resident Advisor */}
    <div className="experience-item">
      <h3>Resident Advisor</h3>
      <p>Occidental College | August 2022 - July 2023</p>
      <ul>
        <li>
          Developed programs fostering a supportive community for college
          students.
        </li>
        <li>
          Collaborated with a team to plan community-building events,
          demonstrating teamwork and leadership skills.
        </li>
        <li>
          Served as a resource for residents while showcasing communication
          abilities.
        </li>
        <li>
          Liaised between residents and administration as an advocate for
          residents' needs.
        </li>
      </ul>
    </div>

    {/* Civil Air Patrol Cadet */}
    <div className="experience-item">
      <h3>Civil Air Patrol Cadet</h3>
      <p>2014 - 2020</p>
      <ul>
        <li>
          Awarded Air Force Sergeants Association Squadron NCO of the Year for
          cadet development and leadership.
        </li>
        <li>
          Developed teamwork through participation in squadron meetings and
          group projects.
        </li>
        <li>
          Showcased discipline through regular participation in physical fitness
          activities and drills.
        </li>
      </ul>
    </div>

    {/* Uber Food Delivery Driver */}
    <div className="experience-item">
      <h3>Uber Food Delivery Driver</h3>
      <p>May 2020 - August 2020</p>
      <ul>
        <li>
          Adapted to varying weather conditions while maintaining reliable
          delivery schedules.
        </li>
        <li>
          Provided friendly customer service while addressing customer questions
          or concerns.
        </li>
        <li>
          Demonstrated time management by consistently delivering orders on time
          despite challenges.
        </li>
      </ul>
    </div>
    {/* LinkedIn Button */}
    <a
      href="https://www.linkedin.com/in/aj-in-cs/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="linkedin-btn">More Details</button>
    </a>
  </section>
);

export default Experience;
