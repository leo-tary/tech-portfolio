import React from "react";
import {
  cssImg,
  htmlImg,
  javascriptImg,
  reactImg,
  tailwindImg,
  githubImg,
  graphqlImg,
  nextImg,
  nodeImg,
} from "../constants";

const Expertise = () => {
  const languages = [
    { id: 1, title: "CSS", image: cssImg, style: "blue-300" },
    { id: 2, title: "HTML", image: htmlImg, style: "red-300" },
    {
      id: 3,
      title: "Javascript",
      image: javascriptImg,
      style: "yellow-300",
    },
    { id: 4, title: "React", image: reactImg, style: "cyan-300" },
    { id: 5, title: "Github", image: githubImg, style: "white" },
    { id: 6, title: "GraphQL", image: graphqlImg, style: "pink-300" },
    { id: 7, title: "Next", image: nextImg, style: "white" },
    { id: 8, title: "Node", image: nodeImg, style: "green-300" },
    { id: 9, title: "Tailwind", image: tailwindImg, style: "cyan-300" },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-4 text-white mb-4">
      <h1 className="text-3xl my-4 mx-auto">
        My <span>Expertise</span>
      </h1>
      <p className="mx-auto px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rerum?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {languages.map((language) => {
          return (
            <div
              key={language.id}
              className="flex flex-col justify-center items-center gap-4"
            >
              <img
                src={language.image}
                alt={language.title}
                className={`cursor-pointer hover:scale-110 duration-300 rounded-md shadow-md w-2/4 shadow-${language.style}`}
              />
              <div className={`text-xl text-${language.style}`}>
                {language.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expertise;
