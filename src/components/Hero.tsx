import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code, Database, Server } from 'lucide-react';
import { useTheme } from '@/lib/theme-provider';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / innerWidth * 20;
      const moveY = (clientY - innerHeight / 2) / innerHeight * 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        const speed = Number(htmlEl.dataset.speed) || (index + 1) * 0.5;
        htmlEl.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-black to-black z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
      
      {/* Animated Floating Elements */}
      <div className="parallax absolute top-1/4 left-1/4 text-primary/30 will-change-transform" data-speed="1">
        <Database size={120} className="animate-float" style={{ animationDelay: '0s' }} />
      </div>
      <div className="parallax absolute bottom-1/4 right-1/4 text-accent/30 will-change-transform" data-speed="1.5">
        <Server size={140} className="animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="parallax absolute top-1/3 right-1/3 text-primary/30 will-change-transform" data-speed="2">
        <Code size={160} className="animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 z-10 text-center">
        <div className="animate-slide-down" style={{ animationDelay: '300ms' }}>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/20 text-primary mb-4">
            Backend Developer
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-down" style={{ animationDelay: '500ms' }}>
          Crafting Powerful<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Backend Solutions
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8 animate-slide-down" style={{ animationDelay: '700ms' }}>
          Specialized in building robust, scalable, and high-performance backend systems
          that power modern applications.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-down" style={{ animationDelay: '900ms' }}>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-md bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </button>
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm border border-white/10"
          >
            View Projects
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </button>
      </div>
      
      {/* About section anchor */}
      <div id="about" className="absolute bottom-0"></div>
    </div>
  );
};

export default Hero;
