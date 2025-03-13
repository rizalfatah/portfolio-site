
import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Project } from './Projects';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="absolute inset-0 z-0"
        onClick={onClose}
      ></div>
      
      <div className="relative z-10 bg-card max-w-4xl w-full rounded-lg shadow-lg animate-scale-in overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X size={20} />
        </button>
        
        {/* Image gallery */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-black">
          {project.images.length > 0 && (
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-cover object-top"
            />
          )}
          
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ArrowRight size={20} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      idx === currentImageIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          
          <p className="text-muted-foreground mb-6">{project.description}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-secondary text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Key Features</h4>
            <ul className="list-disc pl-5 space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-muted-foreground">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Challenges</h4>
            <p className="text-muted-foreground">{project.challenges}</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#24292e] text-white rounded-md font-medium hover:bg-[#24292e]/90 transition-colors"
              >
                View on GitHub
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
