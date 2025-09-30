import React from "react";

interface BackgroundElementsProps {
  variant?: "default" | "grid" | "dots" | "waves";
  className?: string;
}

export const BackgroundElements = ({
  variant = "default",
  className = "",
}: BackgroundElementsProps) => {
  // Shared styles for the background container
  const containerClasses = `fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`;

  switch (variant) {
    case "grid":
      return (
        <div className={containerClasses}>
          <div className="absolute inset-0 -z-10 bg-grid-pattern" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-primary/40 opacity-40 blur-[100px]" />
          <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-accent/40 opacity-40 blur-[100px]" />
          <div className="absolute left-0 top-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-primary/50 opacity-40 blur-[100px]" />
        </div>
      );

    case "dots":
      return (
        <div className={containerClasses}>
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dots-pattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" className="fill-primary/20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
          <div className="absolute left-1/3 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-primary/30 opacity-40 blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-accent/30 opacity-40 blur-[80px]" />
        </div>
      );

    case "waves":
      return (
        <div className={containerClasses}>
          <svg
            className="absolute inset-0 h-full w-full opacity-40"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,1000 C150,900 350,800 500,800 C650,800 850,900 1000,1000 L1000,1000 L0,1000 Z"
              className="fill-primary/50"
            />
            <path
              d="M0,1000 C150,700 350,600 500,600 C650,600 850,700 1000,1000 L1000,1000 L0,1000 Z"
              className="fill-accent/30"
            />
          </svg>
          <div className="absolute left-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/30 opacity-40 blur-[80px]" />
          <div className="absolute bottom-0 right-0 -z-10 h-[350px] w-[350px] rounded-full bg-accent/30 opacity-40 blur-[80px]" />
        </div>
      );

    default:
      return (
        <div className={containerClasses}>
          {/* Gradient blobs in the background */}
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-primary/40 opacity-40 blur-[100px]" />
          <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-accent/40 opacity-40 blur-[100px]" />
          <div className="absolute left-0 top-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-primary/50 opacity-40 blur-[100px]" />

          {/* SVG pattern overlay */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.15]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 20 L40 20 M20 0 L20 40"
                  strokeWidth="1"
                  className="stroke-foreground"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
      );
  }
};

// Additional component for animated floating shapes
export const FloatingShapes = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute -top-20 left-[10%] h-40 w-40 animate-float opacity-40">
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="80" cy="80" r="80" className="fill-primary" />
        </svg>
      </div>

      <div className="absolute right-[5%] top-[20%] h-20 w-20 animate-float opacity-40 delay-300">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="80" height="80" className="fill-accent" />
        </svg>
      </div>

      <div className="absolute bottom-[10%] left-[15%] h-24 w-24 animate-float opacity-40 delay-500">
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="48,0 96,96 0,96" className="fill-primary" />
        </svg>
      </div>

      <div className="absolute bottom-[20%] right-[20%] h-32 w-32 animate-float opacity-40 delay-200">
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64 0L128 64L64 128L0 64L64 0Z" className="fill-accent" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundElements;
