import React, { ReactNode, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ColorfulBackground from '@/components/ColorfulBackground';

interface MainLayoutProps {
  children: ReactNode;
  backgroundVariant?: 'default' | 'grid' | 'dots' | 'waves';
}

const MainLayout = ({ children, backgroundVariant = 'default' }: MainLayoutProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Add intersection observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen flex-col bg-background relative overflow-hidden">
      {/* Use our more visually striking ColorfulBackground component */}
      <ColorfulBackground />

      <Navbar />
      <main className="flex-1 relative z-[1]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
