
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { User, Mail, Calendar, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-black relative"
    >
      <div className="container-custom">
        <div className="mb-16">
          <p className={`section-subtitle ${inView ? 'animate-fade-in' : 'opacity-0'}`}>About me</p>
          <h2 className={`section-title ${inView ? 'animate-slide-up' : 'opacity-0'}`}>Discover my story.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={`space-y-6 ${inView ? 'animate-slide-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-2xl font-semibold">About myself</h3>
            <p className="text-white/80 leading-relaxed">
              I'm a passionate designer and developer with over 5 years of experience creating digital 
              products and beautiful user experiences. I focus on building modern, minimal, and 
              accessible designs that help businesses connect with their audience.
            </p>
            <p className="text-white/80 leading-relaxed">
              My approach combines clean aesthetics with intuitive functionality, ensuring that every project 
              not only looks amazing but also delivers exceptional user experience. I believe in the power 
              of simplicity and attention to detail.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shadow-glow-sm">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Name</p>
                  <p className="font-medium">John Doe</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shadow-glow-sm">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="font-medium">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shadow-glow-sm">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Experience</p>
                  <p className="font-medium">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shadow-glow-sm">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:shadow-glow transition-all duration-300">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:shadow-glow transition-all duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:shadow-glow transition-all duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div 
            className={`${inView ? 'animate-slide-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="relative">
              {/* Profile image with glowing border */}
              <div className="aspect-square overflow-hidden rounded-2xl border border-white/20 shadow-glow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="John Doe" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Experience card */}
              <div className="absolute -bottom-6 -left-6 bg-black border border-white/10 rounded-lg p-4 shadow-glow-md">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-white/70 text-sm">Years of Experience</div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/3 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
