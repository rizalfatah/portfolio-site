import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-background text-foreground border-t py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center text-2xl font-bold">
              <span className="text-primary mr-1">&lt;</span>
              <span>Coding</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Building robust, scalable backend solutions that power the web
              applications of tomorrow.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/rizalfatah"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/rizal-saifulloh-fatah-306414154/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="mailto:rizal.fatah.rsf@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="bg-border my-8 h-px w-full"></div>

        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} RizalFatah. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {["Projects", "Experience", "Contact"].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
