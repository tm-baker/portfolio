import { CodeIcon } from "@heroicons/react/solid";
import React, {useEffect} from "react";
import { projects } from "../data";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Things I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Occasionally, I take on freelance projects.
          </p>
        </div>
        <div className="flex flex-wrap">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/3 w-100 p-2">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={project.image}
                />
                <div className="px-4 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
