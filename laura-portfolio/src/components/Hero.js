import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="animate-fade-in-down animate-delay-1">Laura Shaviya</h1>
        <h2 className="animate-fade-in-down animate-delay-2">Software Engineer & Aspiring Data Analyst</h2>
        <p className="animate-fade-in-down animate-delay-3">Third Year Computer Science Student at MMUST</p>
        <div className="hero-buttons animate-fade-in-up animate-delay-4">
          <a href="#projects" className="btn primary hover-lift">View My Work</a>
          <a href="#contact" className="btn secondary hover-lift">Get In Touch</a>
        </div>
        <div className="tech-stack animate-fade-in-up animate-delay-5">
          <div className="tech-item">React</div>
          <div className="tech-item">JavaScript</div>
          <div className="tech-item">Python</div>
          <div className="tech-item">Data Science</div>
          <div className="tech-item">AI/ML</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;