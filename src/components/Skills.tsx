
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, Layout, Languages, LineChart, Monitor, Lightbulb } from 'lucide-react';

interface Skill {
  id: number;
  category: string;
  name: string;
  level: number;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills: Skill[] = [
    {
      id: 1,
      category: "Development",
      name: "Frontend Development",
      level: 90,
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 2,
      category: "Design",
      name: "UI/UX Design",
      level: 85,
      icon: <Palette className="w-6 h-6" />
    },
    {
      id: 3,
      category: "Development",
      name: "Backend Development",
      level: 75,
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 4,
      category: "Design",
      name: "Web Design",
      level: 95,
      icon: <Layout className="w-6 h-6" />
    },
    {
      id: 5,
      category: "Languages",
      name: "TypeScript",
      level: 85,
      icon: <Languages className="w-6 h-6" />
    },
    {
      id: 6,
      category: "Analysis",
      name: "Data Visualization",
      level: 70,
      icon: <LineChart className="w-6 h-6" />
    },
    {
      id: 7,
      category: "Development",
      name: "Responsive Design",
      level: 90,
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 8,
      category: "Design",
      name: "Creative Direction",
      level: 80,
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-black relative">
      <div className="container-custom">
        <div className="mb-16">
          <p className={`section-subtitle ${inView ? 'animate-fade-in' : 'opacity-0'}`}>My expertise</p>
          <h2 className={`section-title ${inView ? 'animate-slide-up' : 'opacity-0'}`}>Skills & capabilities.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className={`card-glow p-6 flex flex-col ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center shadow-glow-sm">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
              <p className="text-white/60 text-sm mb-4">{skill.category}</p>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/70">Proficiency</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white shadow-glow-sm rounded-full"
                    style={{ 
                      width: `${skill.level}%`,
                      transition: 'width 1s ease-in-out',
                      transitionDelay: `${0.5 + index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="card-glow p-8">
            <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Senior Frontend Developer</h4>
                  <span className="text-white/60 text-sm">2020 - Present</span>
                </div>
                <p className="text-white/70 text-sm">TechVision Inc.</p>
                <p className="text-white/60 text-sm mt-2">Led frontend development for enterprise web applications, implementing modern UI/UX practices and optimizing performance.</p>
              </div>
              
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">UI/UX Designer</h4>
                  <span className="text-white/60 text-sm">2018 - 2020</span>
                </div>
                <p className="text-white/70 text-sm">CreativeMinds Studio</p>
                <p className="text-white/60 text-sm mt-2">Created user-centered designs for digital products, conducted user research, and developed interactive prototypes.</p>
              </div>
              
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Web Developer</h4>
                  <span className="text-white/60 text-sm">2016 - 2018</span>
                </div>
                <p className="text-white/70 text-sm">DigitalSolutions LLC</p>
                <p className="text-white/60 text-sm mt-2">Developed responsive websites and progressive web applications with modern JavaScript frameworks.</p>
              </div>
            </div>
          </div>
          
          <div className="card-glow p-8">
            <h3 className="text-xl font-semibold mb-4">Education & Certifications</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">M.S. in Computer Science</h4>
                  <span className="text-white/60 text-sm">2014 - 2016</span>
                </div>
                <p className="text-white/70 text-sm">Stanford University</p>
                <p className="text-white/60 text-sm mt-2">Focused on human-computer interaction and web technologies.</p>
              </div>
              
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">B.S. in Computer Science</h4>
                  <span className="text-white/60 text-sm">2010 - 2014</span>
                </div>
                <p className="text-white/70 text-sm">MIT</p>
                <p className="text-white/60 text-sm mt-2">Dean's List, Graduated with Honors.</p>
              </div>
              
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Professional Certifications</h4>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full">AWS Solutions Architect</span>
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full">Google UX Design</span>
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full">React Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
