import React from "react";
import PhishGuard from "../assets/portfolio/PhishGuard.jpg";
import BumbleBee from "../assets/portfolio/BumbleBee.jpg";
import PhishGuardAPI from "../assets/portfolio/FlaskAPI.jpg";
import portfolio from "../assets/portfolio/portfolio.jpg";
import Calculator from "../assets/portfolio/Calculator.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: PhishGuard,
      demoLink: "https://youtu.be/FPyVsbXkO2w",
      githubLink:
        "https://github.com/thanushan96/Phishing-URL-Detection-System-UI.git",
      title: "PhishGuard UI",
      description:
        "Designed and developed the user interface for PhishGuard, a web application focused on detecting phishing URLs. Leveraged a combination of HTML, Bootstrap, and React to create an intuitive and user-friendly interface.",
    },
    {
      id: 2,
      src: PhishGuardAPI,
      demoLink: "https://youtu.be/FPyVsbXkO2w",
      githubLink:
        "https://github.com/thanushan96/Phishing-URL-Detection-System-API.git",
      title: "PhishGuard API",
      description:
        "Developed the Python FLASK API for the PhishGuard project, leveraging deep neural networks for URL processing & extraction. The main goal is to predict URL legitimacy, aiding users in identifying potential phishing threats .",
    },
    {
      id: 3,
      src: portfolio,
      demoLink: "https://thanushan96.github.io/portfolio/",
      githubLink: "https://github.com/yourusername/project3",
      title: "Portfolio Website",
      description:
        "Built my portfolio website using a combination of HTML, Tailwind CSS, React.js, and more. This website showcases my skills and projects, with a strong emphasis on creating user-friendly web development solutions.",
    },
    {
      id: 4,
      src: Calculator,
      demoLink: "https://youtu.be/1QHVkMpHHIc",
      githubLink: "https://github.com/thanushan96/Calculator.git",
      title: "Calculator",
      description:
        "Designed and built a dynamic calculator using React, HTML, and CSS, providing users with a feature-rich tool for performing various mathematical operations. The intuitive user interface allows for seamless input and calculation, making it a handy utility for solving mathematical equations and tasks with ease.",
    },
    {
      id: 5,
      src: reactWeather,
      demoLink: "https://youtu.be/10oQYQJryvE",
      githubLink: "https://github.com/thanushan96/Weather-app",
      title: "Weather app",
      description:
        "Built a weather app with HTML, CSS, and React, utilizing the OpenWeatherMap API for real-time weather updates. Users can check current conditions and forecasts with ease, making it a handy tool for staying informed about the weather. The app's user-friendly design ensures a seamless experience for accessing essential weather information.",
    },
    {
      id: 6,
      src: BumbleBee,
      demoLink: "https://youtu.be/-RqqvLtBG-0",
      githubLink: "https://github.com/thanushan96/Bumble-bee-API",
      title: "Bumble Bee Admin Panel",
      description:
        "Developed a versatile Bumble Bee Admin Panel using Spring Boot and React. This robust panel facilitates secure management of users and products, including CRUD operations and loan amount tracking. With a focus on data security, it streamlines administrative tasks, making it an invaluable tool for efficient management.",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-slate-100 to-gray-400 w-full text-black min-h-screen pt-20 md:pt-26 pb-10 sm:pb-30"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <p className="text-4xl font-bold">
          <span className="border-b-4 border-gray-500 ">Portfolio</span>
        </p>

        <p className="py-6">
          Check out some of my work right here or view the source code on
          GitHub.
        </p>

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
                  <p className="text-sm md:text-sm text-gray-600 mt-2 text-justify">
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
