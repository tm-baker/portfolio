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
    <section id="about" className="flex flex-col h-screen">
      <div className="container flex m-auto md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:pl-24 md:pr-16 -mt-40 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font lg:text-7xl text-4xl mb-4 font-medium text-white" data-aos="fade" id="helloWorld" data-aos-easing="linear">
            Hello World, I'm Tara.
          </h1>
          <h2 className="text-white-200 title-font lg:text-5xl text-2xl font-medium mb-4" id="functionalWebsites" data-aos-anchor="#helloWorld" data-aos="fade" data-aos-delay="1000">
            I like to build beautiful, functional solutions.
          </h2>
          <p className="mb-8 w-2/3 leading-relaxed text-lg" data-aos="fade" data-aos-delay="2000">
          I'm a full stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, 
          I'm focused on developing global enterprise software at <a href='https://makcg.com' className="text-pink-600 hover:text-white">MAK</a>.
          </p>
          <div className="flex justify-center" data-aos="fade" data-aos-delay="2000">
            <a
              href="#contact"
              className="inline-flex text-white bg-pink-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 hover:text-white rounded text-lg">
              Contact Me
            </a>
            <a
              href="#experience"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
