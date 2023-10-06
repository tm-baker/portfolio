import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";

export default function App() {
  return (
    <main className="text-black body-font bg-[url('/assets/background.jpg')] bg-contain bg-no-repeat">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
