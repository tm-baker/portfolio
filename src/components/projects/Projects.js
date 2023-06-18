import React, { useEffect } from "react";
import { CodeIcon } from "@heroicons/react/solid";
import AOS from 'aos';
import "aos/dist/aos.css";

import { projects } from "../../data";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-20 mx-auto text-center lg:px-30">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Things I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Occasionally, I take on freelance projects or build things for fun.
          </p>
        </div>
        <div className="flex flex-wrap w-full">
          {projects.map((project) => (
            <ProjectDetails {...project}></ProjectDetails>
          ))}
        </div>
      </div>
    </section>
  );
}
