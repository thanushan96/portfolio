import React from "react";
import PhishGuard from "../assets/portfolio/PhishGuard.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: PhishGuard,
      demoLink: "https://youtu.be/FPyVsbXkO2w",
      githubLink: "https://github.com/yourusername/project1",
      title: "PhishGuard UI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      src: reactParallax,
      demoLink: "https://example.com/demo2",
      githubLink: "https://github.com/yourusername/project2",
      title: "Project 2 Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      src: navbar,
      demoLink: "https://example.com/demo3",
      githubLink: "https://github.com/yourusername/project3",
      title: "Project 3 Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      src: reactSmooth,
      demoLink: "https://example.com/demo4",
      githubLink: "https://github.com/yourusername/project4",
      title: "Project 4 Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      src: installNode,
      demoLink: "https://example.com/demo5",
      githubLink: "https://github.com/yourusername/project5",
      title: "Project 5 Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      src: reactWeather,
      demoLink: "https://example.com/demo6",
      githubLink: "https://github.com/yourusername/project6",
      title: "Project 6 Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-slate-100 to-gray-400 w-full text-black min-h-screen pt-5 md:pt-26 pb-10 sm:pb-30"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full py-20">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(
            ({ id, src, demoLink, githubLink, title, description }) => (
              <div key={id} className="rounded-lg overflow-hidden shadow-lg">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md transition-transform transform hover:scale-105 cursor-pointer"
                  />
                </a>
                <div className="p-4">
                  <h2 className="text-lg md:text-lg font-semibold">{title}</h2>
                  <p className="text-sm md:text-sm text-gray-600 mt-2">
                    {description}
                  </p>
                  <button
                    onClick={() => window.open(githubLink, "_blank")}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-transform transform hover:scale-105 cursor-pointer mt-4 flex items-center justify-evenly"
                  >
                    View GitHub Repo
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
