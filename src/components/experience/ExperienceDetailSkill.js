import React from "react";

export default function ExperienceDetailSkill(props) {
  return (
          <div>
            {props.skills.map((skill) => (
              <span class="inline-block bg-tealish text-base rounded-full px-3 py-1 font-semibold text-white mr-2 mb-2">{skill}</span>
            ))}  
          </div>
  );
}
