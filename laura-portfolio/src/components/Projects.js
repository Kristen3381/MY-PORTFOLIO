import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Projects & Aspirations</h2>
        <div className="projects-grid">
          <div className="project-card animate-fade-in-left animate-delay-1 hover-lift">
            <div className="project-icon">🚀</div>
            <h3>WiSTEM Initiative</h3>
            <p>Founded and lead a university club focused on empowering women in STEM through mentorship, workshops, and networking opportunities.</p>
          </div>
          <div className="project-card animate-fade-in-up animate-delay-2 hover-lift">
            <div className="project-icon">📊</div>
            <h3>Data Analysis Projects</h3>
            <p>Working on practical data analysis projects to apply my learning from CISCO certifications and university coursework.</p>
          </div>
          <div className="project-card animate-fade-in-right animate-delay-3 hover-lift">
            <div className="project-icon">🎯</div>
            <h3>Future Goals</h3>
            <p>Transition from aspiring data analyst to data scientist, contributing to meaningful projects that leverage AI and machine learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;