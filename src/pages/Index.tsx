
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    document.title = 'DevName | Backend Developer';
  }, []);

  return (
    <MainLayout>
      <Hero />
      <div className="py-10 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal opacity-0">
            <h2 className="section-title">About Me</h2>
            <p className="mt-8 text-lg text-muted-foreground">
              I'm a backend developer with over 6 years of experience building robust and scalable systems.
              My expertise includes designing microservices architectures, optimizing database performance,
              and implementing secure API solutions.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              I specialize in Node.js, Python, and Go, with extensive experience in cloud platforms like AWS and GCP.
              My focus is on creating efficient, maintainable backend systems that power exceptional user experiences.
            </p>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">40+</div>
                <div className="text-sm text-muted-foreground mt-2">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-2">Tech Stack</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground mt-2">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Experience />
      <Contact />
    </MainLayout>
  );
};

export default Index;
