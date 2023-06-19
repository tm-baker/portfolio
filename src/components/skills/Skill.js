import { BadgeCheckIcon } from "@heroicons/react/solid";
import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Skill(props) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div key={props.skill} className="p-2 sm:w-1/2 w-full"  data-aos="fade" data-aos-delay="500">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <span className="title-font font-medium text-white">
              {props.skill}
            </span>
          </div>
        </div>
  );
}
