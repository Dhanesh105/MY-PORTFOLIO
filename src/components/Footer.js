import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary/80 py-8 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-tertiary/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-secondary">DT.</h2>
            <p className="text-tertiary mt-2">Software Developer</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary transition-colors duration-300">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary transition-colors duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:dhanesh@example.com" className="text-tertiary hover:text-secondary transition-colors duration-300">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-tertiary text-sm">
            © {new Date().getFullYear()} Dhanesh Taninki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;