import React from "react";
import { resume } from "../data";
import { Github, Linkedin } from "react-bootstrap-icons";

export default function Navbar() {

  return (
    <header className="top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
        <nav className="flex flex-wrap">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#about" className="hidden md:inline-flex md:mt-0">
                <h2 className="text-2xl font-medium text-black ml-3">Tara Baker</h2>
              </a>
            </div>
            <div className="md:border-l md:border-gray-700 md:ml-6 md:pl-6 text-black text-lg">
              <div className="hidden flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0">
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="hover:text-tealish border-b md:border-gray-700 md:border-0">
                    <a href="#experience">Experience</a>
                  </li>
                  <li className="hover:text-tealish border-b md:border-gray-700 md:border-0">
                    <a href="#projects">Projects</a>
                  </li>
                  <li className="hover:text-tealish border-b md:border-gray-700 md:border-0">
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="hover:text-tealish border-b md:border-gray-700 md:border-0">
                    <a
                      href={resume.file}
                      download
                      className="md:items-center border-0 focus:outline-none">
                      Resume
                    </a>
                  </li>
                  <li className="hover:text-tealish border-b md:border-gray-700 md:border-0">
                    <a
                    href="https://github.com/tm-baker"
                    className="inline-flex text-lg items-center py-1 px-3 focus:outline-none hover:text-tealish rounded mt-4 md:mt-0">
                    <Github></Github>
                    </a>
                  </li>
                  <li>
                    <a
                    href="https://www.linkedin.com/in/taramoskam/"
                    className="inline-flex items-center py-1 px-3 focus:outline-none hover:text-tealish rounded text-base mt-4 md:mt-0">
                    <Linkedin></Linkedin>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header >
  );
}
