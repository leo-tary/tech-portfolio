import React from "react";
import {
  projectOneImg,
  projectTwoImg,
  projectThreeImg,
  projectFourImg,
  projectFiveImg,
  projectSixImg,
} from "../constants";

const Projects = () => {
  const projects = [
    { id: 1, image: projectOneImg, style: "shadow-blue-400" },
    { id: 2, image: projectTwoImg, style: "shadow-cyan-300" },
    { id: 3, image: projectThreeImg, style: "shadow-green-400" },
    { id: 4, image: projectFourImg, style: "shadow-cyan-200" },
    { id: 5, image: projectFiveImg, style: "shadow-purple-400" },
  ];

  return (
    <div className="h-auto max-w-7xl mx-auto py-4 px-6">
      <div className="flex flex-col gap-4 text-white">
        <h1 className="text-3xl">
          My<span> Projects</span>
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, id?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className={`rounded-md shadow-md flex flex-col ${project.style}`}
              >
                <img
                  src={project.image}
                  className="rounded-lg hover:scale-105 duration-500 cursor-pointer"
                />
                <div className="flex justify-around py-2 text-xl">
                  <h1>
                    <span>Demo</span>
                  </h1>
                  <h1 className="text-orange-300 animate-pulse">Code</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
