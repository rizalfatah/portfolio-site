import React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

interface ThemeToggleProps {
  className?: string;
  variant?: "icon" | "button";
}

export function ThemeToggle({ className = "", variant = "icon" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  function cycleTheme() {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  }

  return (
    <button
      onClick={cycleTheme}
      className={`${className} ${
        variant === "button"
          ? "py-2 px-4 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          : "p-2 rounded-full hover:bg-accent/10 transition-colors"
      } outline-none focus-visible:ring-2 focus-visible:ring-ring`}
      title={`Current theme: ${theme}`}
      aria-label={`Current theme: ${theme}`}
    >
      {theme === "light" && <Sun size={variant === "button" ? 16 : 20} className={variant === "button" ? "mr-2" : ""} />}
      {theme === "dark" && <Moon size={variant === "button" ? 16 : 20} className={variant === "button" ? "mr-2" : ""} />}
      {theme === "system" && <Laptop size={variant === "button" ? 16 : 20} className={variant === "button" ? "mr-2" : ""} />}
      {variant === "button" && (
        <span className="capitalize">
          {theme === "system" ? "Auto" : theme}
        </span>
      )}
    </button>
  );
}
