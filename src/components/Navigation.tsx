import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation-container bg-blue-900 text-white">
      <div className="navigation-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navigation-content flex items-center justify-between h-16">
          <Link to="/" className="navigation-logo-link flex items-center space-x-2">
            <img 
              src="/logos/logo.png" 
              alt="Janta Engineering Works Logo" 
              className="navigation-logo h-8 w-8"
            />
            <span className="navigation-title font-bold text-xl">Janta Engineering Works</span>
          </Link>
          <div className="navigation-links hidden md:flex space-x-8">
            <Link to="/about" className="nav-link hover:text-blue-200">About</Link>
            <Link to="/services" className="nav-link hover:text-blue-200">Services</Link>
            <Link to="/projects" className="nav-link hover:text-blue-200">Projects</Link>
            <Link to="/contact" className="nav-link hover:text-blue-200">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;