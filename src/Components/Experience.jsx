import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import flask from "../assets/Flask.png";
import net from "../assets/NET_Core_Logo.png";
import jenkins from "../assets/jenkins.png";
import spring from "../assets/spring boot.png";
import mongo from "../assets/MongoDB.png";
import tensorflow from "../assets/Tensorflow.png";
import mysql from "../assets/mysql_workbench.png";
import ssms from "../assets/ssms.png";
import postgresql from "../assets/Postgresql.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-indigo-800",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-600",
    },
    {
      id: 7,
      src: flask,
      title: "flask",
      style: "shadow-gray-900",
    },
    {
      id: 8,
      src: net,
      title: ".Net",
      style: "shadow-indigo-800",
    },
    {
      id: 9,
      src: spring,
      title: "spring boot",
      style: "shadow-green-800",
    },
    {
      id: 10,
      src: tensorflow,
      title: "Tensorflow",
      style: "shadow-orange-900",
    },
    {
      id: 11,
      src: mysql,
      title: "Mysql",
      style: "shadow-blue-600",
    },
    {
      id: 12,
      src: mongo,
      title: "mongo db",
      style: "shadow-green-800",
    },
    {
      id: 13,
      src: postgresql,
      title: "Postgresql",
      style: "shadow-blue-800",
    },
    {
      id: 14,
      src: ssms,
      title: "MS Sql",
      style: "shadow-yellow-800",
    },

    {
      id: 15,
      src: github,
      title: "GitHub",
      style: "shadow-gray-950",
    },
    {
      id: 16,
      src: jenkins,
      title: "Jenkins",
      style: "shadow-red-800",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-slate-100  to-gray-400 w-full h-screen pb-[60rem] sm:pb-[22rem]  pt-[52rem] sm:pt-[30rem]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black ">
        <div>
          <p className="text-4xl font-bold">
            <span className="border-b-4 border-gray-500 ">Experience</span>
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
