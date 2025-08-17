import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground border-t border-border py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold flex items-center">
              <span className="text-primary mr-1">&lt;</span>
              <span>RizalFatah</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="mt-2 text-muted-foreground max-w-md">
              Building robust, scalable backend solutions that power
              the web applications of tomorrow.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-border my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} DevName. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
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
