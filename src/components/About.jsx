import React from "react";
import { aboutImg } from "../constants";

const About = () => {
  return (
    <div className="bg-[#232325] h-auto text-white">
      <div className="flex flex-col md:flex-row justify-around items-center gap-4 mx-auto container py-10 px-12 md:px-4">
        <img
          src={aboutImg}
          alt="about"
          className="object-cover h-[250px] rounded-md filter grayscale brightness-50"
        />
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-3xl mt-4 md:mt-8 lg:mt-2">
            About <span>Me</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            id molestias est animi culpa esse corrupti blanditiis debitis
            voluptas voluptate.
          </p>

          <div className="flex gap-4">
            <div className="bg-[#333333]/40 w-fit rounded-md shadow-md">
              <div className="flex flex-col lg:p-2 lg:gap-4 px-2">
                <h1 className="text-2xl">
                  25<span>+</span>
                </h1>
                <p className="text-lg">Projects</p>
              </div>
            </div>

            <div className="bg-[#333333]/40 w-fit rounded-md shadow-md">
              <div className="flex flex-col lg:p-2 lg:gap-4 px-2">
                <h1 className="text-2xl">
                  14<span>+</span>
                </h1>
                <p className="text-lg">Experience</p>
              </div>
            </div>

            <div className="bg-[#333333]/40 w-fit rounded-md shadow-md">
              <div className="flex flex-col lg:p-2 lg:gap-4 px-2">
                <h1 className="text-2xl">
                  10<span>+</span>
                </h1>
                <p className="text-lg">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
