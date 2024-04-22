import { profileImg } from "../constants";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="container mx-auto h-auto flex flex-col-reverse md:flex-row justify-around items-center px-4 gap-4">
      <div className=" w-1/2 flex flex-col gap-6">
        <p className="text-orange-300 lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-semibold md:font-light">
          Hi, I am tInfinity
        </p>
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
          <TypeAnimation
            sequence={[
              "Full Stack Maven",
              1000,
              "Tech Evangelist",
              1000,
              "Consultant",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-gray-500 text-2xl">with 14 years of experience</p>
        <div className="text-white flex gap-4">
          <AiFillLinkedin size={30} />
          <AiFillGithub size={30} />
          <AiFillInstagram size={30} />
        </div>
        <div className="group hover:scale-105 duration-500 cursor-pointer flex gap-2 items-center rounded-lg px-3 py-2 w-fit text-base font-semibold text-green-950 bg-gradient-to-r from-[#a2599f] via-orange-300 to-[#9844a3] shadow-gray-500 shadow-md animate-pulse">
          <p>
            <a href="./Vite.svg" download={true} target="_blank">
              Download
            </a>
          </p>
          <BsFillPersonLinesFill />
          <MdOutlineKeyboardArrowRight
            size={20}
            className="group-hover:rotate-90 duration-300"
          />
        </div>
      </div>
      <div>
        <img
          className="w-[300px] md:w-[500px] mx-auto rounded-full hover:scale-105 duration-300 -z-10"
          src={profileImg}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Hero;
