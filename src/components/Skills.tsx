
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, Layout, Languages, LineChart, Monitor, Lightbulb, ArrowRight, ArrowLeft, Camera, Gamepad } from 'lucide-react';
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
  
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: number]: number }>({});
  const [hoveredCards, setHoveredCards] = useState<{ [key: number]: boolean }>({});

  const toggleCardHover = (id: number) => {
    setHoveredCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    if (inView) {
      const timers: NodeJS.Timeout[] = [];
      
      skills.forEach((skill) => {
        let startValue = 0;
        const increment = Math.ceil(skill.level / 30);
        
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
      name: "HTML",
      level: 89,
      icon: <Code className="w-6 h-6" />,
      description: "Strong foundation in HTML5, semantic markup, and accessibility best practices."
    },
    {
      id: 2,
      category: "Development",
      name: "CSS",
      level: 87,
      icon: <Palette className="w-6 h-6" />,
      description: "Proficient in CSS3, animations, responsive design, and modern layout techniques."
    },
    {
      id: 3,
      category: "Development",
      name: "JavaScript",
      level: 57,
      icon: <Languages className="w-6 h-6" />,
      description: "Working knowledge of JavaScript fundamentals, DOM manipulation, and basic frameworks."
    },
    {
      id: 4,
      category: "Creative",
      name: "Editing",
      level: 98,
      icon: <Layout className="w-6 h-6" />,
      description: "Expert in photo and video editing with an eye for detail and artistic composition."
    },
    {
      id: 5,
      category: "Technical",
      name: "Coding",
      level: 97,
      icon: <Code className="w-6 h-6" />,
      description: "Advanced problem-solving skills and strong understanding of programming concepts."
    },
    {
      id: 6,
      category: "Entertainment",
      name: "Gaming",
      level: 78,
      icon: <Gamepad className="w-6 h-6" />,
      description: "Experienced gamer with strategic thinking and quick reflexes."
    },
    {
      id: 7,
      category: "Creative",
      name: "Photography",
      level: 85,
      icon: <Camera className="w-6 h-6" />,
      description: "Skilled in composition, lighting, and capturing meaningful moments."
    },
    {
      id: 8,
      category: "Design",
      name: "UI/UX Design",
      level: 75,
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Creating intuitive user interfaces with focus on user experience and visual appeal."
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
              className={`p-6 flex flex-col transition-all duration-500 transform ${inView ? 'animate-fade-in' : 'opacity-0'} 
                ${hoveredCards[skill.id] 
                  ? 'bg-white text-black shadow-glow-xl border border-white/50 scale-105' 
                  : 'card-glow bg-black text-white hover:shadow-glow-lg border border-white/10 hover:scale-105'}
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
                  indicatorClassName={hoveredCards[skill.id] ? 'bg-black' : 'bg-white'}
                />
              </div>
              
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
          <div className="card-glow p-8 hover:shadow-glow-md transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Professional Interests</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Web Development</h4>
                </div>
                <p className="text-white/60 text-sm mt-2">Creating responsive and interactive web applications using modern technologies.</p>
              </div>
              
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Digital Content Creation</h4>
                </div>
                <p className="text-white/60 text-sm mt-2">Producing engaging visual and interactive content for digital platforms.</p>
              </div>
              
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Photography</h4>
                </div>
                <p className="text-white/60 text-sm mt-2">Capturing moments and creating visual stories through the lens.</p>
              </div>
            </div>
          </div>
          
          <div className="card-glow p-8 hover:shadow-glow-md transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Development Tools</h4>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">Visual Studio Code</span>
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">Git</span>
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">Chrome DevTools</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Creative Software</h4>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">Adobe Photoshop</span>
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">Adobe Premiere Pro</span>
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">Lightroom</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Gaming Platforms</h4>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">PC</span>
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">PlayStation</span>
                  <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full shadow-glow-sm">Mobile</span>
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
