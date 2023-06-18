import { ChipIcon } from "@heroicons/react/solid";
import React from "react";

import { skills } from "../../data";
import Skill from "./Skill";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here's some of the languages, frameworks, libraries and tools I have been working with.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <Skill skill={skill}></Skill>
          ))}
        </div>
      </div>
    </section>
  );
}