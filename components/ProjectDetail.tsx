"use client";

import React, { useEffect, useState } from "react";
import { X, ArrowLeft, ArrowRight, User, Users } from "lucide-react";
import type { Project } from "./Projects";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      prev => (prev - 1 + project.images.length) % project.images.length
    );
  };

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project.images.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm">
      <div className="absolute inset-0 z-0" onClick={onClose}></div>

      <div className="relative top-20 z-10 w-full max-w-4xl animate-scale-in overflow-hidden rounded-lg bg-card shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <X size={20} />
        </button>

        {/* Image gallery */}
        <div className="relative h-72 overflow-hidden bg-secondary/50 md:h-96">
          {project.images.length > 0 && (
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="h-full w-full object-contain"
            />
          )}

          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <ArrowRight size={20} />
              </button>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      idx === currentImageIndex ? "bg-white" : "bg-white/40"
                    }`}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-4 flex items-center gap-3">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                project.teamType === "individual"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              }`}
            >
              {project.teamType === "individual" ? (
                <>
                  <User size={14} /> Solo Project
                </>
              ) : (
                <>
                  <Users size={14} /> Team Project
                </>
              )}
            </span>
          </div>

          <p className="mb-6 text-muted-foreground">{project.description}</p>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-secondary px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold">Key Features</h4>
            <ul className="list-disc space-y-1 pl-5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold">Challenges</h4>
            <p className="text-muted-foreground">{project.challenges}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#24292e] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[#24292e]/90"
              >
                View on GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-6 py-2.5 font-medium text-white transition-colors hover:bg-primary/90"
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
