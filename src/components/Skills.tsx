
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, Layout, Languages, LineChart, Monitor, Lightbulb, ArrowRight, ArrowLeft } from 'lucide-react';
import { Progress } from './ui/progress';
import { Button } from './ui/button';

interface Skill {
  id: number;
  category: string;
  name: string;
  level: number;
  icon: React.ReactNode;
  description?: string;
}

const Skills: React.FC = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // State for animated percentages
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: number]: number }>({});
  
  // State to track which cards are being hovered
  const [hoveredCards, setHoveredCards] = useState<{ [key: number]: boolean }>({});
  
  // Toggle card hover state
  const toggleCardHover = (id: number) => {
    setHoveredCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Animation for percentages when section comes into view
  useEffect(() => {
    if (inView) {
      const timers: NodeJS.Timeout[] = [];
      
      skills.forEach((skill) => {
        let startValue = 0;
        const increment = Math.ceil(skill.level / 30); // Distribute over 30 steps
        
        const timer = setInterval(() => {
          startValue += increment;
          if (startValue >= skill.level) {
            startValue = skill.level;
            clearInterval(timer);
          }
          
          setAnimatedLevels(prev => ({
            ...prev,
            [skill.id]: startValue
          }));
        }, 50);
        
        timers.push(timer);
      });
      
      return () => {
        timers.forEach(timer => clearInterval(timer));
      };
    }
  }, [inView]);

  const skills: Skill[] = [
    {
      id: 1,
      category: "Development",
      name: "Frontend Development",
      level: 90,
      icon: <Code className="w-6 h-6" />,
      description: "Specialized in creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks."
    },
    {
      id: 2,
      category: "Design",
      name: "UI/UX Design",
      level: 85,
      icon: <Palette className="w-6 h-6" />,
      description: "Creating intuitive, aesthetically pleasing designs that enhance user experience and engagement."
    },
    {
      id: 3,
      category: "Development",
      name: "Backend Development",
      level: 75,
      icon: <Database className="w-6 h-6" />,
      description: "Developing robust server-side applications using Node.js, Express, and various database systems."
    },
    {
      id: 4,
      category: "Design",
      name: "Web Design",
      level: 95,
      icon: <Layout className="w-6 h-6" />,
      description: "Crafting beautiful, functional web layouts with a focus on accessibility and cross-browser compatibility."
    },
    {
      id: 5,
      category: "Languages",
      name: "TypeScript",
      level: 85,
      icon: <Languages className="w-6 h-6" />,
      description: "Expert in TypeScript, leveraging strong typing for more robust and maintainable code."
    },
    {
      id: 6,
      category: "Analysis",
      name: "Data Visualization",
      level: 70,
      icon: <LineChart className="w-6 h-6" />,
      description: "Transforming complex data into clear, insightful visual representations using D3.js and Recharts."
    },
    {
      id: 7,
      category: "Development",
      name: "Responsive Design",
      level: 90,
      icon: <Monitor className="w-6 h-6" />,
      description: "Ensuring applications work flawlessly across all device sizes from mobile to desktop."
    },
    {
      id: 8,
      category: "Design",
      name: "Creative Direction",
      level: 80,
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Guiding design vision and strategy to create cohesive, innovative digital experiences."
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
              className={`p-6 flex flex-col transition-all duration-500 ${inView ? 'animate-fade-in' : 'opacity-0'} 
                ${hoveredCards[skill.id] 
                  ? 'bg-white text-black shadow-glow-xl border border-white/50' 
                  : 'card-glow bg-black text-white hover:shadow-glow-lg border border-white/10'}
              `}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`mb-4 w-12 h-12 rounded-lg flex items-center justify-center ${hoveredCards[skill.id] ? 'bg-black/10 shadow-glow-sm' : 'bg-white/5 shadow-glow-sm'}`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
              <p className={`text-sm mb-4 ${hoveredCards[skill.id] ? 'text-black/60' : 'text-white/60'}`}>{skill.category}</p>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm ${hoveredCards[skill.id] ? 'text-black/70' : 'text-white/70'}`}>Proficiency</span>
                  <span className="text-sm font-medium">
                    {animatedLevels[skill.id] !== undefined ? `${animatedLevels[skill.id]}%` : '0%'}
                  </span>
                </div>
                <Progress 
                  value={animatedLevels[skill.id] || 0} 
                  className={`h-1.5 ${hoveredCards[skill.id] ? 'bg-black/10' : 'bg-white/10'} shadow-glow-sm`}
                />
              </div>
              
              {/* Add description text above the button */}
              <div className="mt-4 mb-2">
                {hoveredCards[skill.id] && (
                  <p className={`text-sm ${hoveredCards[skill.id] ? 'text-black/80' : 'text-white/80'} animate-fade-in`}>
                    {skill.description}
                  </p>
                )}
              </div>
              
              <div className="mt-auto pt-2">
                <Button 
                  variant="ghost"
                  size="sm"
                  className={`w-full mt-2 ${hoveredCards[skill.id] ? 'text-black hover:bg-black/10' : 'text-white hover:bg-white/10'}`}
                  onClick={() => toggleCardHover(skill.id)}
                >
                  {hoveredCards[skill.id] ? (
                    <>Kembali <ArrowLeft className="ml-1 h-4 w-4" /></>
                  ) : (
                    <>Selengkapnya <ArrowRight className="ml-1 h-4 w-4" /></>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="card-glow p-8 hover:shadow-glow-md transition-all duration-500">
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
          
          <div className="card-glow p-8 hover:shadow-glow-md transition-all duration-500">
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
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">AWS Solutions Architect</span>
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">Google UX Design</span>
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">React Advanced</span>
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
