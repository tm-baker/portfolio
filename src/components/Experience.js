import React, { useEffect } from "react";
import { DocumentTextIcon, AcademicCapIcon, BeakerIcon, CalculatorIcon, FlagIcon } from "@heroicons/react/outline";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <section id="experience" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <DocumentTextIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Where I've Worked
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I'm currently working as a Development Team Manager at MAK Consulting Group.
          </p>
        </div>

        {/* Reference for the timeline code:  https://tailwindcomponents.com/component/responsive-vertical-timeline-1 */}
        <div className="flex flex-wrap -m-4">
          <div class="py-3 sm:mx-auto w-full px-2 sm:px-0">
            <div class="relative text-gray-700 antialiased text-sm font-semibold">

              {/* Line down middle of timeline */}
              <div class="hidden sm:block w-1 bg-gray-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>

              {/* End of the timeline (today) - hide on mobile */}
              <div class="hidden md:flex mt-10 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="rounded-full bg-grey-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <FlagIcon className="text-white h-5 w-5"></FlagIcon>
                  </div>
                </div>
              </div>
              {/* MAK BLOCK 1 */}
              <div class="mt-10 sm:mt-0 sm:mb-12" data-aos="fade-right" data-aos-once>
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="p-4 bg-white bg-opacity-80 rounded shadow" >
                        <p className="text-base font-bold">MAK Consulting Group</p>
                        <p className="text-pink-800">Development Team Manager</p>
                        <p>January 2023 - Present</p>
                        <br />
                        <p className="text-pink-800">Senior Programmer Analyst/Team Lead</p>
                        <p>January 2021 - December 2022</p>
                        <br />
                        <p className="text-pink-800">Programmer Analyst</p>
                        <p>January 2017 - December 2020</p>
                        <div class="px-6 pt-4 pb-2">
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Angular</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">AngularJS</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">C#</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">.NET Web Services</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">SQL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-grey-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" class="text-white h-5 w-5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                </div>
              </div>
              {/*Teaching Block */}
              <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-left" data-aos-once>
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-white bg-opacity-80 rounded shadow">
                        <p className="text-base font-bold">Mohawk College</p>
                        <p className="text-pink-800">Professor of Software Engineering</p>
                        <p>September 2021 - Present</p>
                        <p>Part-time, Evening, Contract</p>
                        <div class="px-6 pt-4 pb-2">
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">React Native</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">ReactJS</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Wordpress</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">VueJS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-grey-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <CalculatorIcon className="text-white h-5 w-5"></CalculatorIcon>
                  </div>
                </div>
              </div>
              {/* iDeaWORKS Research Lab */}
              <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-right" data-aos-once>
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="p-4 bg-white bg-opacity-80 rounded shadow">
                        <p className="text-base font-bold">iDeaWORKS Mohawk College</p>
                        <p class="text-pink-800">Software Developer</p>
                        <p>January 2015 - December 2016</p>
                        <div class="px-6 pt-4 pb-2">
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">C#</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">ASP.NET</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">HL7 FHIR</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Javascript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-grey-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <BeakerIcon className="text-white h-5 w-5"></BeakerIcon>
                  </div>
                </div>
              </div>
              {/* Student */}
              <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-left" data-aos-once>
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-white bg-opacity-80 rounded shadow">
                        <p className="text-base font-bold">Mohawk College</p>
                        <p class="text-pink-800">Student, Graduated with Honours</p>
                        <p>September 2012 - December 2016</p>
                        <div class="px-6 pt-4 pb-2">
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Java</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">HTML/CSS</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">PHP</span>
                          <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Javascript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-grey-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <AcademicCapIcon className="text-white h-5 w-5"></AcademicCapIcon>
                  </div>
                </div>
              </div>
              {/* Begin - hide on mobile */}
              <div class="hidden md:flex mt-20 sm:mt-0">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="rounded-full bg-grey-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" class="text-white h-5 w-5" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
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
