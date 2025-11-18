import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Leadership</h2>
        <div className="education-content">
          <div className="education-item">
            <h3>Masinde Muliro University of Science and Technology</h3>
            <p className="degree">Bachelor of Science in Computer Science</p>
            <p className="duration">2022 - Present (Third Year)</p>
            <div className="leadership">
              <h4>Leadership Roles:</h4>
              <ul>
                <li>President - School of Computing and Informatics</li>
                <li>Founder & President - WiSTEM (Women in STEM Club)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;