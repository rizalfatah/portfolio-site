"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/lib/theme-provider";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const navbarRef = useRef<HTMLDivElement>(null);

  // Determine if current theme is dark
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      if (theme === "dark") {
        setIsDark(true);
      } else if (theme === "light") {
        setIsDark(false);
      } else {
        // system theme
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    };

    updateTheme();

    // Listen for system theme changes when using system theme
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => updateTheme();
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  // Define text color classes based on scroll position and theme with smooth transitions
  const textColorClass = isScrolled
    ? "text-foreground"
    : isDark
      ? "text-white"
      : "text-foreground";
  const textHoverClass = isScrolled
    ? "hover:text-primary hover:drop-shadow-sm"
    : isDark
      ? "hover:text-primary/90 hover:drop-shadow-glow"
      : "hover:text-primary hover:drop-shadow-sm";
  const logoTextColorClass = isScrolled
    ? "text-foreground"
    : isDark
      ? "text-white"
      : "text-foreground";
  // Add text shadow class for better visibility - only on dark backgrounds
  const textShadowClass = isScrolled
    ? ""
    : isDark
      ? "text-shadow drop-shadow-sm"
      : "";

  return (
    <nav
      ref={navbarRef}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "border-b border-border/50 bg-background/80 py-4 shadow-lg backdrop-blur-md"
          : "bg-gradient-to-b from-background/10 via-background/5 to-transparent py-6 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className={`text-xl font-bold ${logoTextColorClass} ${textShadowClass} flex items-center transition-all duration-300 hover:scale-105`}
              onClick={e => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span
                className={`mr-1 transition-all duration-300 ${
                  isScrolled
                    ? "text-primary"
                    : isDark
                      ? "drop-shadow-glow text-accent"
                      : "text-primary"
                }`}
              >
                &lt;
              </span>
              <span className="transition-all duration-300">Coding</span>
              <span
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-primary"
                    : isDark
                      ? "drop-shadow-glow text-accent"
                      : "text-primary"
                }`}
              >
                /&gt;
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {["projects", "experience", "contact"].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${textColorClass} ${
                  !isScrolled && "font-medium"
                } ${textShadowClass} ${textHoverClass} link-underline capitalize transition-colors duration-200`}
              >
                {item}
              </button>
            ))}
            <ThemeToggle className={textColorClass} />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle className={textColorClass} />
            <button
              className={`${textColorClass} ${textShadowClass} transition-colors duration-200 focus:outline-none`}
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
          className={`fixed inset-x-0 bottom-0 z-40 transform transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-y-0" : "translate-y-full"
          } border-t border-border/30 bg-gradient-to-b from-background/95 via-background/90 to-background/95 backdrop-blur-xl`}
          style={{
            top: navbarRef.current
              ? navbarRef.current.clientHeight + "px"
              : "80px",
            height: `calc(100vh - ${
              navbarRef.current ? navbarRef.current.clientHeight : 80
            }px)`,
          }}
        >
          <div className="flex h-full flex-col items-center justify-center space-y-8 p-4">
            {["projects", "experience", "contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:drop-shadow-glow transform text-2xl font-medium capitalize text-foreground transition-all duration-300 hover:scale-110 hover:text-primary"
                style={{ animationDelay: `${index * 50}ms` }}
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
