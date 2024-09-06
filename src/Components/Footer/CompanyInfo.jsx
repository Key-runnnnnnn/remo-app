import React from "react";
import zomo from "../../assets/zomo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const CompanyInfo = () => {
  return (
    <div className="w-full md:w-[224px] md:h-[272px] p-4">
      <img src={zomo} alt="Company Logo" className="bg-white w-[150px] mb-5" />
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:text-gray-300 font-bold mb-2">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            <span className="font-bold">Email:</span> hello@zymo.app
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            <span className="font-bold">Phone:</span> +91 9987933348
          </a>
        </li>
      </ul>
      <div className=" flex flex-col items-start text-center mb-4">
        <div className="font-bold mb-5">Follow Us</div>
        <div className="flex">
          <a href="#" className="mr-4 hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="mr-4 hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="#" className="mr-4 hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="#" className="mr-4 hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="mr-4 hover:text-gray-300">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
