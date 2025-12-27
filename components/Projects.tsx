"use client";

import React, { useState, useEffect } from "react";
import { Eye, Github, ExternalLink, User, Users } from "lucide-react";
import ProjectDetail from "./ProjectDetail";
import ImageCarousel from "./ImageCarousel";

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
  teamType: "individual" | "team";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Automated Parking System",
    description:
      "Smart parking management system that significantly increased operational efficiency and reduced labor costs through automation and real-time monitoring.",
    technologies: [
      "Node.Js",
      "ExpressJs",
      "Prisma",
      "MariaDB",
      "React.js",
      "Arduino",
    ],
    images: [
      "/moc_park/app1.webp",
      "/moc_park/ticket.webp",
      "/moc_park/app2.webp",
      "/moc_park/app3.webp",
      "/moc_park/login1.webp",
      "/moc_park/login2.webp",
      "/moc_park/scan.webp",
    ],
    features: [
      "Occupancy monitoring",
      "Revenue analytics",
      "Centralized payment at cashier",
    ],
    challenges:
      "Integrating hardware sensors with software systems while ensuring 99.9% uptime and accurate billing was the main challenge.",
    category: "fullstack",
    teamType: "individual",
  },
  {
    id: 2,
    title: "Containerized Infrastructure Platform",
    description:
      "On-premise server infrastructure built with containerization technologies, saving significant costs on external cloud subscriptions.",
    technologies: [
      "Proxmox",
      "LXC",
      "Docker",
      "Zabbix",
      "Linux",
      "Synology NAS",
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
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
    teamType: "individual",
  },
  {
    id: 3,
    title: "Supervoucher",
    description:
      "Voucher management system for Mikrotik hotspot that generates internet access vouchers, including meeting room vouchers delivered automatically via WhatsApp gateway.",
    technologies: ["PHP", "Laravel", "Mikrotik", "WhatsApp Gateway"],
    images: ["/supervoucher/app1.webp", "/supervoucher/app2.webp"],
    features: [
      "Mikrotik hotspot voucher generation",
      "Meeting room voucher management",
      "Automatic voucher delivery via WhatsApp",
      "Voucher usage and expiry control",
    ],
    challenges:
      "Integrating Laravel with Mikrotik API and WhatsApp gateway while ensuring reliable voucher generation and delivery for meeting room users.",
    category: "fullstack",
    teamType: "individual",
  },

  {
    id: 4,
    title: "Filosgy",
    description:
      "Log management system for Synology Samba that provides log monitoring and directory/file listing capabilities across the Samba network.",
    technologies: ["Python", "Streamlit", "Flask"],
    images: ["/filosgy/app1.webp", "/filosgy/app2.webp", "/filosgy/app3.webp"],
    features: [
      "Synology Samba log management",
      "Directory listing in Samba network",
      "File listing and browsing",
      "Log monitoring and analysis",
    ],
    challenges:
      "Integrating Python with Synology Samba API to efficiently parse logs and retrieve directory/file structures across the network.",
    category: "fullstack",
    teamType: "individual",
  },

  {
    id: 5,
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
    teamType: "individual",
  },

  {
    id: 6,
    title: "Portal",
    description:
      "Main web application for comprehensive business management, handling business reports, messaging, and various operational tasks in a unified platform.",
    technologies: ["PHP", "Bootstrap", "jQuery", "MariaDB"],
    images: ["/portal/app1.webp", "/portal/app2.webp", "/portal/app3.webp"],
    features: [
      "Business report management",
      "Messaging system",
      "Task management",
      "Operational dashboard",
      "User management",
    ],
    challenges:
      "Building a scalable and modular platform that integrates multiple business functions while maintaining performance and user experience.",
    category: "fullstack",
    teamType: "team",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  // Re-setup reveal animations when filtered projects change
  useEffect(() => {
    const projectCards = document.querySelectorAll("#projects .reveal");

    const revealOnScroll = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealOnScroll, {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    });

    projectCards.forEach(element => {
      // Remove the revealed class first to reset the animation
      element.classList.remove("revealed");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="scroll-mt-20 bg-secondary/30 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="reveal mb-16 text-center opacity-0">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore my recent work across backend, frontend, infrastructure, and
            networking projects.
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
              <div className="relative">
                <ImageCarousel images={project.images} alt={project.title} />

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

                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                      project.teamType === "individual"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                  >
                    {project.teamType === "individual" ? (
                      <>
                        <User size={12} /> Solo
                      </>
                    ) : (
                      <>
                        <Users size={12} /> Team
                      </>
                    )}
                  </span>
                </div>
                <p className="line-clamp-2 text-muted-foreground">
                  {project.description}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 inline-flex items-center text-primary hover:underline"
                >
                  Details
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
