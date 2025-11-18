import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-card completed animate-fade-in-up animate-delay-1 hover-lift">
            <h3>CISCO - Introduction to Modern AI</h3>
            <p>Completed</p>
            <span className="status-badge earned">Earned</span>
          </div>
          <div className="certification-card completed animate-fade-in-up animate-delay-2 hover-lift">
            <h3>CISCO - Introduction to Data Science</h3>
            <p>Completed</p>
            <span className="status-badge earned">Earned</span>
          </div>
          <div className="certification-card in-progress animate-fade-in-up animate-delay-3 hover-lift">
            <h3>JavaScript Essentials</h3>
            <p>In Progress</p>
            <span className="status-badge progress">Learning</span>
          </div>
          <div className="certification-card in-progress animate-fade-in-up animate-delay-4 hover-lift">
            <h3>Python Essentials</h3>
            <p>In Progress</p>
            <span className="status-badge progress">Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;