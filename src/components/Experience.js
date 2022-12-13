import React, {useEffect} from "react";
import { DocumentTextIcon } from "@heroicons/react/solid";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <section id="experience" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20" data-aos="zoom-in">
            <DocumentTextIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Experience
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </p>
          </div>
          {/* Reference for the timeline code:  https://tailwindcomponents.com/component/responsive-vertical-timeline-1 */}
          <div className="flex flex-wrap -m-4">
            <div class="py-3 sm:mx-auto w-full px-2 sm:px-0">
              <div class="relative text-gray-700 antialiased text-sm font-semibold">
                {/* Line down middle of timeline */}
                <div class="hidden sm:block w-1 bg-gray-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-right">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pr-8">
                        <div class="p-4 bg-white bg-opacity-80 rounded shadow" >
                          <p><strong>MAK Consulting Group</strong></p>
                          <p class="italic">Senior Programmer Analyst/Team Lead</p>
                          <p>January 2021 - Present</p>
                          <br />
                          <p class="italic">Programmer Analyst</p>
                          <p>January 2017-December 2021</p>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-grey-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-left">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-end w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pl-8">
                        <div class="p-4 bg-white bg-opacity-80 rounded shadow">
                          <p><strong>Mohawk College</strong></p>
                          <p class="italic">Part Time, Professor of Software Engineering</p>
                          <p>September 2021 - Present</p>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-grey-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-right">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pr-8">
                        <div class="p-4 bg-white bg-opacity-80 rounded shadow">
                          <p><strong>iDeaWorks Mohawk College</strong></p>
                          <p class="italic">Software Developer</p>
                          <p>January 2015 - December 2016</p>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-grey-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="mt-6 sm:mt-0" data-aos="fade-left">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-end w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pl-8">
                        <div class="p-4 bg-white bg-opacity-80 rounded shadow">
                          <p><strong>Mohawk College</strong></p>
                          <p class="italic">Student, Graduated with Honours</p>
                          <p>September 2012 - December 2016</p>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-grey-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
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
