import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-content">
        <figure className="profile-figure">
          <img
            src="/dehini.jpeg"
            alt="Dehini profile"
          />

          <figcaption>Dehini</figcaption>
        </figure>

        <div className="about-text">
          <p>
            I am interested in learning and building new things and
            look forward to working hard and developing my skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;