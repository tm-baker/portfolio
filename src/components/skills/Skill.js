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
    <div key={props.skill} className="p-2 sm:w-1/3 w-full"  data-aos="fade" data-aos-delay="100">
          <div className="bg-tealish rounded flex p-4 h-full items-center text-white">
            <BadgeCheckIcon className="w-6 h-6 flex-shrink-0 mr-4" />
            <span className="title-font font-medium text-lg">
              {props.skill}
            </span>
          </div>
        </div>
  );
}
