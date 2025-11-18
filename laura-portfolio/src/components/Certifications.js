import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-card completed">
            <h3>CISCO - Introduction to Modern AI</h3>
            <p>Completed</p>
            <span className="status-badge">Earned</span>
          </div>
          <div className="certification-card completed">
            <h3>CISCO - Introduction to Data Science</h3>
            <p>Completed</p>
            <span className="status-badge">Earned</span>
          </div>
          <div className="certification-card in-progress">
            <h3>JavaScript Essentials</h3>
            <p>In Progress</p>
            <span className="status-badge progress">Learning</span>
          </div>
          <div className="certification-card in-progress">
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