import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const togglenav = () => {
    setNav((prev) => {
      return !prev;
    });
  };

  return (
    <div className="z-10 text-[#f4cca3] text-lg font-normal container mx-auto flex justify-between items-center h-16 p-4">
      <h1 className="primary-color text-3xl font-bold ml-4">tInfinity</h1>
      <ul className="md:flex gap-4 hidden">
        <li>
          <a href="#home"></a>Home
        </li>
        <li>
          <a href="#about"></a>About
        </li>
        <li>
          <a href="#projects"></a>Projects
        </li>
        <li>
          <a href="#experience"></a>Experience
        </li>
        <li>
          <a href="#expertise"></a>Expertise
        </li>
      </ul>
      <div onClick={togglenav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "z-10 fixed h-2/3 left-0 top-0 w-[50%] bg-[#202121] rounded-r-lg ease-in-out duration-500"
            : "fixed left-[-100%] top-0 h-2/3 w-[50%] ease-in-out duration-500"
        }
      >
        <h1 className="primary-color text-3xl m-4 ">tInfinity</h1>
        <ul className="flex flex-col justify-center items-center gap-8 p-4">
          <li>
            <a href="#home"></a>Home
          </li>
          <li>
            <a href="#about"></a>About
          </li>
          <li>
            <a href="#projects"></a>Projects
          </li>
          <li>
            <a href="#experience"></a>Experience
          </li>
          <li>
            <a href="#expertise"></a>Expertise
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
