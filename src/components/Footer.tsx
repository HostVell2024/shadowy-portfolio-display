
import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tight">
              Marvel<span className="text-white/70">.</span>
            </h3>
            <p className="text-white/60 text-sm mt-2">
              &copy; {new Date().getFullYear()} Marvel. All rights reserved.
            </p>
          </div>
          
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#" className="footer-link text-sm">Home</a>
            </li>
            <li>
              <a href="#about" className="footer-link text-sm">About</a>
            </li>
            <li>
              <a href="#projects" className="footer-link text-sm">Projects</a>
            </li>
            <li>
              <a href="#skills" className="footer-link text-sm">Skills</a>
            </li>
            <li>
              <a href="#contact" className="footer-link text-sm">Contact</a>
            </li>
          </ul>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:shadow-glow-sm transition-all duration-300">
              <Github className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:shadow-glow-sm transition-all duration-300">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:shadow-glow-sm transition-all duration-300">
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <button 
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:shadow-glow-sm transition-all duration-300 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
