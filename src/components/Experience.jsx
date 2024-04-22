import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Current Company",
      status: "2018 - Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est suscipit hic mollitia quam provident!",
    },
    {
      id: 2,
      company: "Some Company",
      status: "2014 - 2018",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est suscipit hic",
    },
    {
      id: 3,
      company: "Some Company",
      status: "2012 - 2014",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      company: "Some Company",
      status: "2007 - 2012",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est suscipit hic mollitia quam provident!",
    },
  ];

  return (
    <div className="py-10 bg-[#232325]">
      <h2 className="text-3xl text-center text-white">
        My <span>Experience</span>
      </h2>

      {experiences.map((experience, index) => {
        return (
          <>
            <div
              key={experience.id}
              className=" text-white bg-gray-700/20 p-4 rounded-3xl mx-[20%] my-4 w-2/3"
            >
              <h1 className="text-2xl">{experience.company}</h1>
              <p className="text-xl">
                <span>{experience.status}</span>
              </p>
              <p className="text-orange-300">{experience.description}</p>
            </div>

            {index < experiences.length - 1 && (
              <div className="h-[20px] w-[2px] bg-slate-400 my-1 mx-auto"></div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Experience;
