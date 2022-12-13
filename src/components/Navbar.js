import React from "react";
import { resume } from "../data";
import { Github, Linkedin } from "react-bootstrap-icons";

export default function Navbar() {
  return (
    <header className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Tara Baker
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#experience" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a
            href={resume.file}
            download
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Resume
          </a>
        </nav>
        <a
          href="https://github.com/tm-baker"
          className="inline-flex items-center py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0">
           <Github></Github>
        </a>
        <a
          href="https://www.linkedin.com/in/taramoskam/"
          className="inline-flex items-center py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0">
           <Linkedin></Linkedin>
        </a>
      </div>
    </header>
  );
}
