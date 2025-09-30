import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  ArrowDown,
  Code,
  Database,
  Server,
  MapPin,
  Calendar,
  Coffee,
  Github,
  Linkedin,
  Mail,
  Star,
} from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(
    () => [
      "IT Manager",
      "Full-Stack Developer",
      "Infrastructure Specialist",
      "DevOps Engineer",
    ],
    []
  );

  const stats = [
    { label: "Years Experience", value: "6+", icon: Calendar },
    { label: "Projects Completed", value: "10+", icon: Code },
    { label: "Team Members Led", value: 5, icon: Star },
    { label: "Coffee Consumed", value: "2190++", icon: Coffee },
  ];

  // Typing animation effect
  useEffect(() => {
    const currentText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentRole(prev => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const moveX = ((clientX - innerWidth / 2) / innerWidth) * 20;
      const moveY = ((clientY - innerHeight / 2) / innerHeight) * 20;

      const elements = heroRef.current.querySelectorAll(".parallax");
      elements.forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        const speed = Number(htmlEl.dataset.speed) || (index + 1) * 0.5;
        htmlEl.style.transform = `translate(${moveX * speed}px, ${
          moveY * speed
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-background pb-10 pt-24 text-foreground md:pt-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 via-background to-background"></div>
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30"></div>

      {/* Animated Floating Elements */}
      <div
        className="parallax absolute left-1/4 top-1/4 text-primary/30 will-change-transform"
        data-speed="1"
      >
        <Database
          size={120}
          className="animate-float"
          style={{ animationDelay: "0s" }}
        />
      </div>
      <div
        className="parallax absolute bottom-1/4 right-1/4 text-accent/30 will-change-transform"
        data-speed="1.5"
      >
        <Server
          size={140}
          className="animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>
      <div
        className="parallax absolute right-1/3 top-1/3 text-primary/30 will-change-transform"
        data-speed="2"
      >
        <Code
          size={160}
          className="animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container z-10 mx-auto px-6 lg:px-8">
        {/* Personal Info Card */}
        <div className="mx-auto max-w-4xl">
          {/* Header with Avatar and Basic Info */}
          <div className="mb-12 text-center">
            <div
              className="animate-slide-down"
              style={{ animationDelay: "200ms" }}
            >
              <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-background">
                  <img
                    src="/me.webp"
                    alt="Rizal Saifulloh Fatah"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              className="animate-slide-down"
              style={{ animationDelay: "300ms" }}
            >
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Rizal Saifulloh Fatah
              </h1>
              <div className="mb-4 flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Sukoharjo, Indonesia</span>
                <span className="ml-2 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                <span className="text-green-500">Available for work</span>
              </div>
            </div>

            <div
              className="animate-slide-down"
              style={{ animationDelay: "400ms" }}
            >
              <div className="mb-6 flex h-12 items-center justify-center text-2xl font-semibold md:text-3xl">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p
              className="mx-auto mb-8 max-w-2xl animate-slide-down text-lg text-muted-foreground"
              style={{ animationDelay: "500ms" }}
            >
              IT Manager and Full-Stack Developer with 6+ years of experience in
              managing IT infrastructure, server virtualization, and web
              application development. Specialized in containerization,
              automation systems, and leading technical teams to deliver
              efficient solutions.
            </p>
          </div>

          {/* Stats Grid */}
          <div
            className="mb-12 flex animate-slide-down flex-wrap justify-center gap-6"
            style={{ animationDelay: "600ms" }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="min-w-[150px] max-w-[300px] flex-1 rounded-lg border border-border bg-card/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-card/70"
                >
                  <Icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <div className="mb-1 text-2xl font-bold text-foreground">
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div
            className="mb-8 flex animate-slide-down flex-col items-center justify-center gap-8 sm:flex-row"
            style={{ animationDelay: "700ms" }}
          >
            <div className="group relative">
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative flex transform items-center gap-3 border-4 border-gray-900 bg-yellow-400 px-8 py-4 text-lg font-black uppercase tracking-wide text-black transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-0 active:translate-y-0 dark:border-white"
              >
                <Mail size={20} className="font-bold" />
                Get in Touch
              </button>
              <div className="absolute left-1 top-1 -z-10 h-full w-full bg-gray-900 dark:bg-white"></div>
              <div className="absolute -bottom-2 left-0 h-1 w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></div>
            </div>

            <div className="group relative">
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative flex transform items-center gap-3 border-4 border-gray-900 bg-cyan-400 px-8 py-4 text-lg font-black uppercase tracking-wide text-black transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-0 active:translate-y-0 dark:border-white"
              >
                <Code size={20} className="font-bold" />
                View Projects
              </button>
              <div className="absolute left-1 top-1 -z-10 h-full w-full bg-gray-900 dark:bg-white"></div>
              <div className="absolute -bottom-2 left-0 h-1 w-0 bg-fuchsia-500 transition-all duration-300 ease-out group-hover:w-full"></div>
            </div>
          </div>

          {/* Social Links */}
          <div
            className="flex animate-slide-down items-center justify-center gap-6"
            style={{ animationDelay: "800ms" }}
          >
            <a
              href="https://github.com/rizalfatah"
              className="group rounded-full border border-border bg-card/50 p-3 transition-all duration-300 hover:scale-110 hover:bg-card/70"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/rizal-saifulloh-fatah-306414154/"
              className="group rounded-full border border-border bg-card/50 p-3 transition-all duration-300 hover:scale-110 hover:bg-card/70"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            </a>
            <a
              href="mailto:rizal.fatah.rsf@gmail.com"
              className="group rounded-full border border-border bg-card/50 p-3 transition-all duration-300 hover:scale-110 hover:bg-card/70"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
