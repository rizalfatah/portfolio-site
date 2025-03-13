import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  // Define text color classes based on scroll position
  const textColorClass = isScrolled ? 'text-foreground' : 'text-white';
  const textHoverClass = isScrolled ? 'hover:text-primary' : 'hover:text-primary/90';
  const logoTextColorClass = isScrolled ? 'text-foreground' : 'text-white';
  // Add text shadow class for better visibility on dark backgrounds
  const textShadowClass = isScrolled ? '' : 'text-shadow';

  return (
    <nav ref={navbarRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'glass shadow-md backdrop-blur-md py-4' : 'bg-black/15 backdrop-blur-sm py-6'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className={`text-xl font-bold ${logoTextColorClass} ${textShadowClass} flex items-center transition-colors duration-200`}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="text-primary mr-1 drop-shadow-glow">&lt;</span>
              <span>DevName</span>
              <span className="text-primary drop-shadow-glow">/&gt;</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'projects', 'experience', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${textColorClass} ${!isScrolled && 'font-medium'} ${textShadowClass} ${textHoverClass} transition-colors duration-200 link-underline capitalize`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              className={`${textColorClass} ${textShadowClass} focus:outline-none transition-colors duration-200`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed inset-x-0 bottom-0 glass-dark z-40 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ 
            top: navbarRef.current ? navbarRef.current.clientHeight + 'px' : '80px',
            height: `calc(100vh - ${navbarRef.current ? navbarRef.current.clientHeight : 80}px)`
          }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
            {['about', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-primary text-2xl transition-colors duration-200 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
