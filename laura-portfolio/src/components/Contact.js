import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info animate-fade-in-left animate-delay-1">
            <h3>Let's Connect!</h3>
            <p>I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and data science.</p>
            <div className="contact-details">
              <p>📍 MMUST, Kenya</p>
              <p>🎓 Computer Science Student</p>
              <p>💼 Software Engineer & Aspiring Data Analyst</p>
            </div>
            <div className="social-links">
              <a 
                href="mailto:shavialaura462@gmail.com" 
                className="social-link email-link animate-bounce-in animate-delay-1"
                aria-label="Send email to Laura"
              >
                <span className="social-icon">📧</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/laura-shavia-835990378" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin-link animate-bounce-in animate-delay-2"
                aria-label="Visit Laura's LinkedIn"
              >
                <span className="social-icon">💼</span>
              </a>
              <a 
                href="https://github.com/Kristen3381" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link github-link animate-bounce-in animate-delay-3"
                aria-label="Visit Laura's GitHub"
              >
                <span className="social-icon">🐙</span>
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link twitter-link animate-bounce-in animate-delay-4"
                aria-label="Visit Laura's Twitter"
              >
                <span className="social-icon">🐦</span>
              </a>
            </div>
          </div>
          <form className="contact-form animate-fade-in-right animate-delay-2">
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="form-input hover-lift" 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="form-input hover-lift" 
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Your Message" 
                rows="5" 
                required 
                className="form-input hover-lift"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn primary submit-btn hover-lift animate-pulse-slow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;