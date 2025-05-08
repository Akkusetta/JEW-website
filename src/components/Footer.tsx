import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-container bg-gray-900 text-white py-8">
      <div className="footer-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="footer-logo-link flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="/logos/logo.png" 
              alt="Janta Engineering Works Logo" 
              className="footer-logo h-8 w-8"
            />
            <span className="footer-title font-bold text-xl">Janta Engineering Works</span>
          </Link>
          <div className="footer-copyright text-sm">
            © {new Date().getFullYear()} Janta Engineering Works. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;