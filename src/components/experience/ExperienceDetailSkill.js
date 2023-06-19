import React from "react";

export default function ExperienceDetailSkill(props) {
  return (
          <div>
            {props.skills.map((skill) => (
              <span class="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{skill}</span>
            ))}  
          </div>
  );
}
