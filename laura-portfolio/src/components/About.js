import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">About Me</h2>
        <div className="about-content">
          <div className="about-text animate-fade-in-left animate-delay-1">
            <p>
              I'm Laura Shaviya, a passionate 20-year-old software engineer and 
              aspiring data analyst currently pursuing my Computer Science degree 
              at Masinde Muliro University of Science and Technology (MMUST).
            </p>
            <p>
              As the President of the School of Computing and Informatics, I lead 
              initiatives to enhance the academic experience for fellow students. 
              I'm also the founder and president of WiSTEM, a club dedicated to 
              empowering women in STEM fields at my university.
            </p>
            <p>
              My journey in technology is driven by curiosity and a desire to 
              solve real-world problems through data-driven solutions.
            </p>
          </div>
          <div className="about-stats animate-fade-in-right animate-delay-2">
            <div className="stat hover-lift">
              <h3>20</h3>
              <p>Years Old</p>
            </div>
            <div className="stat hover-lift">
              <h3>3rd</h3>
              <p>Year Student</p>
            </div>
            <div className="stat hover-lift">
              <h3>2</h3>
              <p>CISCO Certifications</p>
            </div>
            <div className="stat hover-lift">
              <h3>2</h3>
              <p>Current Certifications in Progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;