"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorfulBackground from "@/components/ColorfulBackground";

interface MainLayoutProps {
  children: ReactNode;
  backgroundVariant?: "default" | "grid" | "dots" | "waves";
}

const MainLayout = ({
  children,
  backgroundVariant = "default",
}: MainLayoutProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Add intersection observer for animation on scroll
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      {/* Use our more visually striking ColorfulBackground component */}
      <ColorfulBackground />

      <Navbar />
      <main className="relative z-[1] flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
