import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function About() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center" data-aos="zoom-in">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
            Hello World, I'm Tara.
          </h1>
          <h2 className="text-white-200 title-font sm:text-3xl text-2xl mb-4">
            I like to build beautiful, functional solutions.
          </h2>
          <p className="mb-8 leading-relaxed">
          I'm a full stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, 
          I'm focused on building global enterprise software at <a href='https://makcg.com' className="text-purple-500 hover:text-white">MAK</a>.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Get in Touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              What I've Been Working On
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
