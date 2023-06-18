import React from "react";

export default function ProjectDetails(props) {
  return (
    <a
    href={props.link}
    key={props.image}
    className="sm:w-1/2 w-100 p-2">
    <div className="flex relative">
      <img
        alt="gallery"
        className="relative inset-0 w-full h-full object-fit object-center px-10"
        src={props.image}
      />
      <div className="px-4 py-10 absolute z-10 h-full w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        <div className="pt-0 lg:pt-16 align-middle">
          <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
            {props.subtitle}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {props.title}
          </h1>
          <p className="leading-relaxed">{props.description}</p>
        </div>
      </div>
    </div>
  </a>
  );
}
