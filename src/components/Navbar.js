import React, { useState } from "react";
import { resume } from "../data";
import { Github, Linkedin, XCircle } from "react-bootstrap-icons";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
        <nav className="flex flex-wrap">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#about" className="inline-flex mt-4 md:mt-0">
                <h2 className="text-2xl font-medium text-black ml-3">Tara Baker</h2>
              </a>
              <div className="absolute left-6 md:ml-6 inline-flex">
                <a className="inline-flex items-center py-1 px-3 focus:outline-none hover:text-tealish rounded text-base mt-4 md:mt-0 md:hidden"
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? (<XCircle></XCircle>) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </a>
              </div>
            </div>
            <div className="md:border-l md:border-gray-700 md:ml-6 md:pl-6 text-black text-lg">
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
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
