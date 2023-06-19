import React from "react";
import ExperienceDetailSkill from './ExperienceDetailSkill';
import ExperienceDetailRole from "./ExperienceDetailRole";

export default function ExperienceDetails(props) {
  if (props.direction == "right"){
    return (
      <div class="mt-10 sm:mt-0 sm:mb-12" data-aos="fade-right" data-aos-once>
      <div class="flex flex-col sm:flex-row items-center">
        <div class="flex justify-start w-full mx-auto items-center">
          <div class="w-full sm:w-1/2 sm:pr-8">
            <div class="p-4 bg-white bg-opacity-80 rounded shadow" >
              <p className="text-base font-bold">{props.company}</p>
              {props.roles.map((r) => (
                 <ExperienceDetailRole {...r}></ExperienceDetailRole>
              ))}
              <div class="px-6 pt-4 pb-2">
                  <ExperienceDetailSkill skills={props.job_skills}></ExperienceDetailSkill>
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
    );
  } else {
    return (
      <div class="mt-10 sm:mt-0 sm:mb-12" data-aos="fade-left" data-aos-once>
      <div class="flex flex-col sm:flex-row items-center">
        <div class="flex justify-end w-full mx-auto items-center">
          <div class="w-full sm:w-1/2 sm:pr-8">
            <div class="p-4 bg-white bg-opacity-80 rounded shadow" >
              <p className="text-base font-bold">{props.company}</p>
              {props.roles.map((r) => (
                 <ExperienceDetailRole {...r}></ExperienceDetailRole>
              ))}
              <div class="px-6 pt-4 pb-2">
                  <ExperienceDetailSkill skills={props.job_skills}></ExperienceDetailSkill>
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
    );
  }

}
