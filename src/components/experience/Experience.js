import React, { useEffect } from "react";
import { DocumentTextIcon, FlagIcon } from "@heroicons/react/outline";
import AOS from 'aos';
import "aos/dist/aos.css";

import { experience } from "../../data";
import ExperienceDetails from './ExperienceDetails';

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <section id="experience" className="text-black bg-gray-50 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <DocumentTextIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Where I've Worked
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I am currently working as a Senior Full Stack Developer at The Canadian Medical Protective Association. I am also studying at McMaster University, pursuing a Bachelor's of Technology - Software Engineering.
          </p>
        </div>

        {/* Reference for the timeline code:  https://tailwindcomponents.com/component/responsive-vertical-timeline-1 */}
        <div className="flex flex-wrap -m-4">
          <div class="py-3 sm:mx-auto w-full px-2 sm:px-0">
            <div class="relative text-gray-700 antialiased text-sm font-semibold">

              {/* Line down middle of timeline */}
              <div class="hidden sm:block w-1 bg-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>

              {/* End of the timeline (today) - hide on mobile */}
              <div class="hidden md:flex mt-10 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="rounded-full bg-grey-500 border-tealish border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <FlagIcon className="text-tealish h-5 w-5"></FlagIcon>
                  </div>
                </div>
              </div>
              {
                experience.map((e)=> (
                  <ExperienceDetails {...e}></ExperienceDetails>
                ))
              }
              {/* Begin - hide on mobile */}
              <div class="hidden md:flex mt-20 sm:mt-0">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="rounded-full bg-grey-500 border-tealish border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" class="text-tealish h-5 w-5" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
