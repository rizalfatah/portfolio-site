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
        setCurrentRole((prev) => (prev + 1) % roles.length);
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
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-background text-foreground pt-24 md:pt-24 pb-10"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>

      {/* Animated Floating Elements */}
      <div
        className="parallax absolute top-1/4 left-1/4 text-primary/30 will-change-transform"
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
        className="parallax absolute top-1/3 right-1/3 text-primary/30 will-change-transform"
        data-speed="2"
      >
        <Code
          size={160}
          className="animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 z-10">
        {/* Personal Info Card */}
        <div className="max-w-4xl mx-auto">
          {/* Header with Avatar and Basic Info */}
          <div className="text-center mb-12">
            <div
              className="animate-slide-down"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img
                    src="/me.webp"
                    alt="Rizal Saifulloh Fatah"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            <div
              className="animate-slide-down"
              style={{ animationDelay: "300ms" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Rizal Saifulloh Fatah
              </h1>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <MapPin size={16} />
                <span>Sukoharjo, Indonesia</span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></span>
                <span className="text-green-500">Available for work</span>
              </div>
            </div>

            <div
              className="animate-slide-down"
              style={{ animationDelay: "400ms" }}
            >
              <div className="text-2xl md:text-3xl font-semibold mb-6 h-12 flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p
              className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8 animate-slide-down"
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
            className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-down"
            style={{ animationDelay: "600ms" }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:bg-card/70 transition-all duration-300 hover:scale-105 flex-1 min-w-[150px] max-w-[300px]"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-1">
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
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8 animate-slide-down"
            style={{ animationDelay: "700ms" }}
          >
            <div className="relative group">
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative px-8 py-4 bg-yellow-400 text-black font-black text-lg border-4 border-gray-900 dark:border-white transition-all duration-200 transform hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-0 active:translate-y-0 flex items-center gap-3 uppercase tracking-wide"
              >
                <Mail size={20} className="font-bold" />
                Get in Touch
              </button>
              <div className="absolute top-1 left-1 w-full h-full bg-gray-900 dark:bg-white -z-10"></div>
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>

            <div className="relative group">
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative px-8 py-4 bg-cyan-400 text-black font-black text-lg border-4 border-gray-900 dark:border-white transition-all duration-200 transform hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-0 active:translate-y-0 flex items-center gap-3 uppercase tracking-wide"
              >
                <Code size={20} className="font-bold" />
                View Projects
              </button>
              <div className="absolute top-1 left-1 w-full h-full bg-gray-900 dark:bg-white -z-10"></div>
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-fuchsia-500 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 animate-slide-down"
            style={{ animationDelay: "800ms" }}
          >
            <a
              href="https://github.com/rizalfatah"
              className="p-3 rounded-full bg-card/50 hover:bg-card/70 border border-border transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/rizal-saifulloh-fatah-306414154/"
              className="p-3 rounded-full bg-card/50 hover:bg-card/70 border border-border transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
            </a>
            <a
              href="mailto:rizal.fatah.rsf@gmail.com"
              className="p-3 rounded-full bg-card/50 hover:bg-card/70 border border-border transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
