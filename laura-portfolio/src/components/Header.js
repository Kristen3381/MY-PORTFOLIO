import React from 'react';
import './Header.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand animate-fade-in-left">
          <h2>Laura Shaviya</h2>
        </div>
        <div className="nav-right">
          <ul className="nav-menu">
            <li><a href="#home" className="animate-fade-in-down animate-delay-1">Home</a></li>
            <li><a href="#about" className="animate-fade-in-down animate-delay-2">About</a></li>
            <li><a href="#education" className="animate-fade-in-down animate-delay-3">Education</a></li>
            <li><a href="#certifications" className="animate-fade-in-down animate-delay-4">Certifications</a></li>
            <li><a href="#projects" className="animate-fade-in-down animate-delay-5">Projects</a></li>
            <li><a href="#contact" className="animate-fade-in-down animate-delay-6">Contact</a></li>
          </ul>
          <div className="animate-fade-in-right">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;