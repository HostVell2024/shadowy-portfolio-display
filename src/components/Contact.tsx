
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from "sonner";

const Contact: React.FC = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-24 bg-black relative"
    >
      <div className="container-custom">
        <div className="mb-16">
          <p className={`section-subtitle ${inView ? 'animate-fade-in' : 'opacity-0'}`}>Get in touch</p>
          <h2 className={`section-title ${inView ? 'animate-slide-up' : 'opacity-0'}`}>Let's work together.</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className={`lg:col-span-2 ${inView ? 'animate-slide-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <p className="text-white/70 mb-8">
              Ready to start your next project? Have a question about my services? 
              Feel free to reach out and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:shadow-glow transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <p className="font-medium group-hover:text-white transition-colors duration-300">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className={`lg:col-span-3 ${inView ? 'animate-slide-left' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="card-glow p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/70 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:shadow-glow-sm transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:shadow-glow-sm transition-all duration-300"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white/70 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:shadow-glow-sm transition-all duration-300"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:shadow-glow-sm transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="custom-button flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
