"use client";

import React from "react";
import { useTheme } from "@/lib/theme-provider";

const ColorfulBackground = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Top right gradient */}
      <div
        className={`absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-bl from-primary via-primary/40 to-transparent ${isDark ? "opacity-40" : "opacity-60"} blur-3xl`}
        style={{ animation: "pulse 8s infinite alternate" }}
      />

      {/* Bottom left gradient */}
      <div
        className={`absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-accent via-accent/40 to-transparent ${isDark ? "opacity-40" : "opacity-60"} blur-3xl`}
        style={{ animation: "pulse 10s infinite alternate-reverse" }}
      />

      {/* Center background decoration */}
      <div
        className={`absolute inset-0 bg-grid-pattern ${isDark ? "opacity-5" : "opacity-10"}`}
      />

      {/* Floating circles */}
      <div
        className={`absolute left-1/4 top-1/4 h-16 w-16 rounded-full bg-primary ${isDark ? "opacity-10" : "opacity-20"} animate-float`}
      />
      <div
        className={`absolute right-1/4 top-1/3 h-8 w-8 rounded-full bg-accent ${isDark ? "opacity-10" : "opacity-20"} animate-float`}
        style={{ animationDelay: "2s" }}
      />
      <div
        className={`absolute bottom-1/4 left-1/3 h-12 w-12 rounded-full bg-primary ${isDark ? "opacity-10" : "opacity-20"} animate-float`}
        style={{ animationDelay: "4s" }}
      />
      <div
        className={`absolute bottom-1/3 right-1/3 h-10 w-10 rounded-full bg-accent ${isDark ? "opacity-10" : "opacity-20"} animate-float`}
        style={{ animationDelay: "6s" }}
      />
    </div>
  );
};

export default ColorfulBackground;
