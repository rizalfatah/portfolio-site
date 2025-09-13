import React, { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    document.title = "Rizal Saifulloh Fatah | Backend Developer";
  }, []);

  return (
    <MainLayout backgroundVariant="dots">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default Index;
