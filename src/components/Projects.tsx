import React, { useState } from 'react';
import { Eye, Github, ExternalLink, X } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

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
  category: 'backend' | 'fullstack' | 'infrastructure';
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Microservices",
    description: "A scalable e-commerce platform built with microservices architecture, supporting high traffic and seamless payment processing.",
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "RabbitMQ", "Redis"],
    images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: ["Distributed transaction management", "Order processing system", "Inventory management", "Payment gateway integration", "Real-time notifications"],
    challenges: "Implementing distributed transactions across multiple services while maintaining data consistency was the biggest challenge.",
    category: "backend"
  },
  {
    id: 2,
    title: "Real-time Analytics API",
    description: "High-performance analytics API processing millions of events daily with sub-second query response times.",
    technologies: ["Go", "ClickHouse", "Kafka", "Prometheus", "Grafana", "AWS Lambda"],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"],
    githubUrl: "https://github.com",
    features: ["Event stream processing", "Time-series data analytics", "Custom query language", "Role-based access control", "Data visualization endpoints"],
    challenges: "Optimizing query performance for complex aggregations across billions of records required innovative indexing strategies.",
    category: "backend"
  },
  {
    id: 3,
    title: "Serverless CMS Platform",
    description: "Content management system built with serverless architecture for automatic scaling and cost efficiency.",
    technologies: ["AWS Lambda", "DynamoDB", "S3", "CloudFront", "API Gateway", "Node.js", "TypeScript"],
    images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: ["Content versioning", "Dynamic rendering", "Image optimization", "Markdown support", "Webhook integrations"],
    challenges: "Designing a consistent data model that works well with DynamoDB's access patterns while maintaining flexibility.",
    category: "fullstack"
  },
  {
    id: 4,
    title: "Distributed CI/CD Pipeline",
    description: "Custom continuous integration and deployment system for microservices architecture with multi-cloud support.",
    technologies: ["Rust", "Docker", "Kubernetes", "Terraform", "AWS", "GCP", "Azure"],
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"],
    githubUrl: "https://github.com",
    features: ["Multi-cloud deployment", "Infrastructure as code", "Canary deployments", "Automatic rollbacks", "Build caching"],
    challenges: "Building a consistent deployment experience across different cloud providers with their unique APIs and services.",
    category: "infrastructure"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore my recent backend development work, from microservices to serverless applications.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['all', 'backend', 'fullstack', 'infrastructure'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-foreground hover:bg-primary/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-card-hover transition-all duration-500 bg-card reveal opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="h-48 w-full bg-cover bg-center blur-load" 
                style={{ backgroundImage: `url(${project.images[0]})` }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                  onLoad={(e) => {
                    (e.target as HTMLElement).parentElement?.classList.add('loaded');
                  }}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-background text-foreground rounded-full font-medium transform transition-all hover:scale-105"
                  >
                    <Eye size={16} />
                    <span>Details</span>
                  </button>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-card text-foreground rounded-full font-medium transform transition-all hover:scale-105"
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
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full font-medium transform transition-all hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 text-primary inline-flex items-center hover:underline"
                >
                  Learn more
                  <svg className="w-3 h-3 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
