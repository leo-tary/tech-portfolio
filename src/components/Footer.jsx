import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 border-t border-gray-500 w-full">
      <div className="flex flex-col items-center justify-center gap-2 mt-4 text-white text-lg">
        <p className="">
          <span>45th Street</span>
        </p>
        <p className="text-orange-300">Some Boulevard</p>
        <div className="flex justify-evenly gap-4 mb-2">
          <FaGithubSquare size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
