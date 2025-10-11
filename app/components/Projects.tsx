"use client";

import React, { useState } from "react";
import { Eye, Github, ExternalLink, X } from "lucide-react";
import ProjectDetail from "./ProjectDetail";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  challenges: string;
  category: "backend" | "fullstack" | "infrastructure";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Automated Parking System",
    description:
      "Smart parking management system that significantly increased operational efficiency and reduced labor costs through automation and real-time monitoring.",
    technologies: [
      "Laravel",
      "PHP",
      "MariaDB",
      "Docker",
      "React.js",
      "Node.js",
      "Zabbix",
    ],
    images: [
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    githubUrl: "https://github.com",
    features: [
      "Real-time vehicle detection",
      "Automated billing system",
      "Occupancy monitoring",
      "Revenue analytics",
      "Mobile notifications",
    ],
    challenges:
      "Integrating hardware sensors with software systems while ensuring 99.9% uptime and accurate billing was the main challenge.",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Containerized Infrastructure Platform",
    description:
      "On-premise server infrastructure built with containerization technologies, saving significant costs on external cloud subscriptions.",
    technologies: [
      "Docker",
      "LXC",
      "Proxmox",
      "Synology NAS",
      "Zabbix",
      "MariaDB",
      "Linux",
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    githubUrl: "https://github.com",
    features: [
      "Container orchestration",
      "Automated backups",
      "Resource monitoring",
      "High availability setup",
      "Cost optimization",
    ],
    challenges:
      "Designing a scalable container architecture that could handle varying workloads while maintaining data integrity and security.",
    category: "infrastructure",
  },
  {
    id: 3,
    title: "Billing & Financial Reporting System",
    description:
      "Comprehensive billing and financial reporting system developed during pandemic to improve efficiency and increase sales revenue.",
    technologies: [
      "Laravel",
      "PHP",
      "MariaDB",
      "React.js",
      "Chart.js",
      "Docker",
      "Git",
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    githubUrl: "https://github.com",
    features: [
      "Automated invoicing",
      "Financial analytics",
      "Multi-outlet support",
      "Real-time reporting",
      "Payment tracking",
    ],
    challenges:
      "Creating a flexible billing system that could adapt to different business models while ensuring accurate financial calculations.",
    category: "fullstack",
  },
  {
    id: 4,
    title: "CI/CD Deployment Pipeline",
    description:
      "Efficient continuous integration and deployment pipeline for web applications, streamlining the development workflow and reducing deployment time.",
    technologies: [
      "Docker",
      "Git",
      "GitHub",
      "Laravel",
      "Node.js",
      "Proxmox",
      "Linux",
    ],
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    githubUrl: "https://github.com",
    features: [
      "Automated testing",
      "Zero-downtime deployment",
      "Environment management",
      "Rollback capabilities",
      "Build notifications",
    ],
    challenges:
      "Implementing a reliable deployment process that could handle multiple applications while maintaining consistency across environments.",
    category: "infrastructure",
  },
  {
    id: 5,
    title: "Multimedia Logging Software",
    description:
      "Custom logging software for multimedia team that significantly reduced work time and improved content management productivity.",
    technologies: [
      "Laravel",
      "PHP",
      "MariaDB",
      "React.js",
      "Docker",
      "File Management API",
    ],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    githubUrl: "https://github.com",
    features: [
      "Activity tracking",
      "File management",
      "Progress monitoring",
      "Team collaboration",
      "Automated reports",
    ],
    challenges:
      "Creating an intuitive interface that could handle complex multimedia workflows while providing detailed tracking and reporting.",
    category: "fullstack",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="bg-secondary/30 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="reveal mb-16 text-center opacity-0">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore my recent backend development work, from microservices to
            serverless applications.
          </p>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["all", "backend", "fullstack", "infrastructure"].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="reveal group relative overflow-hidden rounded-lg bg-card opacity-0 shadow-card transition-all duration-500 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="blur-load h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.images[0]})` }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                  onLoad={e => {
                    (e.target as HTMLElement).parentElement?.classList.add(
                      "loaded"
                    );
                  }}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex transform items-center gap-2 rounded-full bg-background px-4 py-2 font-medium text-foreground transition-all hover:scale-105"
                  >
                    <Eye size={16} />
                    <span>Details</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex transform items-center gap-2 rounded-full bg-card px-4 py-2 font-medium text-foreground transition-all hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex transform items-center gap-2 rounded-full bg-primary px-4 py-2 font-medium text-white transition-all hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-secondary px-2 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="line-clamp-2 text-muted-foreground">
                  {project.description}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 inline-flex items-center text-primary hover:underline"
                >
                  Learn more
                  <svg
                    className="ml-1 h-3 w-3 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
