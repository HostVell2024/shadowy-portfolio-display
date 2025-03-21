
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Add animation on component mount
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      if (headingRef.current) {
        headingRef.current.classList.add('animate-slide-down');
      }
      
      if (subtitleRef.current) {
        setTimeout(() => {
          subtitleRef.current?.classList.add('animate-slide-up');
        }, 300);
      }
      
      if (ctaRef.current) {
        setTimeout(() => {
          ctaRef.current?.classList.add('animate-fade-in');
        }, 600);
      }
    }, 100);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <h1 
          ref={headingRef}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight opacity-0"
        >
          <span className="block">Hi, I'm</span>
          <span className="block mt-2 bg-clip-text bg-gradient-to-r from-white to-white/80">Marvel</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl font-light text-white/80 max-w-2xl mx-auto mb-10 opacity-0"
        >
          Developer and creative enthusiast passionate about coding, editing, gaming, and photography
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col md:flex-row justify-center items-center gap-4 opacity-0"
        >
          <a href="#projects" className="custom-button">View My Work</a>
          <a href="#contact" className="outlined-button">Get In Touch</a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a 
          href="#about" 
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-pulse" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
