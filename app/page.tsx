"use client";
import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <MainLayout backgroundVariant="dots">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </MainLayout>
  );
}
