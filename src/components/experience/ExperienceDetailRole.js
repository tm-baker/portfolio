import React from "react";

export default function ExperienceDetailRole(props) {
  return (
          <div>
            <p className="text-pink-800">{props.title}</p>
            <p>{props.period}</p>
            <p>{props.details}</p>
          </div>
  );
}
