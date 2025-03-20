
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Minimalist E-commerce",
      description: "A modern e-commerce platform with minimalist design focusing on user experience.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1pbmltYWxpc3QlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
      tags: ["React", "Tailwind CSS", "Stripe", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Portfolio Design System",
      description: "A comprehensive design system built for creative portfolios and personal branding.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
      tags: ["Design System", "TypeScript", "Storybook", "Figma"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Architectural Visualization",
      description: "3D architectural visualization project with interactive elements and immersive design.",
      image: "https://images.unsplash.com/photo-1536241351914-6f1ea31a8f52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1pbmltYWxpc3QlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
      tags: ["Three.js", "WebGL", "GSAP", "Blender"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Finance Dashboard",
      description: "Data visualization dashboard for financial analytics with real-time updates.",
      image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1pbmltYWxpc3QlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
      tags: ["React", "D3.js", "Node.js", "Express"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-black relative">
      <div className="container-custom">
        <div className="mb-16">
          <p className={`section-subtitle ${inView ? 'animate-fade-in' : 'opacity-0'}`}>My work</p>
          <h2 className={`section-title ${inView ? 'animate-slide-up' : 'opacity-0'}`}>Featured projects.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`card-glow group overflow-hidden rounded-xl ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              <div className="p-6 relative">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                <div className="flex items-center space-x-4">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Preview
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <a href="#" className="custom-button">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
