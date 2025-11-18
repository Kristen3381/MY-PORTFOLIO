import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Laura Shaviya</h1>
        <h2>Software Engineer & Aspiring Data Analyst</h2>
        <p>Third Year Computer Science Student at MMUST</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;