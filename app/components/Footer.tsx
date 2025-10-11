import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 text-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center text-2xl font-bold">
              <span className="mr-1 text-primary">&lt;</span>
              <span>Coding</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="mt-2 max-w-md text-muted-foreground">
              Building robust, scalable backend solutions that power the web
              applications of tomorrow.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-border"></div>

        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} RizalFatah. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {["Projects", "Experience", "Contact"].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
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
