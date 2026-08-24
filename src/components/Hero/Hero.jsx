import React from "react";
import "./Hero.css";

function Hero() {
  const currentHour = new Date().getHours();

  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  return (
    <section className="hero-section" id="hero">
      <h1>{greeting}, Hi, I'm Dehini ✌️</h1>

      <p className="tagline">
        <b>I am a passionate web developer from Bangalore</b>
      </p>

      <div className="hero-button">
        <a href="#projects" className="btn primary">
          View My Projects
        </a>

        <a href="#contact" className="btn secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;